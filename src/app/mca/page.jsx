"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/mca/HeroSection";
import WhoShouldEnroll from "@/components/mca/WhoShouldEnroll";
import Universities from "@/components/mca/Universities";
import Benefits from "@/components/mca/Benefits";
import FAQ from "@/components/mca/FAQ";
import AdmissionQuery from "@/components/mca/AdmissionQuery";

export default function McaPage() {
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
      <Universities />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
    </main>
  );
}
