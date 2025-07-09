import Image from "next/image";

export default function ProgramHighlights() {
  const highlights = [
    {
      id: 1,
      title: "QS Ranked Online MBA",
      description:
        "Only Online MBA program in India to be ranked by QS. Ranked top 10 in Asia Pacific.",
      image: "/banners/graduation-cap.jpg",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      id: 2,
      title: "ACCA specializations",
      description:
        "ACCA-accredited specializations offer exemptions from 60% of ACCA exams",
      image: "/banners/mba.jpg",
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
    },
    {
      id: 3,
      title: "Study anytime anywhere",
      description:
        "400+ hours of recorded video lectures making your learning journey convenient",
      image: "/banners/mba.webp",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
    },
    {
      id: 4,
      title: "Real World Projects",
      description:
        "Real world projects and case studies to help you succeed in your industry",
      image: "/banners/mba.png",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Premium MBA Experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Program Highlights &
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Advantages
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our Online MBA degree program and begin an exciting
            educational journey
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className={`group relative ${highlight.bgColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50 backdrop-blur-sm`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${highlight.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
                  #{index + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Decorative Element */}
                <div
                  className={`absolute top-0 left-6 w-12 h-1 bg-gradient-to-r ${highlight.gradient} rounded-full transform -translate-y-2`}
                ></div>

                <h3
                  className={`text-xl font-bold ${highlight.textColor} mb-3 group-hover:text-opacity-80 transition-colors leading-tight`}
                >
                  {highlight.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {highlight.description}
                </p>

                {/* Interactive Arrow */}
                <div className="mt-4 flex items-center justify-between">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${highlight.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  <div
                    className={`text-xs font-semibold ${highlight.textColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                  >
                    Learn More
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <svg
              className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Explore All Program Benefits</span>
            <div className="w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
