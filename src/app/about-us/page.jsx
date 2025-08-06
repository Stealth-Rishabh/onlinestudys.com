"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Target,
  Users,
  BookOpen,
  Award,
  Globe,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 animate-pulse"></div>
        <div
          className="max-w-4xl mx-auto text-center relative z-10"
          data-animate
          id="hero"
        >
          <div
            className={`transition-all duration-1000 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 animate-bounce">
              About Our Platform
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering your learning journey through accessible, flexible, and
              engaging online education
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              data-animate
              id="mission-text"
              className={`transition-all duration-1000 delay-200 ${
                isVisible["mission-text"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex items-center mb-6 group">
                <Target className="h-8 w-8 text-green-600 mr-3 transition-transform group-hover:scale-110 duration-300" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text">
                Empowering Your Learning Journey
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Welcome to onlinestudys.com! We believe that education is the
                most powerful tool for change, and we are on a mission to make
                it accessible to everyone, everywhere. Our goal is to break down
                the barriers of traditional education, offering a flexible,
                affordable, and engaging way for you to acquire new skills,
                advance your career, and pursue your passions.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div
              data-animate
              id="mission-visual"
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible["mission-visual"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Image
                src="/online-study.jpg"
                alt="Education Transformation"
                width={300}
                height={300}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
            data-animate
            id="what-we-do-header"
          >
            <div
              className={`transition-all duration-1000 ${
                isVisible["what-we-do-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Online Studys is a comprehensive online resource designed to
                simplify the process of choosing a college and course. It's a
                one-stop-shop for students in India with a mobile-friendly
                website for easy access.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personalized Experience",
                description:
                  "We provide students with a personalized experience, helping them make informed decisions based on their academic background and career goals.",
                delay: "delay-200",
                bgColor: "bg-green-100",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Information",
                description:
                  "Detailed information on multiple universities about online MBA & MCA programs to help you choose the right path.",
                delay: "delay-400",
                bgColor: "bg-blue-100",
              },
              {
                icon: Award,
                title: "Key Details Access",
                description:
                  "Access to key details like admission criteria, eligibility, fees, recruiters, and rankings all in one place.",
                delay: "delay-600",
                bgColor: "bg-purple-100",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-animate
                id={`card-${index}`}
                className={`transition-all duration-1000 ${item.delay} ${
                  isVisible[`card-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full bg-green-100`}>
                  <CardContent className="p-5 text-center">
                    <item.icon className="h-12 w-12 text-green-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-green-500" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate id="features-header">
            <div
              className={`transition-all duration-1000 ${
                isVisible["features-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Online Studys?
              </h2>
              <p className="text-xl text-gray-600">
                We're committed to making your educational journey seamless and
                successful
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              data-animate
              id="features-list"
              className={`transition-all duration-1000 delay-200 ${
                isVisible["features-list"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-6">
                {[
                  {
                    title: "Admission Criteria",
                    desc: "Clear and detailed admission requirements for every program",
                  },
                  {
                    title: "Eligibility Information",
                    desc: "Comprehensive eligibility details to help you qualify",
                  },
                  {
                    title: "Fee Structure",
                    desc: "Transparent fee information with EMI options",
                  },
                  {
                    title: "Recruiter Network",
                    desc: "Information about top recruiters and placement opportunities",
                  },
                  {
                    title: "University Rankings",
                    desc: "Latest rankings and accreditation information",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 transition-transform group-hover:scale-110 duration-300" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              data-animate
              id="features-visual"
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible["features-visual"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-green-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <Globe className="h-24 w-24 text-blue-600 mx-auto mb-4 transition-transform group-hover:scale-110 duration-500" />
                  <p className="text-gray-700 font-medium text-lg">
                    Connecting Students
                  </p>
                  <p className="text-gray-600">to Their Dream Universities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
