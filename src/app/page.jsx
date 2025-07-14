"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/home/HeroSection";
import WhoShouldEnroll from "@/components/home/WhoShouldEnroll";
import Universities from "@/components/home/Universities";
import Benefits from "@/components/home/Benefits";
import FAQ from "@/components/home/FAQ";
import AdmissionQuery from "@/components/home/AdmissionQuery";
import Banner from "@/components/home/Banner";

function LandingPageContent() {
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
    // Store in localStorage for other components if needed
    localStorage.setItem("utmParams", JSON.stringify(params));
  }, [searchParams]);

  return (
    <>
      <AdmissionQuery utmParams={utmParams} />
      {/* <HeroSection /> */}
      <Banner />
      <Universities />
      <WhoShouldEnroll />
      <Benefits />
      <FAQ />
    </>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPageContent />
    </Suspense>
  );
}
