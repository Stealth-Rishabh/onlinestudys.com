"use client";

import HeroSection from "@/components/parul/HeroSection";
import ProgramHighlights from "@/components/parul/ProgramHighlights";
import KeySpecializations from "@/components/parul/KeySpecializations";
import Stats from "@/components/parul/Stats";
import Benefits from "@/components/parul/Benefits";
import FAQ from "@/components/parul/FAQ";
import FloatingAdmissionButton from "@/components/parul/FloatingAdmissionButton";

export default function ParulPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Stats />
      <ProgramHighlights />
      <KeySpecializations />
      <Benefits />
      <FAQ />

      {/* Floating Button */}
      <FloatingAdmissionButton />
    </main>
  );
}
