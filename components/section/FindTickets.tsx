import { Road_Rage } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  arrow,
  deadpoolWolverine,
  icon1,
  icon2,
  icon3,
  play,
} from "../constants/images";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Link from "next/link";

const roadRage = Road_Rage({ subsets: ["latin"], weight: ["400"] });

function FindTickets() {
  return (
    <MaxWidthWrapper className="2xl:overflow-hidden">
      <section className="h-[75vh] md:h-full md:py-32 w-11/12 mx-auto flex flex-col justify-center items-center gap-10 md:gap-0">
        <div className="flex flex-col">
          <h1
            className={`${roadRage.className} text-5xl md:text-7xl lg:text-9xl text-center`}
          >
            <span className="text-deadpool-accent">DEADPOOL</span> &{" "}
            <span className="text-deadpool-secondary">WOLVERINE</span> IS JUST
            THE BLOODY, PUERILE, HEARTFELT MOVIE WE WANTED
          </h1>
          <p className="text-left md:text-right text-deadpool-body relative self-start md:self-end md:mr-[7.4%]">
            by Kyle Anderson
          </p>
        </div>
        <div className="flex justify-center items-center relative">
          <div className="hidden absolute xl:flex w-[700px] h-[700px] -translate-x-12 border-2 border-[#3e3b36] rounded-full bg-transparent items-center justify-center -left-[460px]">
            <div className="hidden xl:flex justify-center xl:w-3/6 h-[25%] -translate-x-20 relative items-center border-4 border-deadpool-primary rounded-full bg-transparent">
              <div className="w-[1075px] h-[100px] absolute flex items-center justify-center left-1 -mt-2 overflow-hidden">
                <Image
                  src={deadpoolWolverine}
                  alt="Deadpool and Wolverine"
                  className="rotate-45 top-16 -left-36 relative"
                />
              </div>
            </div>
          </div>
          <h1 className="text-8xl md:text-[200px] lg:text-[250px] xl:text-[300px] max-xs:text-7xl tracking-tighter font-outline-primary text-transparent font-semibold">
            MARVEL
          </h1>
        </div>
        <div className="w-full relative flex flex-col md:flex-row md:justify-end items-center space-y-4 lg:space-y-0 md:gap-4">
          <div className="flex justify-center items-center md:justify-end w-full md:w-auto">
            <Image src={arrow} alt="Arrow" className="w-full relative" />
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-auto space-x-2">
            <Link href="https://smtickets.com/" target="_blank">
              <Button className="flex justify-between items-center w-56 h-20 md:h-16 py-7 rounded-full text-deadpool-primary bg-[#363636] gap-3 justify-self-end">
                <div className="left-2 p-2 bg-deadpool-primary rounded-full">
                  <PlayIcon className="size-6 fill-black text-black" />
                </div>

                <div className="flex-1">Find Tickets</div>
              </Button>
            </Link>
            <div className="flex justify-center justify-self-center items-center">
              <Avatar>
                <Image src={icon1} alt="Icon1" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="-left-2">
                <Image src={icon2} alt="Icon2" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="-left-4">
                <Image src={icon3} alt="Icon3" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default FindTickets;
