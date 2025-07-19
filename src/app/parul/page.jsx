"use client";

import HeroSection from "@/components/parul/HeroSection";
import ProgramHighlights from "@/components/parul/ProgramHighlights";
import KeySpecializations from "@/components/parul/KeySpecializations";
import Stats from "@/components/parul/Stats";
import Benefits from "@/components/parul/Benefits";
import FAQ from "@/components/parul/FAQ";
import FloatingAdmissionButton from "@/components/parul/FloatingAdmissionButton";
import Hallmarks from "@/components/parul/Hallmarks";
import AdmissionQuery from "@/components/parul/AdmissionQuery";
import AutoPopup from "@/components/ui/AutoPopup";

export default function ParulPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Stats />
      <ProgramHighlights />
      <KeySpecializations />
      <Hallmarks />
      <Benefits />
      <FAQ />
      <AdmissionQuery />
      <AutoPopup />
    </main>
  );
}
