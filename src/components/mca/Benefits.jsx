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
      title: "Worldwide Recognition",
      description:
        "Get a degree that's valued globally - just as prestigious as studying on campus.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-400" />,
      title: "Study at Your Own Pace", 
      description:
        "Learn whenever and wherever works best for you, making it easy to balance work and studies.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
      title: "Boost Your Career Growth",
      description:
        "Develop the skills you need to move up to leadership roles and explore new career paths.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "Connect Worldwide",
      description:
        "Build relationships with students, graduates and teachers from around the globe.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-400" />,
      title: "Learn from the Best",
      description:
        "Study with expert teachers and get access to high-quality learning materials and support.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-400" />,
      title: "Always Stay Updated",
      description:
        "Keep your knowledge fresh with the latest industry trends and real business examples.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-blue-400" />,
      title: "Great Value for Money",
      description:
        "Invest in a degree that pays off by opening up better career opportunities worldwide.",
    },
    {
      icon: <Sliders className="w-10 h-10 text-blue-400" />,
      title: "Choose Your Path",
      description:
        "Focus on areas that interest you most, whether it's Finance, Marketing or Data Analysis.",
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
              Online MCA from Top Universities
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
