import React from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

function SneakPeek() {
  return (
    <MaxWidthWrapper className="mt-24 mb-32">
      <div className="flex flex-col lg:flex-row md:justify-between gap-10">
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold max-w-prose text-pretty leading-9">
            Deadpool & Wolverine is a 2024 American superhero film based on
            Marvel Comics 
          </h2>
          <p className="text-sm text-stone-300 -tracking-tighter leading-5 text-pretty max-w-prose">
            Featuring the characters Deadpool and Wolverine, produced by Marvel
            Studios. The film received generally positive reviews from critics
            and has grossed over $211 million worldwide.
          </p>

          <Button
            size={"lg"}
            className="relative rounded-full bg-[#363636] w-max text-xs font-light py-7"
          >
            <div className="absolute left-2 p-2 bg-deadpool-primary rounded-full">
              <PlayIcon className="size-6 fill-black text-black" />
            </div>
            <span className="ml-8">Watch Stream & Trailer</span>
          </Button>
        </div>
        <div className="w-full relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="relative mx-auto max-w-2xl"
          >
            <div
              className="absolute left-0 w-full inset-y-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #080808, rgba(8, 8, 8, 0))",
              }}
            />
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem className="sm:basis-1/2" key={index}>
                  <div className="p-1">
                    <Card className="rounded-[60px] overflow-hidden shadow-none border-none">
                      <CardContent className="relative flex aspect-[345/494] items-center justify-center p-6">
                        <Image
                          src={`/sneak-peek/${index + 1}.png`}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-12 right-20 md:-bottom-16 md:right-24">
              <span className="text-sm md:mr-6 md-4">SWIPE RIGHT</span>
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default SneakPeek;
