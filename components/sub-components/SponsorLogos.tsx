import React from "react";
import { LogoImageType } from "../section/HeroSection";
import Image from "next/image";

export default function SponsorLogos({
  imagesArr,
}: {
  imagesArr: LogoImageType[];
}) {
  return (
    <div className="flex justify-between gap-4">
      {imagesArr.map(({ source, altText }, idx) => (
        <div key={idx} className="relative h-[125px] aspect-[1/1.25]">
          <Image
            src={source}
            alt={altText}
            fill
            className="object-contain bg-center"
          />
        </div>
      ))}
    </div>
  );
}
