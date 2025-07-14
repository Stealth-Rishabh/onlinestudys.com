"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";
import { Card } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    img: "/c-naac.jpg",
  },
  {
    id: 2,
    img: "/c-nirf.jpg",
  },
  {
    id: 3,
    img: "/c-times.jpg",
  },
];

const ReviewCard = ({ img }) => {
  return (
    <Card
      className={cn(
        "w-max cursor-pointer p-4 h-full",
        // light styles
        "bg-gray-950/[.01] bg-white",
        // dark styles
        "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2 ">
        <Image 
          className="rounded h-24" 
          src={img} 
          alt="Accreditation logo"
          width={192}
          height={96}
        />
      </div>
    </Card>
  );
};

export function AccreditationLogoMobile() {
  return (
    <div className="relative flex sm:hidden max-w-7xl mx-auto pt-10 flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
