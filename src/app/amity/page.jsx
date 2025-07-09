import { CalendarDays } from "lucide-react";
import Image from "next/image";

const AmityPage = () => {
  return (
    <section
      className="py-10 sm:py-16 px-4 bg-white relative min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: "url('/banners/amity.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="max-w-7xl px-4 mx-auto h-full flex items-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-5xl text-white">
              Master Business. <br /> Your Way. Your Pace.
            </h1>
            <p className="text-white text-5xl sm:text-6xl font-bold">
              Online MBA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-5 items-start sm:items-center">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-10 py-2 w-full sm:w-auto rounded-md">
                Apply Now
              </button>
              <Image
                src="https://cdn-websites.talentedge.com/DYPATIL/www/wwwroot/dypatiledu.com/assets/img/zero_cost_emi_available.svg"
                alt="Amity University"
                width={100}
                height={100}
                className="w-auto h-auto max-h-[80px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 mt-10 lg:mt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 relative z-20">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-2xl p-4 rounded-md">
          <CalendarDays className="w-6 h-6 text-white" />
          <p className="text-white text-sm">2 year program</p>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-2xl p-4 rounded-md">
          <CalendarDays className="w-6 h-6 text-white" />
          <p className="text-white text-sm">At par with on-campus degree</p>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-2xl p-4 rounded-md">
          <CalendarDays className="w-6 h-6 text-white" />
          <p className="text-white text-sm">Masterclass by Industry Experts</p>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-2xl p-4 rounded-md">
          <CalendarDays className="w-6 h-6 text-white" />
          <p className="text-white text-sm">Trusted by 10,000+ learners</p>
        </div>
      </div>
    </section>
  );
};

export default AmityPage;
