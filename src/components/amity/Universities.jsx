import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  ArrowRight,
  CheckCheck,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Autoplay from "embla-carousel-autoplay";
import { useAdmissionForm } from "@/context/AdmissionFormContext";

const ITEMS_PER_PAGE = 6;

export default function Universities() {
  const { openAdmissionForm } = useAdmissionForm();
  const universities = [
    {
      id: 1,
      name: "Amity University Online",
      logo: "/universities/amity-logo.png",
      fee: "$5,000 (Full Program)",
      description: [
        "Only Online MBA in India ranked by QS",
        "Top 10 in Asia Pacific by QS",
        "WASC (USA) & QAA (UK) Accredited",
        "400+ hours of recorded video lectures",
        "AI-powered learning with Prof. Ami",
        "Access to all Amity campuses worldwide",
        "ACCA specializations with exemptions",
        "Real-world projects & case studies",
        "Industry certifications included",
        "Amigo app for mobile learning",
      ],
    },
  ];

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [visibleUniversities, setVisibleUniversities] =
    useState(ITEMS_PER_PAGE);

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = useCallback(
    (index) => {
      api && api.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="hidden sm:block absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            World-Class Universities
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose your Online MBA Degree{" "}
            <span className="text-green-500 sm:block">
              from Amity University
            </span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover prestigious institutions that shape tomorrow's leaders.
            Each university offers unique opportunities for growth, innovation,
            and academic achievement.
          </p> */}
        </div>

        {/* Mobile/Tablet Accordion View */}
        <div className="lg:hidden">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full bg-white"
          >
            {universities.map((university, index) => (
              <AccordionItem key={university.id} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Image
                      src={university.logo}
                      alt={`${university.name} logo`}
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <h4 className="font-semibold text-gray-900 text-[13px] uppercase tracking-wide">
                      Join {university.name.split(" ")[0]} — Here's Why.
                    </h4>
                    <div className="space-y-2">
                      {university.description.map((desc, i) => (
                        <div
                          key={i}
                          className="flex items-start text-[10px] font-light gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCheck className="w-3 h-3 text-green-600" />
                          </div>
                          {desc}
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-black hover:bg-black/80 text-white font-semibold py-2.5 rounded-xl transition-all duration-300"
                      size="md"
                      onClick={openAdmissionForm}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop Carousel View */}
        <div className="hidden lg:block relative mt-16">
          <div className="flex justify-center">
            {universities.map((university, index) => (
              <div key={university.id} className="p-1 h-full">
                <Card className="group hover:shadow-2xl  mx-auto max-w-[400px] relative z-10 transition-all py-5 gap-0 duration-300 border-0 shadow-lg hover:-translate-y-2 flex flex-col justify-between bg-gray-100 h-full">
                  <CardHeader className="pb-0 px-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-full h-20 rounded-xl bg-black flex items-center justify-center shadow-md">
                        <Image
                          src={university.logo}
                          alt={`${university.name} logo`}
                          width={120}
                          height={40}
                          className="w-full h-14 object-contain px-5"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {university.name}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 flex-grow">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">
                      Join {university.name.split(" ")[0]} — Here's Why.
                    </h4>
                    <div className="space-y-1 mb-4">
                      {university.description.map((desc, i) => (
                        <div key={i} className="flex items-start text-sm gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCheck className="w-3 h-3 text-green-600" />
                          </div>
                          {desc}
                        </div>
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Total Fee - {university.fee}
                    </h4>
                  </CardContent>
                  <CardFooter className="pt-4 px-5">
                    <Button
                      className="w-full bg-black hover:bg-black/80 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                      size="md"
                      onClick={openAdmissionForm}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Guidance Choosing the Right University?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert counselors will help you find the perfect match based
              on your academic profile, career goals, and preferences.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Get Free Consultation
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
