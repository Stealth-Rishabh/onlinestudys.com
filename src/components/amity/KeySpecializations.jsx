"use client";

import { useState } from "react";

export default function KeySpecializations() {
  const [activeSpec, setActiveSpec] = useState(0);

  const specializations = [
    {
      id: 1,
      title: "MBA With Dual Specialization",
      shortTitle: "Dual Specialization",
      description:
        "Master two specializations simultaneously for comprehensive business expertise and enhanced career opportunities",
      icon: "⚡",
      bgIcon: "📊📈",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Strategic Management",
        "Operations Excellence",
        "Leadership Skills",
      ],
      color: "blue",
    },
    {
      id: 2,
      title: "MBA In General Management",
      shortTitle: "General Management",
      description:
        "Comprehensive business foundation covering all core management disciplines for versatile leadership roles",
      icon: "🏢",
      bgIcon: "🎯🏛️",
      gradient: "from-purple-500 to-pink-500",
      features: ["Business Strategy", "Financial Planning", "Team Leadership"],
      color: "purple",
    },
    {
      id: 3,
      title: "International Finance",
      shortTitle: "International Finance",
      description:
        "Global financial markets, international banking, and cross-border investment strategies expertise",
      icon: "🌍",
      bgIcon: "💰💱",
      gradient: "from-green-500 to-emerald-500",
      features: ["Global Markets", "Currency Trading", "Risk Management"],
      color: "green",
    },
    {
      id: 4,
      title: "Digital Entrepreneurship",
      shortTitle: "Digital Entrepreneurship",
      description:
        "Innovation-driven business creation, startup ecosystems, and digital transformation leadership",
      icon: "🚀",
      bgIcon: "💡🔥",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Startup Strategy",
        "Innovation Management",
        "Digital Transformation",
      ],
      color: "orange",
    },
    {
      id: 5,
      title: "Business Analytics",
      shortTitle: "Business Analytics",
      description:
        "Data-driven decision making, predictive modeling, and business intelligence for strategic insights",
      icon: "📊",
      bgIcon: "📈🔍",
      gradient: "from-indigo-500 to-blue-500",
      features: [
        "Data Analysis",
        "Predictive Modeling",
        "Business Intelligence",
      ],
      color: "indigo",
    },
    {
      id: 6,
      title: "Data Science",
      shortTitle: "Data Science",
      description:
        "Advanced analytics, machine learning, and artificial intelligence applications in business contexts",
      icon: "🧠",
      bgIcon: "🤖⚗️",
      gradient: "from-teal-500 to-cyan-500",
      features: ["Machine Learning", "AI Applications", "Statistical Analysis"],
      color: "teal",
    },
    {
      id: 7,
      title: "HR Analytics",
      shortTitle: "HR Analytics",
      description:
        "People analytics, workforce optimization, and human capital management through data-driven insights",
      icon: "👥",
      bgIcon: "📋💼",
      gradient: "from-pink-500 to-rose-500",
      features: [
        "Workforce Analytics",
        "Talent Management",
        "Performance Metrics",
      ],
      color: "pink",
    },
    {
      id: 8,
      title: "Digital Marketing Management",
      shortTitle: "Digital Marketing",
      description:
        "Modern marketing strategies, digital channels, and customer engagement in the digital ecosystem",
      icon: "📱",
      bgIcon: "📢🎯",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Digital Strategy", "Customer Analytics", "Brand Management"],
      color: "yellow",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Choose Your Career Path
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            MBA{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Specializations
            </span>
          </h2>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Choose from industry-leading specializations designed for tomorrow's
            business leaders
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
              <SpecializationDetails spec={specializations[activeSpec]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Specialization Card Component
function SpecializationCard({ spec, index, isActive, onClick }) {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? "scale-105 z-10" : "hover:scale-102"
      }`}
      onClick={onClick}
    >
      <div
        className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border rounded-3xl p-6 h-48 transition-all duration-500 overflow-hidden ${
          isActive
            ? "border-white/40 shadow-2xl shadow-blue-500/20"
            : "border-white/20 hover:border-white/30 hover:from-white/15 hover:to-white/10"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-6xl transform rotate-12">
            {spec.bgIcon.split("")[0]}
          </div>
          <div className="absolute bottom-4 left-4 text-4xl transform -rotate-12">
            {spec.bgIcon.split("")[1]}
          </div>
        </div>

        {/* Active Pulse Ring */}
        {isActive && (
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl animate-pulse" />
        )}

        {/* Main Icon with Gradient Background */}
        <div
          className={`relative w-16 h-16 bg-gradient-to-r ${
            spec.gradient
          } rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-xl transform transition-all duration-300 ${
            isActive ? "scale-110" : "group-hover:scale-105"
          }`}
        >
          <span className="filter drop-shadow-sm">{spec.icon}</span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
            {spec.shortTitle}
          </h3>

          <p className="text-sm text-blue-100/80 line-clamp-3 leading-relaxed mb-4">
            {spec.description}
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1">
            {spec.features.slice(0, 2).map((feature, idx) => (
              <span
                key={idx}
                className={`text-xs px-2 py-1 bg-gradient-to-r ${spec.gradient} bg-opacity-20 text-white rounded-full border border-white/20`}
              >
                {feature}
              </span>
            ))}
            {spec.features.length > 2 && (
              <span className="text-xs px-2 py-1 bg-white/10 text-blue-200 rounded-full">
                +{spec.features.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Selection Indicator */}
        {isActive && (
          <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white shadow-lg animate-pulse" />
        )}

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${spec.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
        />
      </div>
    </div>
  );
}

// Enhanced Specialization Details Component
function SpecializationDetails({ spec }) {
  return (
    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
      {/* Header with Dynamic Background */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl -m-4" />
        <div className="relative flex items-center gap-4">
          <div
            className={`w-20 h-20 bg-gradient-to-r ${spec.gradient} rounded-3xl flex items-center justify-center text-4xl shadow-2xl transform hover:scale-105 transition-transform duration-300`}
          >
            {spec.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-1">
              {spec.title}
            </h3>
            <div
              className={`h-1 w-16 bg-gradient-to-r ${spec.gradient} rounded-full`}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-blue-100 mb-8 leading-relaxed text-base">
        {spec.description}
      </p>

      {/* Enhanced Features */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span
            className={`w-2 h-2 bg-gradient-to-r ${spec.gradient} rounded-full`}
          />
          What You'll Master:
        </h4>
        <div className="space-y-4">
          {spec.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div
                className={`w-8 h-8 bg-gradient-to-r ${spec.gradient} rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-lg`}
              >
                {idx + 1}
              </div>
              <span className="text-blue-100 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Action Button */}
      <button
        className={`w-full bg-gradient-to-r ${spec.gradient} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center justify-center gap-3">
          <span>Start Your Journey</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
