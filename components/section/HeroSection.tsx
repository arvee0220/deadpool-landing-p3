import Image, { StaticImageData } from "next/image";
import { MoveDown } from "lucide-react";
import {
  marvelStudio,
  disney,
  primeVid,
  smCinema,
  imax,
  vista,
  netflix,
} from "../constants/images";
import { Button } from "../ui/button";
import Link from "next/link";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import SponsorLogos from "../sub-components/SponsorLogos";

export type LogoImageType = {
  source: StaticImageData;
  altText: string;
};

const cinemaImages: LogoImageType[] = [
  { source: disney, altText: "Disney Plus" },
  { source: primeVid, altText: "Prime Video" },
  { source: netflix, altText: "Netflix" },
];

const cinemaImages2: LogoImageType[] = [
  { source: smCinema, altText: "SM Cinema" },
  { source: imax, altText: "IMAX" },
  { source: vista, altText: "Vista" },
];

function HeroSection() {
  const MarvelHeroTextBlock = (
    <div className="w-4/5 md:w-1/2 flex flex-col">
      <Image
        src={marvelStudio}
        alt="Marvel logo"
        className="relative -left-2"
      />
      <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold tracking-tighter">
        DEADPOOL
      </h1>
      <h1 className="py-2 md:py-0 text-4xl xs:text-5xl md:text-6xl font-bold flex">
        <span className="text-4xl md:text-5xl text-transparent font-outline-secondary leading-8 md:leading-snug">
          &
        </span>
        <span className="text-transparent font-outline-primary tracking-tighter">
          WOLVERINE
        </span>
      </h1>
      <p className="text-wrap">
        &quot;Deadpool & Wolverine&quot; is a 2024 superhero film featuring the
        Marvel characters, produced by Marvel Studios and distributed by Disney.
      </p>
    </div>
  );

  const ButtonsWrapper = (
    <div className="flex flex-col xs:flex-row gap-5 pt-8 xs:py-8">
      <Link href="https://smtickets.com/" target="_blank">
        <Button variant="secondary" className="rounded-full" size="lg">
          Onsale Tickets
        </Button>
      </Link>
      <Link href="https://www.youtube.com/watch?v=73_1biulkYk" target="_blank">
        <Button variant="outline" className="rounded-full" size="lg">
          Trailer
        </Button>
      </Link>
    </div>
  );

  const MoveDownButton = (
    <Button
      size="lg"
      variant="default"
      className="w-[64px] h-[64px] p-0 rounded-full flex items-center justify-center max-md:order-last"
    >
      <Link href="#sneakpeek">
        <MoveDown className="text-deadpool-secondary" size={25} />
      </Link>
    </Button>
  );

  const LogosWrapper = (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:py-10">
      <SponsorLogos imagesArr={cinemaImages} />
      {MoveDownButton}
      <SponsorLogos imagesArr={cinemaImages2} />
    </div>
  );

  return (
    <section className="w-full bg-deadpool-dark bg-cover bg-center h-screen">
      <MaxWidthWrapper>
        <div className="w-full h-screen px-[25px] lg:px-[75px] pb-8 flex flex-col justify-between">
          <p className="text-[16px] text-left leading-6 mt-28">
            Premiered on July 22, 2024
          </p>
          <div className="flex flex-col py-8">
            {MarvelHeroTextBlock}
            {ButtonsWrapper}
          </div>
          {LogosWrapper}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
