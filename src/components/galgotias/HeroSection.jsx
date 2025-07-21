import Image from "next/image";
import { useState } from "react";
import { useAdmissionForm } from "@/context/AdmissionFormContext";
import { Star, Award, Play, ArrowRight, Send } from "lucide-react";
import { submitAdmissionQuery } from "@/lib/crm";
import { toast } from "sonner";
import { getAllStates, getCitiesForState } from "@/lib/stateData";

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
    // FIXME: Replace with actual Galgotias course ID
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
  // FIXME: Replace with actual Galgotias course ID
  coursesid: "GALGOTIAS_ONLINE_MBA",
  state: "",
  city: "",
  page: "galgotias",
};

export default function HeroSection() {
  const { openAdmissionForm } = useAdmissionForm();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);

  // Get UTM params from localStorage (similar to AdmissionQuery)
  const utmParams =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("utmParams") || "{}")
      : {};

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
      if (field.type === "hidden") return;
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
        page: "galgotias",
      };
      // Submit to CRM
      const crmResult = await submitAdmissionQuery(
        sanitizedFormData,
        utmParams
      );

      // Submit to Google Sheets
      const sheetsResponse = await fetch("https://nocolleges.com/submit.php", {
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
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/banners/galgotias2.webp')",
      }}
    >
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/60"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-6 lg:py-0 lg:min-h-[calc(100vh-72px)] lg:flex lg:items-center">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 items-center w-full">
          {/* Left Side: Content */}
          <div className="text-white lg:w-3/5 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-block bg-white/10 p-2 rounded-full">
              <div className="flex items-center gap-2 text-sm px-2">
                <Image
                  src="/universities/galgotia-logo.png" // Assumed logo path
                  alt="Galgotias University Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>Galgotias University Online MBA</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Advance Your Career with India’s Best UGC-Entitled Online MBA
              Program
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Our industry-focused curriculum, taught by leading faculty,
              prepares you for success by focusing on core business principles
              and fostering an entrepreneurial mindset.
            </p>

            <div className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>NAAC A+ Accredited</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>NIRF Innovation Ranking (51-100)</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-6 lg:p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white text-center mb-1">
                Apply for Admission
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Get a call back from our experts
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {formFields.map((field) => {
                  if (field.type === "hidden") return null;
                  return (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`w-full p-3 bg-white/20 text-white rounded-md border ${
                            errors[field.name]
                              ? "border-red-500"
                              : "border-transparent"
                          } focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
                          // style={{
                          //   backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23ffffff' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>")`,
                          //   backgroundRepeat: 'no-repeat',
                          //   backgroundPosition: 'right 0.7rem center',
                          //   backgroundSize: '12px',
                          // }}
                          required={field.required}
                        >
                          <option value="" className="text-gray-800 bg-white">
                            {field.placeholder}
                          </option>
                          {(field.name === "city" ? cities : field.options).map(
                            (option, index) => (
                              <option
                                key={index}
                                value={option.value || option}
                                className="text-gray-800 bg-white"
                              >
                                {option.label || option}
                              </option>
                            )
                          )}
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
                            field.name === "phone" ? handlePhoneBlur : undefined
                          }
                          className={`w-full p-3 bg-white/20 text-white rounded-md border ${
                            errors[field.name]
                              ? "border-red-500"
                              : "border-transparent"
                          } focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
                          required={field.required}
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-red-400 text-xs mt-1">
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
          </div>
        </div>
      </div>
    </section>
  );
}
