import Image from "next/image";

// Custom SVG Icons Component
const CustomIcon = ({ type, className }) => {
  const icons = {
    university: (
      <svg viewBox="0 0 64 64" className={className}>
        <path fill="#4CAF50" d="M32 8L8 20v8h48v-8L32 8z" />
        <rect fill="#2E7D32" x="30" y="28" width="4" height="24" />
        <rect fill="#81C784" x="12" y="32" width="6" height="20" />
        <rect fill="#81C784" x="20" y="30" width="6" height="22" />
        <rect fill="#81C784" x="38" y="30" width="6" height="22" />
        <rect fill="#81C784" x="46" y="32" width="6" height="20" />
        <circle fill="#FFC107" cx="32" cy="16" r="3" />
        <path fill="#4CAF50" d="M8 52h48v4H8z" />
      </svg>
    ),
    diploma: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect fill="#2196F3" x="12" y="20" width="40" height="28" rx="2" />
        <rect fill="#1976D2" x="12" y="20" width="40" height="8" rx="2" />
        <circle fill="#FFD700" cx="52" cy="14" r="8" />
        <path fill="#FF5722" d="M52 8l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" />
        <rect fill="#FFF" x="16" y="32" width="20" height="2" />
        <rect fill="#FFF" x="16" y="36" width="24" height="2" />
        <rect fill="#FFF" x="16" y="40" width="16" height="2" />
      </svg>
    ),
    industry: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect fill="#FF9800" x="8" y="24" width="12" height="32" />
        <rect fill="#F57C00" x="22" y="16" width="12" height="40" />
        <rect fill="#FF9800" x="36" y="20" width="12" height="36" />
        <circle fill="#2196F3" cx="14" cy="20" r="3" />
        <circle fill="#2196F3" cx="28" cy="12" r="3" />
        <circle fill="#2196F3" cx="42" cy="16" r="3" />
        <path fill="#E65100" d="M8 56h40v4H8z" />
        <rect fill="#4CAF50" x="50" y="24" width="8" height="4" />
        <rect fill="#4CAF50" x="50" y="32" width="8" height="4" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 64 64" className={className}>
        <circle fill="#E0E0E0" cx="32" cy="32" r="24" />
        <circle fill="#FFF" cx="32" cy="32" r="20" />
        <circle fill="#424242" cx="32" cy="32" r="2" />
        <path
          fill="none"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
          d="M32 16v16h12"
        />
        <g fill="#9E9E9E">
          <rect x="31" y="12" width="2" height="4" />
          <rect x="31" y="48" width="2" height="4" />
          <rect x="48" y="31" width="4" height="2" />
          <rect x="12" y="31" width="4" height="2" />
        </g>
        <circle fill="#FF5722" cx="32" cy="8" r="4" />
        <path fill="#FFF" d="M30 6h4v4h-4z" />
      </svg>
    ),
    exam: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect fill="#9C27B0" x="16" y="12" width="32" height="40" rx="2" />
        <rect fill="#E1BEE7" x="20" y="16" width="24" height="32" />
        <rect fill="#673AB7" x="22" y="20" width="8" height="2" />
        <rect fill="#673AB7" x="22" y="24" width="12" height="2" />
        <rect fill="#673AB7" x="22" y="28" width="10" height="2" />
        <circle fill="#4CAF50" cx="22" cy="34" r="2" />
        <circle fill="#4CAF50" cx="22" cy="38" r="2" />
        <circle fill="#E0E0E0" cx="22" cy="42" r="2" />
        <path
          fill="none"
          stroke="#2196F3"
          strokeWidth="2"
          d="M8 32l8 8 16-16"
        />
      </svg>
    ),
    curriculum: (
      <svg viewBox="0 0 64 64" className={className}>
        <rect fill="#FFC107" x="12" y="8" width="32" height="44" rx="2" />
        <rect fill="#FFF9C4" x="16" y="12" width="24" height="36" />
        <rect fill="#FF9800" x="16" y="16" width="16" height="2" />
        <rect fill="#FF9800" x="16" y="20" width="20" height="2" />
        <rect fill="#FF9800" x="16" y="24" width="12" height="2" />
        <rect fill="#4CAF50" x="16" y="32" width="18" height="2" />
        <rect fill="#4CAF50" x="16" y="36" width="14" height="2" />
        <circle fill="#2196F3" cx="48" cy="16" r="8" />
        <path fill="none" stroke="#FFF" strokeWidth="2" d="M44 16h8M48 12v8" />
      </svg>
    ),
  };

  return icons[type] || null;
};

