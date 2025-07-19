"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/amity/HeroSection";
import Stats from "@/components/amity/Stats";
import ProgramHighlights from "@/components/amity/ProgramHighlights";
import KeySpecializations from "@/components/amity/KeySpecializations";
import WhoShouldEnroll from "@/components/amity/WhoShouldEnroll";
import Hallmarks from "@/components/amity/Hallmarks";
import Benefits from "@/components/amity/Benefits";
import FAQ from "@/components/amity/FAQ";
import AdmissionQuery from "@/components/amity/AdmissionQuery";
import AutoPopup from "@/components/ui/AutoPopup";

export default function AmityPage() {
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
      <AutoPopup />
      <HeroSection />
      <Stats />
      <ProgramHighlights />
      <KeySpecializations />
      <Hallmarks />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
    </main>
  );
}
