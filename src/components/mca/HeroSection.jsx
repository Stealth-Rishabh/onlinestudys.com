import { Check, Phone, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAdmissionForm } from "@/context/AdmissionFormContext";

export default function HeroSection() {
  const { openAdmissionForm } = useAdmissionForm();

  const features = [
    {
      label: "MCA Course Duration:",
      value: "Flexible timelines",
    },
    {
      label: "Study Mode:",
      value: "Fully online",
    },
    // {
    //   label: "Accreditation:",
    //   value: "AICTE, WES approved & AACSB accredited",
    // },
    {
      label: "58% Average Hike",
      value: "across MCA courses",
    },
    // {
    //   label: "EMI Options:",
    //   value: "You'll have access to budget-friendly payment plans",
    // },
  ];

  return (
    <section className="py-10 px-4">
      <div className="absolute inset-0 ">
        <img
          src="/banners/mba.webp"
          alt="MCA students studying online"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Card className="overflow-hidden rounded-sm shadow-2xl border-0 py-0 bg-white">
          <div className="grid lg:grid-cols-12 gap-0 relative">
            {/* Content Section */}
            <div className="p-8 lg:col-span-7 overflow-hidden rounded-sm md:rounded-r-3xl shadow-2xl border-0 py-6 bg-white order-2 lg:order-1 lg:p-12 flex flex-col justify-center relative z-10">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                    <span className="text-green-500">
                      Online MCA Degree Programs
                    </span>{" "}
                    <br className="hidden lg:block" />
                    <span className="text-gray-700 text-3xl lg:text-4xl">
                      Offered by Leading Universities in India
                    </span>
                  </h1>

                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Upgrade your career with an Online MCA—gain
                    industry-relevant skills and academic excellence, anytime
                    and from anywhere.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-green-200 transition-colors">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900">
                          {feature.label}
                        </span>{" "}
                        <span className="text-gray-600">{feature.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 pt-4"> */}
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white hover:text-white/90 transition-all duration-200 h-12 px-6"
                  onClick={openAdmissionForm}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Career Counselling
                </Button>
                {/* <Button
                    size="lg"
                    className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 text-white h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </Button> */}
                {/* </div> */}

                {/* Contact Information */}
                {/* <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">For enquiries call:</span>
                  <a
                    href="tel:18002102020"
                    className="font-semibold text-red-500 hover:text-red-600 transition-colors"
                  >
                    1800 210 2020
                  </a>
                </div> */}
              </div>
            </div>

            {/* Image Section */}
            <div className="absolute right-0 z-[5] lg:col-span-5 order-1 lg:order-2 hidden sm:flex items-center justify-center overflow-hidden h-full">
              <img
                src="/banners/mba.webp"
                alt="MCA students studying online"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
