import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  Users,
  Globe,
  Target,
  Rocket,
} from "lucide-react";

export default function WhoShouldEnroll() {
  const enrollmentCategories = [
    {
      icon: Briefcase,
      description:
        "Working professionals seeking to advance into senior management and leadership roles in a global context",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      description:
        "Entrepreneurs and innovators aiming to develop strategic business acumen and digital skills",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      description:
        "Mid-career professionals looking to switch industries or functional areas with a recognized MBA",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      description:
        "Fresh graduates ready to build a strong foundation in business management from a top-ranked university",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Who Should Enroll For
            <span className="block bg-blue-500 bg-clip-text text-transparent">
              Chandigarh Online MBA
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {enrollmentCategories.map((category, index) => {
            const IconComponent = category.icon;
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
                  <p className="text-slate-600 leading-relaxed text-lg text-center">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 