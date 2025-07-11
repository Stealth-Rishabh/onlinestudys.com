"use client";

import HeroSection from "@/components/galgotias/HeroSection";
import ProgramHighlights from "@/components/galgotias/ProgramHighlights";
import KeySpecializations from "@/components/galgotias/KeySpecializations";
import Stats from "@/components/galgotias/Stats";
import Benefits from "@/components/galgotias/Benefits";
import FAQ from "@/components/galgotias/FAQ";
import Hallmarks from "@/components/galgotias/Hallmarks";
import AdmissionQuery from "@/components/galgotias/AdmissionQuery";
import Curriculum from "@/components/galgotias/Curriculum";

export default function GalgotiasPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Stats />
      <ProgramHighlights />
      <KeySpecializations />
      <Curriculum />
      <Hallmarks />
      <Benefits />
      <FAQ />
      <AdmissionQuery />
    </main>
  );
}
