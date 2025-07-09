import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState, useCallback } from "react";
import amity from "@/assets/banners/amity.png";
import chandigarh from "@/assets/banners/chandigarh.png";
import GLA from "@/assets/banners/GLA.png";
import Parul from "@/assets/banners/Parul.png";
import sharda from "@/assets/banners/sharda.png";

const carouselImages = [
  {
    src: amity,
    alt: "Amity University",
    title: "Amity University", 
    // description: "Breathtaking peaks bathed in golden light",
  },
  {
    src: chandigarh,
    alt: "Chandigarh",
    title: "Chandigarh University",
    // description: "Where form meets function in perfect harmony",
  },
  {
    src: GLA,
    alt: "GLA University",
    title: "GLA University",
    // description: "Endless horizons and tranquil waters",
  },
  {
    src: Parul,
    alt: "Parul University",
    title: "Parul University",
    // description: "Nature's green cathedral from above",
  },
  {
    src: sharda,
    alt: "Sharda University",
    title: "Sharda University",
    // description: "The pulse of urban life after dark",
  },
];

export default function Hero() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  const autoPlay = useCallback(() => {
    if (!api || !isPlaying) return;
    api.scrollNext();
  }, [api, isPlaying]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Set up auto-play interval
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(autoPlay, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [autoPlay, isPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <div className="w-full sm:h-screen backdrop-blur-sm bg-black/50 relative">
      <style jsx global>{`
        .carousel-container .embla__container {
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-slide {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-slide.active {
          transform: scale(1);
          opacity: 1;
        }

        .carousel-slide.inactive {
          transform: scale(0.95);
          opacity: 0.7;
        }

        .slide-content {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(20px);
          opacity: 0;
        }

        .slide-content.active {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.3s;
        }

        .image-container {
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .image-container:hover {
          transform: scale(1.02);
        }
      `}</style>

      <Carousel
        setApi={setApi}
        className="w-full carousel-container"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: false,
          duration: 25, // Smoother drag duration
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent className="-ml-0">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="border-0 py-0 rounded-none overflow-hidden">
                <div
                  className={`relative w-full sm:h-screen group carousel-slide ${
                    current === index ? "active" : "inactive"
                  }`}
                >
                  <div className="image-container w-full h-full">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    //   sizes="100vw"
                    />
                  </div>

                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                  {/* Animated Content Overlay */}
                  <div className="absolute bottom-0  left-4 sm:left-0 right-0 p-8 md:p-16 lg:p-24">
                    <div
                      className={`max-w-4xl slide-content ${
                        current === index ? "active" : ""
                      }`}
                    >
                      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold sm:font-bold text-white mb-0 tracking-tight leading-tight">
                        Admission Open
                      </h3>
                      <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold sm:font-bold text-white mb-0 tracking-tight leading-tight">
                        Online MBA
                      </h2>
                      <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold sm:font-bold text-white mb-4 tracking-tight leading-tight">
                        {image.title}
                      </h2>
                      <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Progress Indicator */}
                  <div className="absolute top-8 right-8 md:top-16 md:right-16">
                    <div className="flex items-center space-x-3 text-white/70 text-sm font-medium backdrop-blur-sm bg-black/20 sm:px-4 sm:py-2 px-3 py-1 rounded-full">
                      <span className="text-white font-semibold text-base sm:text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-0.5 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-white transition-all duration-4000 ease-linear ${
                            current === index && isPlaying ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                      <span className="text-white/70">
                        {String(carouselImages.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Auto-play indicator */}
                  <div className="absolute top-8 left-8 md:top-16 md:left-16">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isPlaying ? "bg-green-400 animate-pulse" : "bg-white/50"
                      }`}
                    />
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Enhanced Navigation Buttons */}
        <CarouselPrevious className="absolute left-1 sm:left-4 sm:left-16 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/30 hover:text-white hover:scale-110 transition-all duration-300 w-8 h-8 rounded-full shadow-2xl" />
        <CarouselNext className="absolute right-1 sm:right-4 sm:right-16 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/30 hover:text-white hover:scale-110 transition-all duration-300 w-8 h-8 rounded-full shadow-2xl" />
      </Carousel>

      {/* Enhanced Side Progress Bar */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
        <div className="flex flex-col space-y-4 backdrop-blur-sm bg-black/20 p-2 rounded-full">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-1.5 h-12 rounded-full transition-all duration-500 relative overflow-hidden ${
                current === index
                  ? "bg-white shadow-lg"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            >
              {current === index && isPlaying && (
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-white/70 transition-all duration-4000 ease-linear h-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Auto-play Control */}
      {/* <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl z-50"
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 ml-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button> */}
    </div>
  );
}
