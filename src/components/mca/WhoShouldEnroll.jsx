import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Lightbulb, TrendingUp, GraduationCap, Users, Globe, Target, Rocket } from "lucide-react"

export default function WhoShouldEnroll() {
  const enrollmentCategories = [
    {
      icon: Briefcase,
      description:
        "Ambitious professionals looking to step into leadership roles and start their own ventures",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      description:
        "Career-focused individuals aiming to boost their income and unlock new job prospects",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      description:
        "Goal-oriented professionals seeking comprehensive growth in their careers",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      description:
        "Working professionals who want to upskill without leaving their current job",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            <Target className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-semibold uppercase tracking-wider">Perfect Fit</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Who Should Enroll For
            <span className="block bg-green-500 bg-clip-text text-transparent">
              Online MCA
            </span>
          </h2>
          {/* <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover if our Online MCA program aligns with your career aspirations and professional goals. Find your
            path to business excellence.
          </p> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {enrollmentCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group relative py-0 overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-5 py-8">
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6 mx-auto">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div
                      className={`absolute -inset-2 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg text-center">{category.description}</p>

                  {/* Decorative Element */}
                  {/* <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  /> */}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Rocket className="w-5 h-5" />
            Ready to Transform Your Career?
          </div>
          <p className="text-slate-500 mt-4 text-sm">
            Join thousands of professionals who have accelerated their careers with our Online MCA
          </p>
        </div> */}
      </div>
    </section>
  )
}
