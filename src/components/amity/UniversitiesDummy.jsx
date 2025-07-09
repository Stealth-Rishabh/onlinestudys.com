import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { GraduationCap, ArrowRight, CheckCheck, ChevronDown } from "lucide-react";
  import amity from "@/assets/universities/amity-logo.png";
  import gla from "@/assets/universities/gla-logo.png";
  import parul from "@/assets/universities/parul-logo.png";
  import cu from "@/assets/universities/cu-logo.webp";
  import sharda from "@/assets/universities/sharda-online.png";
  import lpu from "@/assets/universities/lovelypu-logo.jpg";
  import upes from "@/assets/universities/upestomorrow_logo.png";
  import galgotia from "@/assets/universities/galgotia-logo.png";
  import mmu from "@/assets/universities/mmu-logo.png";
  import geu from "@/assets/universities/geu-online.png";
  
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
  
  export default function UniversitiesDummy() {
    const universities = [
      {
        id: 1,
        name: "Amity University",
        logo: amity,
        fee: "₹1,99,000",
        description: [
          "Globally Recognized Accreditation",
          "Industry-Relevant Curriculum with Practical Exposure",
          "Flexible Learning with Career Support",
        ],
      },
      {
        id: 2,
        name: "GLA Online University",
        logo: gla,
        fee: "₹1,05,000",
        description: [
          "Accredited & Industry-Recognized Degree",
          "Comprehensive Placement Support",
          "Flexible & Interactive Learning Experience",
          "UGC - Entitled and Recognised",
        ],
      },
      {
        id: 3,
        name: "Parul University",
        logo: parul,
        fee: "₹1,50,000",
        description: [
          "Diverse Specializations with Industry Relevance",
          "Robust Digital Learning Experience",
          "Comprehensive Career Support and Global Exposure",
          "NAAC Grade A++ Accredited",
        ],
      },
      {
        id: 4,
        name: "Chandigarh University",
        logo: cu,
        fee: "₹2,10,688",
        description: [
          "NAAC A+ accredited university",
          "Comprehensive Placement Support",
          "Learn from best academician and industry experts",
          "Harvard Business Publishing Education Certification",
        ],
      },
      {
        id: 5,
        name: "LPU",
        logo: lpu,
        fee: "₹1,60,000",
        description: [
          "3 lakh+ Alumni Community",
          "Placements & Other Career Support",
          "Master Classes and Guest Lectures by Industry Experts",
          "Online MBA Degree from NAAC A++ University",
        ],
      },
      {
        id: 6,
        name: "UPES Online",
        logo: upes,
        fee: "₹1,75,000",
        description: [
          "22,000+ Alumni Community",
          "Real life learning through industry projects",
          "Esteemed faculty from IITs, IIMs and Ivy League",
          "NAAC A Accredited University",
        ],
      },
      {
        id: 7,
        name: "Galgotia University",
        logo: galgotia,
        fee: "₹76,200",
        description: [
          "Affordable and Transparent Fee Structure",
          "Comprehensive Career Support Services",
          "Robust Digital Learning Infrastructure",
          "UGC Entitles University",
        ],
      },
      {
        id: 8,
        name: "Sharda University Online",
        logo: sharda,
        fee: "1,00,000",
        description: [
          "Dedicated Student Support",
          "UGC-DEB Approved for Online Learning",
          "AI-Powered Learning Platform",
          "Global Exposure and Diverse Peer Group",
        ],
      },
      {
        id: 9,
        name: "MMU University",
        logo: mmu,
        fee: "1,40,000",
        description: [
          "Classroom-like online learning with real-time engagement",
          "Study anytime, anywhere with full flexibility",
          "UGC-approved courses for assured career growth",
          "Learn from top academicians and industry experts",
        ],
      },
      {
        id: 10,
        name: "GEU University",
        logo: geu,
        fee: "80,000",
        description: [
          "Flexible learning – Study anytime, anywhere",
          "Affordable & high ROI – Lower fees, high salary potential", 
          "Strong industry network – Connect with experts & alumni",
          "Career acceleration – Fast-track promotions & leadership roles"
        ],
      },
    ];
  
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
  
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
        <div className="absolute inset-0 opacity-5 pointer-events-none">
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
              Your Gateway to
              <span className="text-blue-600 block">Academic Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover prestigious institutions that shape tomorrow's leaders.
              Each university offers unique opportunities for growth, innovation,
              and academic achievement.
            </p>
          </div>
  
          {/* Mobile/Tablet Accordion View */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full bg-white">
              {universities.map((university, index) => (
                <AccordionItem key={university.id} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-12 rounded-lg bg-black flex items-center justify-center">
                        <img
                          src={university.logo || "/placeholder.svg"}
                          alt={`${university.name} logo`}
                          className="w-full h-8 object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-gray-900">{university.name}</h3>
                        <p className="text-sm text-gray-600">Total Fee - {university.fee}</p>
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
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-4">
                {universities.map((university, index) => (
                  <CarouselItem
                    key={university.id}
                    className="pl-4 sm:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1 h-full">
                      <Card
                        className="group hover:shadow-2xl  mx-auto max-w-[300px] relative z-10 transition-all py-5 gap-0 duration-300 border-0 shadow-lg hover:-translate-y-2 flex flex-col justify-between bg-gray-100 h-full"
                      >
                        <CardHeader className="pb-0 px-5">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-full h-20 rounded-xl bg-black flex items-center justify-center shadow-md">
                              <img
                                src={university.logo || "/placeholder.svg"}
                                alt={`${university.name} logo`}
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
                          >
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-0 disabled:bg-black/20" />
              <CarouselNext className="absolute right-0 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-0 disabled:bg-black/20" />
            </Carousel>
            
            {api && count > 0 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out
                      ${current === index + 1 ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
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
  