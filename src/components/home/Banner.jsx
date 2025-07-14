"use client";

import { Check, Phone, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StaticAdmissionForm from "./StaticAdmissionForm";
import Image from "next/image";

export default function Banner({ utmParams }) {
  return (
    <>
      {/* Desktop Banner: Form on the right */}
      <div className="hidden sm:block">
        <section className="relative w-full h-[calc(100vh-72px)]">
          <div className="absolute inset-0">
            <Image
              src='/nocollege-hero.png'
              alt="MBA students studying online"
              className="w-full h-full object-cover"
              fill
              priority
            />
            {/* <div className="absolute inset-0 bg-black/30" /> */}
          </div>
          <div className="relative z-10 h-full flex items-center justify-end p-8">
            <div className="w-full max-w-sm mr-[10%]">
              <StaticAdmissionForm utmParams={utmParams} />
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Banner: Form below the image */}
      <div className="sm:hidden">
        <section className="relative w-full h-[50vh]">
          <Image
            src='/nocollege-hero-sm.png'
            alt="MBA students studying online"
            className="w-full h-full object-cover"
            fill
            priority
          />
          {/* <div className="absolute inset-0 bg-black/30" /> */}
        </section>
        <div className="p-4 bg-white">
          <div className="relative z-10 -mt-8">
            <StaticAdmissionForm utmParams={utmParams} />
          </div>
        </div>
      </div>
    </>
  );
}
