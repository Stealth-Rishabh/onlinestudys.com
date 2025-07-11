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
    value: "GALGOTIAS_ONLINE_MBA",
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
  coursesid: "GALGOTIAS_ONLINE_MBA",
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
      setFormData((prev) => ({ ...prev, city: "" }));
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

    const newErrors = {};
    formFields.forEach((field) => {
      if (field.type === "hidden") return;
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }

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
      const crmResult = await submitAdmissionQuery(
        sanitizedFormData,
        utmParams
      );
      const sheetsResponse = await fetch(
        "https://www.nocolleges.com/submit.php",
        {
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
        }
      );
      const sheetsData = await sheetsResponse.json();

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
          <motion.button
            className="fixed right-[8px] top-1/3 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 -rotate-90 origin-right z-50 hover:shadow-lg transition-all duration-300 rounded-t-lg font-medium tracking-wide"
            style={{ transformOrigin: "calc(100% - 8px) 50%" }}
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
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAdmissionForm}
            ></motion.div>

            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-6 bg-gray-50 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  Admission Query
                </h2>
                <button
                  onClick={closeAdmissionForm}
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto flex-grow">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {formFields.map((field) => {
                    if (field.type === "hidden") return null;
                    return (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {field.label}
                        </label>
                        {field.type === "select" ? (
                          <select
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className={`w-full p-3 bg-gray-50 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                              errors[field.name]
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            required={field.required}
                          >
                            <option value="">{field.placeholder}</option>
                            {(field.name === "city"
                              ? cities
                              : field.options
                            ).map((option, index) => (
                              <option
                                key={index}
                                value={option.value || option}
                              >
                                {option.label || option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onBlur={
                              field.name === "phone"
                                ? handlePhoneBlur
                                : undefined
                            }
                            className={`w-full p-3 bg-gray-50 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                              errors[field.name]
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            required={field.required}
                          />
                        )}
                        {errors[field.name] && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Apply Now</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="p-6 bg-gray-50 border-t text-center">
                <p className="text-sm text-gray-600">
                  Our counselors will get back to you shortly.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
