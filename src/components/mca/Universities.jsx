"use client";

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
      name: "Amity University",
      logo: "/universities/amity-logo.png",
      fee: "₹1,70,000",
      description: [
        "Strong Career Support & Placement Network",
        "Globally Accredited & Recognized",
        "Blended Experience with On-Campus Access",
        "AI-Powered Academic Support",
      ],
    },
    {
      id: 2,
      name: "GLA University",
      logo: "/universities/gla-logo.png",
      fee: "₹94,000",
      description: [
        "Strong Accreditation & Legitimacy",
        "Industry-Aligned Curriculum & Practical Training",
        "Recognized Degree with Alumni Network",
        "Entrepreneurial and Startup Support",
      ],
    },
    {
      id: 3,
      name: "Parul University",
      logo: "/universities/parul-logo.png",
      fee: "₹1,20,000",
      description: [
        "Valid Industry-Relevant Online Degree",
        "LMS & 24x7 Academic Support",
        "Networking & Alumni Access",
        "Placement Assistance & Support",
      ],
    },
    {
      id: 4,
      name: "Chandigarh University",
      logo: "/universities/cu-logo.webp",
      fee: "₹1,40,000",
      description: [
        "UGC-entitled, AICTE & NAAC A+ accredited",
        "Experienced & Globally Renowned Faculty",
        "Advanced Learning Management System (LMS)",
        "Courses Empowered By Harvard & KPMG",
      ],
    },
    {
      id: 5,
      name: "LPU",
      logo: "/universities/lovelypu-logo.jpg",
      fee: "₹1,40,000",
      description: [
        "NAAC A++ accreditation and UGC‑DEB approval",
        "Industry-Oriented Curriculum by expert professionals",
        "Capstone Projects & Real-Time Case Studies",
        "Elective-Driven Flexibility",
      ],
    },
    {
      id: 6,
      name: "UPES Online",
      logo: "/universities/upestomorrow_logo.png",
      fee: "₹1,70,000",
      description: [
        "Esteemed faculty from IITs, IIMs and Ivy League",
        "Real life learning through industry projects",
        "NAAC A Accredited University",
        "22,000+ UPES Alumni Community",
      ],
    },
    {
      id: 7,
      name: "Galgotia University",
      logo: "/universities/galgotia-logo.png",
      fee: "₹84,200",
      description: [
        "Clear and Budget-Friendly Fee Plans",
        "Complete Career Guidance and Support",
        "State-of-the-Art Online Learning Platform",
        "UGC Recognized University",
      ],
    },
    {
      id: 8,
      name: "Sharda University Online",
      logo: "/universities/sharda-online.png",
      fee: "1,00,000",
      description: [
        "Dedicated Student Support",
        "UGC-DEB Certified Online Programs",
        "Smart Learning Platform with AI Technology",
        "International Network & Multicultural Environment",
      ],
    },
    {
      id: 9,
      name: "MMU University",
      logo: "/universities/mmu-logo.png",
      fee: "1,40,000",
      description: [
        "Interactive virtual classrooms with engaging live sessions",
        "Flexible learning schedule to fit your lifestyle",
        "UGC-approved programs designed for career advancement",
        "Expert faculty from academia and industry leaders",
      ],
    },
    {
      id: 10,
      name: "GEU University",
      logo: "/universities/geu-online.png",
      fee: "70,000",
      description: [
        "Learn on your schedule – Study anytime, from anywhere",
        "High value, low cost – Affordable fees with strong earning potential",
        "Industry connections – Network with professionals and successful alumni",
        "Boost your career – Advance quickly into promotions and leadership roles",
      ],
    },
    {
      id: 11,
      name: "Uttaranchal University",
      logo: "/universities/uttaranchal-logo.png",
      fee: "1,20,000",
      description: [
        "Well-rounded curriculum with in-demand specializations",
        "High academic standards with recognized accreditations",
        "Career guidance with hands-on industry exposure",
        "One-on-one mentorship and dedicated support",
      ],
    },
    {
      id: 12,
      name: "Manipal University",
      logo: "/universities/OM_Logo.jpg",
      fee: "1,58,000",
      description: [
        "UGC‑entitled & NAAC A+ accredited",
        "100% online with optional campus immersion",
        "Global recognition & networking",
        "100% online with optional campus immersion",
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
    <section className="py-10 sm:py-16 px-4 bg-white relative">
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
        <div className="text-center mb-8 sm:mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            World-Class Universities
          </div> */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose your Online MCA Degree{" "}
            <span className="text-green-500 sm:block">
              from Top Universities & Colleges
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
                    <div className="w-24 h-12 rounded-lg bg-black flex items-center justify-center">
                      <Image
                        src={university.logo || "/placeholder.svg"}
                        alt={`${university.name} logo`}
                        width={96}
                        height={48}
                        className="w-full h-8 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">
                        {university.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Total Fee - {university.fee}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Join {university.name.split(" ")[0]} — Here's Why.
                    </h4>
                    <div className="space-y-2">
                      {university.description.map((desc, i) => (
                        <div
                          key={i}
                          className="flex items-start text-sm gap-2 text-gray-600"
                        >
                          <CheckCheck className="min-w-4 w-4 h-4 mt-[3px] text-green-500" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <div key={university.id} className="p-1 h-full">
                <Card className="group hover:shadow-2xl  mx-auto max-w-[300px] relative z-10 transition-all py-5 gap-0 duration-300 border-0 shadow-lg hover:-translate-y-2 flex flex-col justify-between bg-gray-100 h-full">
                  <CardHeader className="pb-0 px-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-full h-20 rounded-xl bg-black flex items-center justify-center shadow-md">
                        <Image
                          src={university.logo || "/placeholder.svg"}
                          alt={`${university.name} logo`}
                          width={280}
                          height={80}
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
                        <div
                          key={i}
                          className="flex items-start text-xs gap-2 text-gray-600"
                        >
                          <CheckCheck className="min-w-4 w-4 h-4 mt-[3px] text-green-500" />
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
