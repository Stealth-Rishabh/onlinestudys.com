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

const EducationIllustration = () => (
  <div className="relative">
    <svg viewBox="0 0 500 400" className="w-full h-auto">
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
      <circle cx="100" cy="100" r="30" fill="#10b981" opacity="0.2" />
      <circle cx="400" cy="120" r="25" fill="#f59e0b" opacity="0.2" />
      <circle cx="380" cy="250" r="20" fill="#ef4444" opacity="0.2" />
      <rect x="80" y="280" width="25" height="40" rx="2" fill="#dc2626" />
      <rect x="105" y="275" width="25" height="45" rx="2" fill="#2563eb" />
      <rect x="130" y="285" width="25" height="35" rx="2" fill="#16a34a" />
      <polygon
        points="350,80 380,70 410,80 410,85 380,95 350,85"
        fill="#1f2937"
      />
      <rect x="375" y="70" width="10" height="3" fill="#1f2937" />
      <circle cx="415" cy="75" r="3" fill="#fbbf24" />
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
        d="M90 280 Q150 250 200 280"
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
      title: "NAAC A+ Accreditation",
      description:
        "A testament to our commitment to the highest academic standards.",
      icon: "diploma",
      bg: "bg-blue-100",
      text: "text-blue-800",
    },
    {
      title: "Top NIRF Innovation Ranking",
      description:
        "Recognized among the top 100 universities for innovation in India.",
      icon: "university",
      bg: "bg-green-100",
      text: "text-green-800",
    },
    {
      title: "30+ Years of Excellence",
      description:
        "A rich legacy of providing quality education and fostering talent.",
      icon: "clock",
      bg: "bg-yellow-100",
      text: "text-yellow-800",
    },
    {
      title: "500+ Hiring Partners",
      description:
        "Strong industry connections for excellent placement opportunities.",
      icon: "industry",
      bg: "bg-orange-100",
      text: "text-orange-800",
    },
    {
      title: "Flexible Online Learning",
      description: "Learn anytime, anywhere with our advanced online platform.",
      icon: "exam",
      bg: "bg-purple-100",
      text: "text-purple-800",
    },
    {
      title: "Industry-Ready Curriculum",
      description:
        "Courses designed with industry experts to make you job-ready.",
      icon: "curriculum",
      bg: "bg-pink-100",
      text: "text-pink-800",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            The Hallmarks of Galgotias Online
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing a transformative learning experience
            that is flexible, accessible, and aligned with industry demands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {hallmarks.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center`}
                >
                  <CustomIcon type={item.icon} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Illustration */}
          <div className="hidden lg:block">
            <EducationIllustration />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {hallmarks.slice(3, 6).map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center`}
                >
                  <CustomIcon type={item.icon} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
