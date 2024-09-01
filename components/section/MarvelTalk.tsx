"use client";
import React, { useRef, useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import "swiper/css";

type TMarvelTalk = {
  imgSrc: string;
  author: string;
  timeStamp: string;
  content: string;
};

const MARVEL_TALK: TMarvelTalk[] = [
  {
    author: "Mark Hamilton",
    timeStamp: "1min",
    imgSrc: "/marvel-talk/talk-1.png",
    content:
      "The film's unique approach to storytelling sets it apart from other superhero movies. It's a fun, wild ride that doesn't take itself too seriously.",
  },
  {
    author: "Hugh Jackman",
    timeStamp: "1hr",
    imgSrc: "/marvel-talk/talk-2.png",
    content:
      "Logan is a gritty and emotional farewell to Hugh Jackman's Wolverine.",
  },
  {
    author: "Ryan Reynolds",
    timeStamp: "13hrs",
    imgSrc: "/marvel-talk/talk-3.png",
    content:
      "This movie is a game-changer for superhero films. Logan's raw and emotional story is told with great care and attention to detail. A deeply moving and unforgettable film that does justice to the character.",
  },
  {
    author: "Felicity Duffy",
    timeStamp: "1hr",
    imgSrc: "/marvel-talk/talk-4.png",
    content:
      "Hilariously irreverent and full of action, Deadpool is a refreshing take on the superhero genre! Ryan Reynolds nails the character, and the constant breaking of the fourth wall keeps it entertaining.",
  },
  {
    author: "Flynn King",
    timeStamp: "2hrs",
    imgSrc: "/marvel-talk/talk-5.png",
    content:
      "Deadpool is a breath of fresh air in the superhero genre. Ryan Reynolds' performance is fantastic, bringing humor and depth to the character.",
  },
  {
    author: "Yousuf Weiss",
    timeStamp: "4hrs",
    imgSrc: "/marvel-talk/talk-6.png",
    content:
      "The action scenes are incredible, and the comedy is spot on. Definitely a must-watch.",
  },
  {
    author: "Antony Cuevas",
    timeStamp: "2hrs",
    imgSrc: "/marvel-talk/talk-7.png",
    content:
      "Not your typical superhero movie. It's crude, funny, and has a lot of heart. ",
  },
  {
    author: "Yousuf Weiss",
    timeStamp: "1hr",
    imgSrc: "/marvel-talk/talk-6.png",
    content:
      "A wild ride from start to finish. Loved the humor and the breaking of the fourth wall! The action scenes are well-choreographed, and the jokes land perfectly.",
  },
  {
    author: "Sonny Howe",
    timeStamp: "1hr",
    imgSrc: "/marvel-talk/talk-8.png",
    content:
      "The action scenes are incredible, and the comedy is spot on. Definitely a must-watch.",
  },
  {
    author: "Zaara Brooks",
    timeStamp: "1min",
    imgSrc: "/marvel-talk/talk-9.png",
    content:
      "Deadpool breaks all the rules in the best way possible. The film's humor, combined with intense action scenes, creates a unique and memorable experience. A must-see for any fan of the genre.",
  },
  {
    author: "Camilla Morrison",
    timeStamp: "4hrs",
    imgSrc: "/marvel-talk/talk-10.png",
    content:
      "Hugh Jackman delivers an outstanding performance in a deeply human superhero movie.",
  },
  {
    author: "Wilfred Hanson",
    timeStamp: "13hrs",
    imgSrc: "/marvel-talk/talk-11.png",
    content:
      "A brilliant and heartfelt conclusion to Wolverine's story. Logan's intense and gritty narrative is complemented by outstanding performances and a strong script. A must-watch for any fan.",
  },
];

function splitArray<T>(arr: T[], splitInto: number) {
  const _splitArray: T[][] = [];
  for (let index = 0; index < arr.length; index++) {
    const key = index % splitInto;
    if (!_splitArray[key]) {
      _splitArray[key] = [];
    }
    _splitArray[key].push(arr[index]);
  }
  return _splitArray;
}

function MarvelTalk() {
  const columns = splitArray(MARVEL_TALK, 2);

  return (
    <MaxWidthWrapper className="max-w-screen-2xl">
      <div
        id="marveltalk"
        className="w-full mt-24 mb-10 space-y-4 md:space-y-6 md:my-24 lg:mt-64 xl:mb-16 xl:mt-[32rem]"
      >
        <div className="space-y-1.5 md:space-y-2">
          <h1 className="-tracking-tighter text-2xl md:text-4xl font-medium">
            Marvel&apos;s Talk
          </h1>
          <p className="text-xs md:text-sm font-light -tracking-tighter">
            Your source for the latest in Marvel Cinematics.
          </p>
        </div>
        <div className="md:hidden flex items-center justify-center gap-4 w-max ml-auto mt-8">
          <span className="text-sm">SWIPE RIGHT</span>
          <Button className="size-12 rounded-full border-none bg-[#141311] hover:!bg-stone-700 focus:!bg-stone-700">
            <ArrowRight className="size-5 md:size-6 text-deadpool-secondary" />
          </Button>
        </div>
        <div className="relative max-w-sm md:max-w-3xl xl:max-w-screen-xl">
          <div
            className="hidden md:block absolute left-0 w-1/6 inset-y-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #080808, rgba(8, 8, 8, 0))",
            }}
          />
          <div
            className="hidden md:block absolute right-0 w-1/6 inset-y-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #080808, rgba(8, 8, 8, 0))",
            }}
          />
          <Swiper
            className=""
            modules={[A11y]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1.4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {columns[0].map((v, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-[#141311] h-52 flex items-center justify-center space-x-4 m-2 w-full rounded-lg overflow-hidden shadow-none border-none px-4 py-2 ">
                  <Avatar className="size-14">
                    <AvatarImage className="object-cover" src={v.imgSrc} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col justify-center w-full">
                    <CardHeader className="flex-row items-center gap-4 px-0 py-2">
                      <CardTitle className="text-xl md:text-2xl text-deadpool-secondary">
                        {v.author}
                      </CardTitle>
                      <CardDescription>{v.timeStamp}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 w-full">
                      <p className="text-white text-pretty text-xs md:text-sm -tracking-tighter">
                        {v.content}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative max-w-sm md:max-w-3xl xl:max-w-screen-xl">
          <div
            className="hidden md:block absolute left-0 w-1/6 inset-y-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #080808, rgba(8, 8, 8, 0))",
            }}
          />
          <div
            className="hidden md:block absolute right-0 w-1/6 inset-y-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #080808, rgba(8, 8, 8, 0))",
            }}
          />
          <Swiper
            modules={[A11y]}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1.4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3.4,
                spaceBetween: 20,
              },
            }}
          >
            {columns[1].map((v, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-[#141311] h-52 flex items-center justify-center space-x-4 m-2 w-full rounded-lg overflow-hidden shadow-none border-none px-4 py-2 ">
                  <Avatar className="size-14">
                    <AvatarImage className="object-cover" src={v.imgSrc} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col justify-center w-full">
                    <CardHeader className="flex-row items-center gap-4 px-0 py-2">
                      <CardTitle className="text-xl md:text-2xl text-deadpool-secondary">
                        {v.author}
                      </CardTitle>
                      <CardDescription>{v.timeStamp}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 w-full">
                      <p className="text-white text-pretty text-xs md:text-sm -tracking-tighter">
                        {v.content}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default MarvelTalk;
