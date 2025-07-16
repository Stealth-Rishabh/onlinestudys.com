"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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

function ChandigarhPageContent() {
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
      <EnquireNowButton />
    </>
  );
}

export default function ChandigarhPage() {
  return <ChandigarhPageContent />;
}
