import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Send } from "lucide-react";
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
      };
      const dataForSheet = {
        ...sanitizedFormData,
        campaign: utmParams?.campaign || utmParams?.utm_campaign,
        utm_source: utmParams?.utm_source || "Stealth", // Use URL parameter instead of hardcoding
        utm_medium: utmParams?.utm_medium,
        utm_term: utmParams?.utm_term,
        utm_content: utmParams?.utm_content,
      };

      // PARALLEL API CALLS for faster submission
      const [crmResult, sheetsResponse] = await Promise.all([
        submitAdmissionQuery(sanitizedFormData, utmParams),
        fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForSheet),
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
        // Immediate redirect
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
          toast.error(
            crmResult.message || "Failed to submit form. Please try again."
          );
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
          <motion.button
            className="fixed right-[8px] top-1/3 -translate-y-1/2 bg-gradient-to-r from-green-700 to-green-400 text-white px-8 py-4 -rotate-90 origin-right z-50 hover:shadow-lg transition-all duration-300 rounded-t-lg font-medium tracking-wide hidden"
            onClick={openAdmissionForm}
            initial={{ x: 0 }}
            whileHover={{ x: -5, scale: 1.02 }}
            exit={{ x: 100 }}
          >
            <span className="flex items-center gap-2">
              Admission Query
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        )}

        {isAdmissionFormOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAdmissionForm}
            />

            <motion.div
              className="fixed px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-[999] rounded-xl shadow-2xl"
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
                    {/* <p className="text-gray-600 text-sm mt-1">
                      Fill the form below and we'll get back to you
                    </p> */}
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
                          } bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200`}
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
                          } bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200`}
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
                    className="w-full p-3 bg-gradient-to-r from-green-700 to-green-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium mt-2 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting
                      ? "⌛Please wait ! Form is Submitting..."
                      : "Submit Query"}
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
