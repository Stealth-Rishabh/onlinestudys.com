import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";
import { submitAdmissionQuery } from "@/lib/crm";

import { toast } from "sonner";
import { getAllStates, getCitiesForState } from "@/lib/stateData";
import { useAdmissionForm } from "@/context/AdmissionFormContext";

const formFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
    validation: (value) => value.trim().length >= 2,
    errorMessage: "Name must be at least 2 characters long",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errorMessage: "Please enter a valid email address",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
    validation: (value) => /^[6-9][0-9]{9}$/.test(value),
    errorMessage:
      "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9",
  },
  {
    name: "coursesid",
    type: "hidden",
    value: "OGLAMBA201",
  },
  {
    name: "state",
    label: "State",
    type: "select",
    placeholder: "Select your state",
    required: true,
    validation: (value) => value !== "",
    errorMessage: "Please select a state",
    options: getAllStates(),
  },
  {
    name: "city",
    label: "City",
    type: "select",
    placeholder: "Select your city",
    required: true,
    validation: (value) => value !== "",
    errorMessage: "Please select a city",
    options: [], // Will be populated based on selected state
  },
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  coursesid: "OGLAMBA201",
  state: "",
  city: "",
  page: "parul",
};

export default function AdmissionQuery({ utmParams }) {
  const { isAdmissionFormOpen, openAdmissionForm, closeAdmissionForm } =
    useAdmissionForm();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "name") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "phone") {
      value = value.replace(/[^0-9]/g, "");
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

    if (name === "state") {
      // Reset city when state changes
      setFormData((prev) => ({ ...prev, city: "" }));
      // Get cities for selected state
      const stateCities = getCitiesForState(value);
      setCities(stateCities);
    }
  };

  const validateField = (name, value) => {
    const field = formFields.find((f) => f.name === name);
    if (!field) return "";
    if (field.required && !value) return `${field.label} is required`;
    if (value && field.validation && !field.validation(value)) {
      return field.errorMessage;
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    formFields.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    // Frontend check for duplicate phone number using localStorage
    let submittedPhoneNumbers =
      JSON.parse(localStorage.getItem("submittedPhoneNumbers")) || [];
    if (submittedPhoneNumbers.includes(formData.phone)) {
      toast.warning(
        "This phone number has already been used to submit a query during this session."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizedFormData = {
        ...formData,
        city: formData.city.replace(/\s/g, ""),
        page: "parul",
      };
      // Submit to CRM first
      const crmResult = await submitAdmissionQuery(
        sanitizedFormData,
        utmParams
      );

      // Try to submit to Google Sheets (optional)
      let sheetsData = { success: false };
      try {
        const sheetsResponse = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...sanitizedFormData,
            campaign: utmParams?.campaign || utmParams?.utm_campaign,
            utm_source: "Stealth",
            utm_medium: utmParams?.utm_medium,
            utm_term: utmParams?.utm_term,
            utm_content: utmParams?.utm_content,
          }),
        });

        if (sheetsResponse.ok) {
          sheetsData = await sheetsResponse.json();
        }
      } catch (error) {
        console.log(
          "Google Sheets submission failed, but CRM succeeded:",
          error
        );
      }

      // Handle success case
      if (crmResult.success || sheetsData.success) {
        toast.success("Form submitted successfully!");
        if (!submittedPhoneNumbers.includes(formData.phone)) {
          submittedPhoneNumbers.push(formData.phone);
          localStorage.setItem(
            "submittedPhoneNumbers",
            JSON.stringify(submittedPhoneNumbers)
          );
        }
        setFormData(initialFormData);
        setErrors({});
        closeAdmissionForm();
        window.location.href = "/thankyou.html";
      } else {
        // Handle error case
        if (sheetsData.isDuplicate) {
          toast.error(
            "This phone number has already been used to submit an inquiry."
          );
          if (!submittedPhoneNumbers.includes(formData.phone)) {
            submittedPhoneNumbers.push(formData.phone);
            localStorage.setItem(
              "submittedPhoneNumbers",
              JSON.stringify(submittedPhoneNumbers)
            );
          }
        } else {
          toast.error("Failed to submit form. Please try again.");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneBlur = () => {
    const phone = formData.phone;
    if (/^[6-9][0-9]{9}$/.test(phone)) {
      let submittedPhoneNumbers =
        JSON.parse(localStorage.getItem("submittedPhoneNumbers")) || [];
      if (submittedPhoneNumbers.includes(phone)) {
        toast.warning(
          "Note: This phone number may have already been used in this session."
        );
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isAdmissionFormOpen && (
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
            <div className="relative flex items-center">
              {/* Vertical Text Label */}

              {/* Main Floating Button */}
              <button
                onClick={openAdmissionForm}
                className="relative group bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110"
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-ping opacity-40"></div>

                {/* Icon */}
                <div className="relative z-10">
                  <MessageCircle className="w-6 h-6" />
                </div>

                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </button>
            </div>
          </div>
        )}

        {isAdmissionFormOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAdmissionForm}
            />

            <motion.div
              className="fixed px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-50 rounded-xl shadow-2xl"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 1000 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold bg-gray-900 text-transparent bg-clip-text">
                      Apply for Online MBA
                    </h2>
                  </div>
                  <button
                    onClick={closeAdmissionForm}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-3">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                        {field.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`w-full p-3 rounded-lg border ${
                            errors[field.name]
                              ? "border-red-500"
                              : "border-gray-200"
                          } bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all duration-200`}
                          required={field.required}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.name === "city" && cities.length > 0
                            ? cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))
                            : field.options.map((option) => (
                                <option
                                  key={
                                    typeof option === "object"
                                      ? option.value
                                      : option
                                  }
                                  value={
                                    typeof option === "object"
                                      ? option.value
                                      : option
                                  }
                                >
                                  {typeof option === "object"
                                    ? option.label
                                    : option}
                                </option>
                              ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`w-full p-3 rounded-lg border ${
                            errors[field.name]
                              ? "border-red-500"
                              : "border-gray-200"
                          } bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all duration-200`}
                          required={field.required}
                          onBlur={
                            field.name === "phone" ? handlePhoneBlur : undefined
                          }
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium mt-2 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Query"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
