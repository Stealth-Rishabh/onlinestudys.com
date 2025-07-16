"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/amity/HeroSection";
import Stats from "@/components/amity/Stats";
import ProgramHighlights from "@/components/amity/ProgramHighlights";
import KeySpecializations from "@/components/amity/KeySpecializations";
import WhoShouldEnroll from "@/components/amity/WhoShouldEnroll";
import Hallmarks from "@/components/amity/Hallmarks";
import Benefits from "@/components/amity/Benefits";
import FAQ from "@/components/amity/FAQ";
import AdmissionQuery from "@/components/amity/AdmissionQuery";

function AmityPageContent() {
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const params = {
      utm_source: searchParams.get("utm_source"),
      utm_medium: searchParams.get("utm_medium"),
      utm_campaign: searchParams.get("utm_campaign"),
      utm_term: searchParams.get("utm_term"),
      utm_content: searchParams.get("utm_content"),
      campaign: searchParams.get("campaign"),
    };
    setUtmParams(params);
    localStorage.setItem("utmParams", JSON.stringify(params));
  }, [searchParams]);

  return (
    <>
      <AdmissionQuery utmParams={utmParams} />
      <HeroSection />
      <Stats />
      <ProgramHighlights />
      <KeySpecializations />
      <Hallmarks />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
    </>
  );
}

export default function AmityPage() {
  return <AmityPageContent />;
}
