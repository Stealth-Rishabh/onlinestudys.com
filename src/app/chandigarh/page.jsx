"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/chandigarh/HeroSection";
import Stats from "@/components/chandigarh/Stats";
import ProgramHighlights from "@/components/chandigarh/ProgramHighlights";
import KeySpecializations from "@/components/chandigarh/KeySpecializations";
import WhoShouldEnroll from "@/components/chandigarh/WhoShouldEnroll";
import Hallmarks from "@/components/chandigarh/Hallmarks";
import Benefits from "@/components/chandigarh/Benefits";
import FAQ from "@/components/chandigarh/FAQ";
import AdmissionQuery from "@/components/chandigarh/AdmissionQuery";
import EnquireNowButton from "@/components/ui/EnquireNowButton";

export default function ChandigarhPage() {
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
      localStorage.setItem("utmParams", JSON.stringify(params));
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <AdmissionQuery utmParams={utmParams} />
      <HeroSection />
      <Stats />
      <ProgramHighlights />
      <KeySpecializations />
      <Hallmarks />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
      <EnquireNowButton />
    </main>
  );
}
