"use client";
import React, { useRef, useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { Button } from "../ui/button";
import { ArrowRight, PlayIcon } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";

function SneakPeek() {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>();

  return (
    // <MaxWidthWrapper className="mt-24 mb-32">
    <div
      className="flex flex-col lg:flex-row md:justify-between gap-10 p-[25px] lg:pl-[75px] mt-24 mb-32"
      id="sneakpeek"
    >
      <div className="flex flex-col space-y-6">
        <h2 className="text-4xl font-semibold max-w-prose text-pretty leading-[54px] tracking-tighter">
          Deadpool & Wolverine is a 2024 American superhero film based on Marvel
          Comics 
        </h2>
        <p className="text-xl text-stone-300 text-pretty max-w-prose leading-[30px] tracking-tighter">
          Featuring the characters Deadpool and Wolverine, produced by Marvel
          Studios. The film received generally positive reviews from critics and
          has grossed over $211 million worldwide.
        </p>

        <Button
          size={"lg"}
          className="relative rounded-full bg-[#363636] w-max font-normal py-7"
        >
          <div className="absolute left-2 p-2 bg-deadpool-primary rounded-full">
            <PlayIcon className="size-6 fill-black text-black" />
          </div>
          <span className="ml-8">Watch Stream & Trailer</span>
        </Button>
      </div>
      <div className="relative mx-auto max-w-xs sm:max-w-lg md:max-w-xl">
        <div
          className="absolute left-0 w-full inset-y-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #080808, rgba(8, 8, 8, 0))",
          }}
        />
        <Swiper
          modules={[A11y]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSliderMove={() => {
            if (isEnd) {
              setIsEnd(false);
            }
          }}
          onReachEnd={() => setIsEnd(true)}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide key={index}>
              <Card className="m-2 relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-none border-none">
                <Image
                  src={`/sneak-peek/${index + 1}.png`}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 345px, 495px"
                  className="object-cover"
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-4 w-max ml-auto mt-8">
          <span className="text-sm">SWIPE RIGHT</span>
          <Button
            disabled={isEnd}
            className="size-12 rounded-full border-none bg-[#141311] hover:!bg-stone-700 focus:!bg-stone-700"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight className="size-5 md:size-6 text-deadpool-secondary" />
          </Button>
        </div>
      </div>
    </div>
    // </MaxWidthWrapper>
  );
}

export default SneakPeek;
