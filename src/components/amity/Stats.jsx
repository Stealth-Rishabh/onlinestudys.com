import { Calendar, Award, Brain, PlayCircle, Users, Globe } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      title: "Program Duration",
      value: "2 Years",
      subtitle: "4 Semesters",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Global Accreditation",
      value: "WASC & QAA",
      subtitle: "USA & UK Certified",
      icon: Award,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      title: "AI-Powered Learning",
      value: "Prof. Ami",
      subtitle: "Personal AI Tutor",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      title: "Learning Content",
      value: "400+",
      subtitle: "Hours of Video Lectures",
      icon: PlayCircle,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 5,
      title: "Student Community",
      value: "1.6 Lac+",
      subtitle: "Trusted Learners",
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      id: 6,
      title: "QS Ranking",
      value: "Top 10",
      subtitle: "Asia Pacific",
      icon: Globe,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-500">Amity Online MBA?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key highlights that make our program stand out globally
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className={`group relative ${stat.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {stat.title}
                  </h3>
                  <div className="space-y-1">
                    <p
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.subtitle}</p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Award className="w-5 h-5" />
            <span>Globally Recognized Excellence</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
