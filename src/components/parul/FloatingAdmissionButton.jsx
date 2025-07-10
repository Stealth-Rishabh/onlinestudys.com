"use client";

import { useState } from "react";
import { useAdmissionForm } from "@/context/AdmissionFormContext";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

export default function FloatingAdmissionButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { openAdmissionForm } = useAdmissionForm();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleApplyNow = () => {
    openAdmissionForm();
    setIsExpanded(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative">
          {/* Expanded Content */}
          {isExpanded && (
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-orange-200">
              {/* Close Button */}
              <button
                onClick={toggleExpanded}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Get Free Counseling
                  </h3>
                  <p className="text-sm text-gray-600">
                    Speak with our admission experts
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleApplyNow}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Apply for Admission
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:1800-889-9773"
                      className="flex items-center justify-center gap-2 bg-green-50 text-green-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href="mailto:admissions@paruluniversity.online"
                      className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>NAAC A+ Accredited</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Live Classes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>8+ Specializations</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>50K+ Alumni</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Floating Button */}
          <button
            onClick={toggleExpanded}
            className={`relative group bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform ${
              isExpanded ? "scale-110" : "hover:scale-110"
            }`}
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-ping opacity-20"></div>

            {/* Icon */}
            <div className="relative z-10">
              {isExpanded ? (
                <X className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6" />
              )}
            </div>

            {/* Notification Badge */}
            {!isExpanded && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            )}
          </button>

          {/* Vertical Text Label */}
          {!isExpanded && (
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-l-lg shadow-lg border border-orange-200">
              <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                📞 Free Counseling
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={toggleExpanded}
        ></div>
      )}
    </>
  );
}
