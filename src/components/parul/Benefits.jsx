import {
  Award,
  Clock,
  TrendingUp,
  Users,
  GraduationCap,
  BookOpen,
  Target,
  Monitor,
} from "lucide-react";

export default function Benefits() {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-orange-400" />,
      title: "NAAC A+ Accredited",
      description:
        "Only NAAC A+ accredited university offering online MBA with UGC approval and recognition.",
    },
    {
      icon: <Clock className="w-10 h-10 text-orange-400" />,
      title: "Live Interactive Classes",
      description:
        "Real-time live classes with faculty interaction and peer-to-peer collaborative learning.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-orange-400" />,
      title: "Industry Focused Curriculum",
      description:
        "Real-world focused curriculum designed by industry experts for practical application.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-400" />,
      title: "Strong Alumni Network",
      description:
        "Access to 50K+ successful alumni network for mentorship and career opportunities.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-orange-400" />,
      title: "Multiple Specializations",
      description:
        "Choose from 8+ specializations including Finance, Marketing, HR, and Rural Management.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-400" />,
      title: "Practical Learning",
      description:
        "Learn through real business case studies and industry projects for hands-on experience.",
    },
    {
      icon: <Target className="w-10 h-10 text-orange-400" />,
      title: "Career Support",
      description:
        "Dedicated placement support and career guidance for professional growth opportunities.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-orange-400" />,
      title: "Flexible Learning",
      description:
        "Study at your own pace with recorded sessions and flexible scheduling options.",
    },
  ];

  return (
    <div className="w-full bg-slate-900 py-10 sm:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Key Benefits of Pursuing an
            <span className="text-orange-600 block">
              Online MBA from Parul University
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
