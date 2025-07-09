import {
  Globe,
  Clock,
  TrendingUp,
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  Sliders,
} from "lucide-react";

export default function Benefits() {
  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-400" />,
      title: "QS Ranked Excellence",
      description:
        "Only Online MBA in India ranked by QS - Top 10 in Asia Pacific region.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-400" />,
      title: "AI-Powered Learning",
      description:
        "Learn with Prof. Ami, our AI assistant, and access 400+ hours of recorded lectures.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
      title: "Global Accreditations",
      description:
        "WASC (USA), QAA (UK) accredited with WES recognition for worldwide acceptance.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "Campus Access",
      description:
        "Access to all Amity campuses worldwide for networking and additional learning opportunities.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-400" />,
      title: "ACCA Specializations",
      description:
        "Exclusive ACCA specializations with exemptions for enhanced career prospects.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-400" />,
      title: "Real-World Projects",
      description:
        "Learn through real business case studies and industry projects for practical experience.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-blue-400" />,
      title: "Industry Certifications",
      description:
        "Included industry certifications to boost your professional credentials.",
    },
    {
      icon: <Sliders className="w-10 h-10 text-blue-400" />,
      title: "Mobile Learning",
      description:
        "Amigo app for seamless mobile learning experience anytime, anywhere.",
    },
  ];

  return (
    <div className="w-full bg-slate-900 py-10 sm:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            World-Class Universities
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Key Benefits of Pursuing an
            <span className="text-blue-600 block">
              Online MBA from Amity University
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
