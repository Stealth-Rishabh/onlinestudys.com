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
  page: "chandigarh",
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
        page: "chandigarh",
      };

      // PARALLEL API CALLS for faster submission
      const [crmResult, sheetsResponse] = await Promise.all([
        submitAdmissionQuery(sanitizedFormData, utmParams),
        fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...sanitizedFormData,
            page: "chandigarh", // ensure always present
            campaign: utmParams?.campaign || utmParams?.utm_campaign,
            utm_source: utmParams?.utm_source || "Stealth",
            utm_medium: utmParams?.utm_medium,
            utm_term: utmParams?.utm_term,
            utm_content: utmParams?.utm_content,
          }),
        }),
      ]);

      const sheetsData = await sheetsResponse.json();

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
              {/* Main Floating Button */}
              <button
                onClick={openAdmissionForm}
                className="relative group bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-ping opacity-40"></div>
                {/* Icon */}
                <div className="relative z-10">
                  <MessageCircle className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAdmissionFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 transition-colors"
                onClick={closeAdmissionForm}
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Get Free Admission Counseling
              </h2>
              <p className="text-gray-600 mb-6 hidden md:block">
                Speak with our experts and get personalized guidance for
                Chandigarh University's Online MBA.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {formFields.map((field) =>
                  field.type !== "hidden" ? (
                    <div key={field.name}>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${
                            errors[field.name]
                              ? "border-red-400"
                              : "border-gray-200"
                          } rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300`}
                          required={field.required}
                        >
                          <option
                            value=""
                            className="bg-gray-100 text-gray-900"
                          >
                            {field.placeholder}
                          </option>
                          {field.name === "city" && cities.length > 0
                            ? cities.map((city) => (
                                <option
                                  key={city}
                                  value={city}
                                  className="bg-gray-100 text-gray-900"
                                >
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
                                  className="bg-gray-100 text-gray-900"
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
                          className={`w-full px-4 py-3 border ${
                            errors[field.name]
                              ? "border-red-400"
                              : "border-gray-200"
                          } rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300`}
                          required={field.required}
                          onBlur={
                            field.name === "phone" ? handlePhoneBlur : undefined
                          }
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ) : null
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  <span>
                    {isSubmitting
                      ? "⌛Please wait ! Form is Submitting..."
                      : "Get Free Counseling"}
                  </span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
