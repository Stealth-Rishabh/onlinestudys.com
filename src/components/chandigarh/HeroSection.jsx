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
      // Submit to CRM
      const crmResult = await submitAdmissionQuery(
        sanitizedFormData,
        utmParams
      );

      // Submit to Google Sheets
      const sheetsResponse = await fetch(
        "https://www.nocolleges.com/submit.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...sanitizedFormData,
            page: "chandigarh", // <-- ensure this is always present
            campaign: utmParams?.campaign || utmParams?.utm_campaign,
            utm_source: utmParams?.utm_source || "Stealth",
            utm_medium: utmParams?.utm_medium,
            utm_term: utmParams?.utm_term,
            utm_content: utmParams?.utm_content,
          }),
        }
      );

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
        backgroundImage: "url('/banners/chandigarh.png')",
      }}
    >
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/60"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-6 lg:py-0 lg:min-h-[calc(100vh-72px)] lg:flex lg:items-center">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 space-y-4 lg:space-y-8 text-center lg:text-left">
            {/* Ranking Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-3 py-2 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
              <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
              <span>NAAC A+ Accredited University</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="block">Admission Open</span>
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  For Online MBA
                </span>
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-3 text-sm sm:text-base lg:text-xl text-gray-200">
                <Award className="w-4 h-4 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0" />
                <span className="text-center lg:text-left">
                  Top 50 in India for Innovation • Chandigarh University Online
                </span>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-2 lg:gap-4 text-white max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-xs lg:text-base">
                  NAAC A++ Accredited
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-indigo-400 rounded-full flex-shrink-0"></div>
                <span className="text-xs lg:text-base">UGC Approved</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-xs lg:text-base">50k+ Alumni</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="text-xs lg:text-base">Live Classes</span>
              </div>
            </div>

            {/* CTA Buttons */}
          </div>
          <div className="w-full lg:w-5/12 relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl lg:rounded-3xl p-4 lg:p-8 shadow-2xl w-full max-w-xs mx-auto lg:max-w-none lg:mt-6">
              {/* Form Header */}
              <div className="text-center mb-4 lg:mb-6">
                <div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400/20 
                to-indigo-400/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-3 py-1.5 
                lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold mb-2 lg:mb-4"
                >
                  <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
                  <span>Admission Open</span>
                </div>
                <h2 className="text-xl lg:text-3xl font-bold text-white">
                  Get Free Admission Counseling
                </h2>
                <p className="text-gray-300 text-xs lg:text-sm">
                  Speak with our experts and get personalized guidance
                </p>
              </div>

              {/* Admission Form */}
              <form
                className="space-y-2.5 lg:space-y-4"
                onSubmit={handleSubmit}
              >
                {formFields.map((field) =>
                  field.type !== "hidden" ? (
                    <div key={field.name}>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 lg:px-4 lg:py-3 bg-white/10 border ${
                            errors[field.name]
                              ? "border-red-400"
                              : "border-white/20"
                          } rounded-lg lg:rounded-xl text-white text-sm lg:text-base focus:outline-none focus:ring-1 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300`}
                          required={field.required}
                        >
                          <option value="" className="bg-white text-gray-800">
                            {field.placeholder}
                          </option>
                          {field.name === "city" && cities.length > 0
                            ? cities.map((city) => (
                                <option
                                  key={city}
                                  value={city}
                                  className="bg-white text-gray-800"
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
                                  className="bg-white text-gray-800"
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
                          className={`w-full px-3 py-2 lg:px-4 lg:py-3 bg-white/10 border ${
                            errors[field.name]
                              ? "border-red-400"
                              : "border-white/20"
                          } rounded-lg lg:rounded-xl text-white placeholder-gray-300 text-sm lg:text-base focus:outline-none focus:ring-1 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300`}
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
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2.5 lg:px-6 lg:py-4 rounded-lg lg:rounded-xl font-semibold text-sm lg:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  <span>
                    {isSubmitting ? "Submitting..." : "Get Free Counseling"}
                  </span>
                  <Send className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
