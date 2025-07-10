import Image from "next/image";
import { useAdmissionForm } from "@/context/AdmissionFormContext";

export default function ProgramHighlights() {
  const { openAdmissionForm } = useAdmissionForm();

  const highlights = [
    {
      id: 1,
      title: "NAAC A+ Accredited",
      description:
        "Only NAAC A+ accredited university offering online MBA with industry recognition",
      image: "/banners/graduation-cap.jpg",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
    },
    {
      id: 2,
      title: "Industry Focused Curriculum",
      description:
        "Real-world focused curriculum designed by industry experts for practical learning",
      image: "/banners/mba.jpg",
      gradient: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-900",
    },
    {
      id: 3,
      title: "Live Interactive Classes",
      description:
        "Real-time live classes with faculty interaction and peer-to-peer learning",
      image: "/banners/mba.webp",
      gradient: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
    },
    {
      id: 4,
      title: "Flexible Learning",
      description:
        "Study at your own pace with recorded sessions and flexible scheduling",
      image: "/banners/mba.png",
      gradient: "from-amber-500 to-red-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-900",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Program Highlights &
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
              Advantages
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our Online MBA degree program and begin an exciting
            educational journey with Parul University
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
          <button
            onClick={openAdmissionForm}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
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
          </button>
        </div>
      </div>
    </section>
  );
}
