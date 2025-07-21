"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import AdmissionFormPopup from "./AdmissionFormPopup";

export default function AutoPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [utmParams, setUtmParams] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    // Get UTM parameters from URL
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const params = {
        utm_source: urlParams.get("utm_source"),
        utm_medium: urlParams.get("utm_medium"),
        utm_campaign: urlParams.get("utm_campaign"),
        utm_term: urlParams.get("utm_term"),
        utm_content: urlParams.get("utm_content"),
        campaign: urlParams.get("campaign"),
      };
      setUtmParams(params);
    }

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Get the appropriate form configuration based on the current page
  const getFormConfig = () => {
    switch (pathname) {
      case "/mca":
        return {
          courseId: "OGLAMCA201",
          pageName: "mca",
          endpoint: "/submit.php",
          title: "Apply for Online MCA",
        };
      case "/amity":
        return {
          courseId: "OGLAMBA201",
          pageName: "amity",
          endpoint: "/submit.php",
          title: "Apply for Online MBA from Amity",
        };
      case "/parul":
        return {
          courseId: "OGLAMBA201",
          pageName: "parul",
          endpoint: "/submit.php",
          title: "Apply for Online MBA from Parul",
        };
      case "/galgotias":
        return {
          courseId: "OGLAMBA201",
          pageName: "galgotias",
          endpoint: "/submit.php",
          title: "Apply for Online MBA from Galgotias",
        };
      case "/chandigarh":
        return {
          courseId: "OGLAMBA201",
          pageName: "chandigarh",
          endpoint: "/submit.php",
          title: "Apply for Online MBA from Chandigarh",
        };
      default:
        return {
          courseId: "OGLAMBA201",
          pageName: "home",
          endpoint: "/submit.php",
          title: "Apply for Online MBA",
        };
    }
  };

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowPopup(false)}
      >
        <motion.div
          className="fixed px-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-[70] rounded-xl shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 1000 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl relative">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Header */}
            <div className="mb-6 pt-2">
              <h2 className="text-2xl font-bold bg-gray-900 text-transparent bg-clip-text">
                Get Your Free Consultation
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Fill the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Render the appropriate admission form */}
            <div className="admission-form-container">
              <AdmissionFormPopup
                utmParams={utmParams}
                {...getFormConfig()}
                onSuccess={() => setShowPopup(false)}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
