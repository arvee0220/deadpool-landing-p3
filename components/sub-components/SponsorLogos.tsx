import React from "react";
import { LogoImageType } from "../section/HeroSection";
import Image from "next/image";

export default function SponsorLogos({
  imagesArr,
}: {
  imagesArr: LogoImageType[];
}) {
  return (
    <div className="flex justify-between gap-2">
      {imagesArr.map(({ source, altText }, idx) => (
        <div key={idx}>
          <Image src={source} alt={altText} width={125} height={100} />
        </div>
      ))}
    </div>
  );
}
