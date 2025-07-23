"use client";

import { useState } from "react";
import { useAdmissionForm } from "@/context/AdmissionFormContext";

export default function KeySpecializations() {
  const [activeSpec, setActiveSpec] = useState(0);
  const { openAdmissionForm } = useAdmissionForm();

  const specializations = [
    {
      id: 1,
      title: "Marketing",
      shortTitle: "Marketing",
      description:
        "Excel in the art of market influence, from brand strategy to digital engagement.",
      icon: "📢",
      bgIcon: "🎯📈",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Brand Management", "Digital Marketing", "Consumer Behavior"],
      color: "blue",
    },
    {
      id: 2,
      title: "Finance",
      shortTitle: "Finance",
      description:
        "Master financial markets, investment strategies, and corporate finance.",
      icon: "💰",
      bgIcon: "📊📈",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Investment Analysis",
        "Financial Risk",
        "Corporate Valuation",
      ],
      color: "green",
    },
    {
      id: 3,
      title: "Human Resource Management",
      shortTitle: "HRM",
      description:
        "Lead and develop talent with strategic workforce planning and employee relations.",
      icon: "👥",
      bgIcon: "📋💼",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Talent Acquisition",
        "Organizational Behavior",
        "HR Analytics",
      ],
      color: "purple",
    },
    {
      id: 4,
      title: "Business Analytics & Information Technology",
      shortTitle: "BA & IT",
      description:
        "Leverage data and technology to drive business insights and innovation.",
      icon: "💻",
      bgIcon: "💡🔥",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Data Visualization",
        "IT Management",
        "Business Intelligence",
      ],
      color: "orange",
    },
    {
      id: 5,
      title: "Operations",
      shortTitle: "Operations",
      description:
        "Optimize supply chains, logistics, and production for peak efficiency.",
      icon: "⚙️",
      bgIcon: "📈🔍",
      gradient: "from-indigo-500 to-blue-500",
      features: ["Supply Chain", "Quality Management", "Project Management"],
      color: "indigo",
    },
    {
      id: 6,
      title: "Healthcare Management",
      shortTitle: "Healthcare",
      description:
        "Lead in the dynamic healthcare sector with specialized management skills.",
      icon: "🏥",
      bgIcon: "👩‍⚕️👨‍⚕️",
      gradient: "from-red-500 to-rose-500",
      features: [
        "Hospital Administration",
        "Health Policy",
        "Pharma Management",
      ],
      color: "red",
    },
    {
      id: 7,
      title: "International Business",
      shortTitle: "Intl. Business",
      description:
        "Navigate global markets with expertise in cross-border trade and strategy.",
      icon: "🌍",
      bgIcon: "✈️🚢",
      gradient: "from-teal-500 to-cyan-500",
      features: ["Global Strategy", "Export Management", "Forex Management"],
      color: "teal",
    },
  ];

  return (
    <section className="py-10 sm:py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Online MBA{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Specializations
            </span>
          </h2>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Choose from industry-leading specializations designed for tomorrow's
            business leaders.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Specializations Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <SpecializationCard
                  key={spec.id}
                  spec={spec}
                  index={index}
                  isActive={activeSpec === index}
                  onClick={() => setActiveSpec(index)}
                />
              ))}
            </div>
          </div>

          {/* Active Specialization Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <SpecializationDetails
                spec={specializations[activeSpec]}
                openAdmissionForm={openAdmissionForm}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecializationCard({ spec, index, isActive, onClick }) {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? "scale-105 z-10" : "hover:scale-102"
      }`}
      onClick={onClick}
    >
      <div
        className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border rounded-3xl p-6 h-auto transition-all duration-500 overflow-hidden ${
          isActive
            ? "border-white/40 shadow-2xl shadow-blue-500/20"
            : "border-white/20 hover:border-white/30 hover:from-white/15 hover:to-white/10"
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-6xl transform rotate-12">
            {spec.bgIcon.split("")[0]}
          </div>
          <div className="absolute bottom-4 left-4 text-4xl transform -rotate-12">
            {spec.bgIcon.split("")[1]}
          </div>
        </div>

        {isActive && (
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl animate-pulse" />
        )}

        <div
          className={`relative w-16 h-16 bg-gradient-to-r ${
            spec.gradient
          } rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-xl transform transition-all duration-300 ${
            isActive ? "scale-110" : "group-hover:scale-105"
          }`}
        >
          <span className="filter drop-shadow-sm">{spec.icon}</span>
        </div>

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
            {spec.shortTitle}
          </h3>

          <p className="text-sm text-blue-100/80 line-clamp-3 leading-relaxed mb-4">
            {spec.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function SpecializationDetails({ spec, openAdmissionForm }) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
      <div
        className={`w-20 h-20 bg-gradient-to-r ${spec.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl`}
      >
        <span className="filter drop-shadow-md">{spec.icon}</span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">{spec.title}</h3>
      <p className="text-blue-100/80 mb-6">{spec.description}</p>

      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
      <ul className="space-y-2 mb-8">
        {spec.features.map((feature, index) => (
          <li key={index} className="flex items-center text-blue-100/90">
            <span className="text-green-400 mr-3">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={openAdmissionForm}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-xl transition-transform transform hover:scale-105"
      >
        Apply Now for {spec.shortTitle}
      </button>
    </div>
  );
}