// Educational Illustration Component
const EducationIllustration = () => (
  <div className="relative">
    <svg viewBox="0 0 500 400" className="w-full h-auto">
      {/* Background */}
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient
          id="screen-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Laptop */}
      <ellipse
        cx="250"
        cy="350"
        rx="120"
        ry="20"
        fill="#e5e7eb"
        opacity="0.3"
      />
      <rect x="150" y="180" width="200" height="140" rx="8" fill="#374151" />
      <rect
        x="160"
        y="190"
        width="180"
        height="110"
        rx="4"
        fill="url(#screen-gradient)"
      />
      <rect x="140" y="320" width="220" height="15" rx="8" fill="#9ca3af" />
      <circle cx="250" cy="327" r="3" fill="#6b7280" />

      {/* Screen Content */}
      <rect
        x="175"
        y="205"
        width="40"
        height="25"
        rx="3"
        fill="#10b981"
        opacity="0.8"
      />
      <rect
        x="225"
        y="205"
        width="40"
        height="25"
        rx="3"
        fill="#f59e0b"
        opacity="0.8"
      />
      <rect
        x="275"
        y="205"
        width="40"
        height="25"
        rx="3"
        fill="#ef4444"
        opacity="0.8"
      />

      <rect
        x="175"
        y="240"
        width="150"
        height="4"
        rx="2"
        fill="#ffffff"
        opacity="0.6"
      />
      <rect
        x="175"
        y="250"
        width="120"
        height="4"
        rx="2"
        fill="#ffffff"
        opacity="0.4"
      />
      <rect
        x="175"
        y="260"
        width="140"
        height="4"
        rx="2"
        fill="#ffffff"
        opacity="0.6"
      />

      {/* Floating Elements */}
      <circle cx="100" cy="100" r="30" fill="#10b981" opacity="0.2" />
      <circle cx="400" cy="120" r="25" fill="#f59e0b" opacity="0.2" />
      <circle cx="380" cy="250" r="20" fill="#ef4444" opacity="0.2" />

      {/* Books */}
      <rect x="80" y="280" width="25" height="40" rx="2" fill="#dc2626" />
      <rect x="105" y="275" width="25" height="45" rx="2" fill="#2563eb" />
      <rect x="130" y="285" width="25" height="35" rx="2" fill="#16a34a" />

      {/* Graduation Cap */}
      <polygon
        points="350,80 380,70 410,80 410,85 380,95 350,85"
        fill="#1f2937"
      />
      <rect x="375" y="70" width="10" height="3" fill="#1f2937" />
      <circle cx="415" cy="75" r="3" fill="#fbbf24" />

      {/* Globe */}
      <circle cx="120" cy="150" r="25" fill="#0ea5e9" />
      <path d="M100 150 Q120 130 140 150 Q120 170 100 150" fill="#0284c7" />
      <path
        d="M105 140 Q125 140 135 140"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M105 150 Q125 150 135 150"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M105 160 Q125 160 135 160"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
      />

      {/* Connecting Lines */}
      <path
        d="M120 175 Q200 200 250 180"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M350 100 Q300 140 250 190"
        stroke="#f59e0b"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M400 145 Q350 180 250 200"
        stroke="#ef4444"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  </div>
);

export default function Hallmarks() {
  const hallmarks = [
    {
      id: 1,
      title: "UGC Approved Universities",
      description:
        "Recognized by the University Grants Commission ensuring credibility and authenticity",
      icon: "university",
      color: "text-green-600",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
    },
    {
      id: 2,
      title: "Degree Equivalent to Regular",
      description:
        "Online degrees that hold the same value and recognition as traditional on-campus programs",
      icon: "diploma",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      id: 3,
      title: "Industry Oriented Specializations",
      description:
        "Curriculum designed with current industry needs and future market trends in mind",
      icon: "industry",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
    },
    {
      id: 4,
      title: "Flexible Timings",
      description:
        "Study at your own pace with 24/7 access to learning materials and recorded sessions",
      icon: "clock",
      color: "text-gray-600",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
    },
    {
      id: 5,
      title: "Conduct Online Exams",
      description:
        "Secure, proctored online examinations that maintain academic integrity and convenience",
      icon: "exam",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      id: 6,
      title: "Latest Curriculum and Syllabus",
      description:
        "Up-to-date course content that reflects current industry standards and emerging technologies",
      icon: "curriculum",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-200",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Online Learning
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key advantages that make online education the smart
            choice for your career advancement
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Hallmarks */}
          <div className="space-y-8">
            {hallmarks.map((hallmark, index) => (
              <div
                key={hallmark.id}
                className="group flex items-start gap-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-16 h-16 ${hallmark.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${hallmark.borderColor} border-2`}
                >
                  <CustomIcon type={hallmark.icon} className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xl font-bold ${hallmark.color} mb-2 group-hover:text-opacity-80 transition-colors`}
                  >
                    {hallmark.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {hallmark.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div
                  className={`w-1 h-0 ${hallmark.bgColor} rounded-full group-hover:h-12 transition-all duration-300`}
                ></div>
              </div>
            ))}

            {/* Extra content to ensure enough scroll height */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your Journey Today
              </h3>
              <p className="text-gray-600 mb-6">
                Take the first step towards advancing your career with our
                industry-leading online MBA programs. Join thousands of
                successful professionals who have transformed their careers
                through our comprehensive and flexible learning approach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Course Modules</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sticky Illustration */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 self-start">
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
                <EducationIllustration />

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      1.6L+
                    </div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      400+
                    </div>
                    <div className="text-sm text-gray-600">Hours Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
