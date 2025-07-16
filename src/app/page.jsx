"use client";

import { useState, useEffect } from "react";
// import HeroSection from "@/components/home/HeroSection";
import WhoShouldEnroll from "@/components/home/WhoShouldEnroll";
import Universities from "@/components/home/Universities";
import Benefits from "@/components/home/Benefits";
import FAQ from "@/components/home/FAQ";
import AdmissionQuery from "@/components/home/AdmissionQuery";
import Banner from "@/components/home/Banner";
import { AccreditationLogoMobile } from "@/components/ui/AccreditationLogoMobile";

export default function LandingPage() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    // Get UTM parameters from URL using window.location
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
      // Store in localStorage for other components if needed
      localStorage.setItem("utmParams", JSON.stringify(params));
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <AdmissionQuery utmParams={utmParams} />
      {/* <HeroSection /> */}
      <Banner />
      <AccreditationLogoMobile />
      <Universities />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
    </main>
  );
}
