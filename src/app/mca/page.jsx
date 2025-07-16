"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/mca/HeroSection";
import WhoShouldEnroll from "@/components/mca/WhoShouldEnroll";
import Universities from "@/components/mca/Universities";
import Benefits from "@/components/mca/Benefits";
import FAQ from "@/components/mca/FAQ";
import AdmissionQuery from "@/components/mca/AdmissionQuery";

function McaPageContent() {
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
      <Universities />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
    </>
  );
}

export default function McaPage() {
  return <McaPageContent />;
}
