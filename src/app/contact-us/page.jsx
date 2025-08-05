"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, GraduationCap } from "lucide-react";
import StaticAdmissionForm from "@/components/home/StaticAdmissionForm";

export default function ContactUsPage() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    // Get UTM parameters from URL
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const params = {
        utm_source: urlParams.get("utm_source"),
        utm_medium: urlParams.get("utm_medium"),
        utm_campaign: urlParams.get("utm_campaign"),
        utm_term: urlParams.get("utm_term"),
        utm_content: urlParams.get("utm_content"),
        campaign: urlParams.get("campaign"),
      };
      setUtmParams(params);
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Speak with our education counselors"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@onlinestudys.com",
      description: "Get detailed information via email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Delhi, India",
      description: "Head office location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      description: "We're here to help you"
    }
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Guidance",
      description: "Get personalized counseling from education experts"
    },
    {
      icon: Users,
      title: "Student Support",
      description: "24/7 support for all your queries"
    },
    {
      icon: MessageCircle,
      title: "Quick Response",
      description: "Get responses within 24 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            {/* <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Ready to start your educational journey? Our expert counselors are here to guide you every step of the way.
            </p> */}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Section - Visual & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Modern Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white/20 rounded-full p-4">
                    <MessageCircle className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4">
                  Let's Start Your Journey
                </h3>
                <p className="text-green-100 text-center text-lg">
                  Fill out the form and our education experts will get back to you within 24 hours with personalized guidance.
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                <GraduationCap className="w-6 h-6 text-yellow-800" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-400 rounded-full p-3 shadow-lg">
                <Users className="w-6 h-6 text-blue-800" />
              </div>
            </div>

            {/* Contact Information */}
            {/* <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="grid gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <item.icon className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-green-600 font-medium">{item.details}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h3>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl border border-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <feature.icon className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Get Free Counseling
                </h2>
                <p className="text-gray-600">
                  Fill the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              <StaticAdmissionForm utmParams={utmParams} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      {/* <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of students who have already taken the first step towards their dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Your Application
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
} 