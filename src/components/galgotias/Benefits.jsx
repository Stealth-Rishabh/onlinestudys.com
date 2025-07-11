import {
  Globe,
  Clock,
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
} from "lucide-react";

export default function Benefits() {
  const features = [
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
      title: "Career Advancement",
      description:
        "Our programs are designed to help you climb the career ladder.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-400" />,
      title: "Flexibility",
      description:
        "Learn on your own schedule with our flexible online platform.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "Networking",
      description:
        "Connect with a diverse community of peers, faculty, and industry leaders.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-blue-400" />,
      title: "Affordability",
      description:
        "We offer competitive tuition fees and financial aid to make education accessible.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-400" />,
      title: "Industry-Ready Skills",
      description:
        "Gain practical, in-demand skills that you can apply immediately in your career.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-400" />,
      title: "Global Recognition",
      description:
        "A degree from Galgotias University is recognized globally, opening international doors.",
    },
  ];

  return (
    <div className="w-full bg-slate-900 py-10 sm:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            The Online Advantage at
            <span className="text-blue-600 block">Galgotias University</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
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
