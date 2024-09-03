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

type Images = {
  source: StaticImageData;
  altText: string;
};

const cinemaImages: Images[] = [
  { source: disney, altText: "Disney Plus" },
  { source: primeVid, altText: "Prime Video" },
  { source: netflix, altText: "Netflix" },
];

const cinemaImages2: Images[] = [
  { source: smCinema, altText: "SM Cinema" },
  { source: imax, altText: "IMAX" },
  { source: vista, altText: "Vista" },
];

function HeroSection() {
  return (
    <section
      className="w-full h-screen bg-deadpool-dark bg-cover bg-center flex flex-col justify-center items-center"
      id="#home"
    >
      <div className="w-11/12 h-1/6 flex justify-start items-center mt-8">
        <p className="text-[16px] text-left px-3 md:px-1 leading-6 mt-10">
          Premiered on July 22, 2024
        </p>
      </div>
      <div className="w-11/12 flex justify-start">
        <div className="w-4/5 md:w-3/6 px-3 md:px-1 flex flex-col">
          <Image
            src={marvelStudio}
            alt="Marvel logo"
            className="relative -left-1"
          />
          <h1 className="text-5xl md:text-6xl font-bold">DEADPOOL</h1>
          <h1 className="py-2 md:py-0 text-5xl md:text-6xl font-bold flex">
            <span className=" text-4xl md:text-5xl text-transparent font-outline-secondary leading-8 md:leading-snug">
              &
            </span>
            <span className="text-transparent font-outline-primary">
              WOLVERINE
            </span>
          </h1>
          <p className="text-wrap">
            &quot;Deadpool & Wolverine&quot; is a 2024 superhero film featuring
            the Marvel characters, produced by Marvel Studios and distributed by
            Disney.
          </p>
          <div className="flex gap-5 py-8">
            <Button variant={"secondary"} className="rounded-full" size={"lg"}>
              Onsale Tickets
            </Button>
            <Button variant={"outline"} className="rounded-full" size={"lg"}>
              Trailer
            </Button>
          </div>
        </div>
      </div>
      <div className="w-11/12 h-2/6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="relative h-2/6 lg:w-2/6 flex justify-between items-center px-2">
          {cinemaImages.map(({ source, altText }, idx) => (
            <div key={idx}>
              <Image src={source} alt={altText} width={125} height={100} />
            </div>
          ))}
        </div>

        <div className="h-2/6 flex flex-col justify-evenly items-center p-1 order-3 lg:order-none">
          <Button
            size={"lg"}
            variant={"default"}
            className="w-16 h-20 md:h-24 lg:h-28 xl:h-16 p-0 rounded-full flex items-center justify-center"
          >
            <Link href="#sneakpeek">
              <MoveDown className="text-deadpool-secondary" size={25} />
            </Link>
          </Button>
          <p className="text-center">Scroll Down</p>
        </div>
        <div className="relative h-2/6 lg:w-2/6 flex justify-between items-center px-2">
          {cinemaImages2.map(({ source, altText }, idx) => (
            <div key={idx}>
              <Image src={source} alt={altText} width={125} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
