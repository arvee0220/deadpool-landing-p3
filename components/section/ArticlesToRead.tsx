"use client";

import Image from "next/image";
import { article1Img, article2Img, article3Img } from "../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../elements/pagination.css";
import RoundButton from "../elements/RoundButton";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";

export default function ArticlesToRead() {
  const articles = [
    {
      title:
        "45 'Deadpool & Wolverine' Cameos and Easter Eggs From the X-Men, MCU and Beyond",
      description:
        'This article contains major spoilers for plot points, cameos and the ending of "Deadpool & Wolverine," now playing in theaters.',
      authors: ["Jordan Moreau", "Katcy Stephan"],
      thumbnail: article1Img,
      alt: "Wolverine and Deadpool on set",
    },
    {
      title: "Why One Major DEADPOOL & WOLVERINE Cameo Seemed Impossible",
      description:
        "Deadpool & Wolverine is a delightfully dirty superhero moview with multiversal mishaps. It's also a very clever commentary on the transience of franchise movies.",
      authors: ["Kyle Anderson"],
      thumbnail: article2Img,
      alt: "Deadpool and Wolverine close-up shot",
    },
    {
      title: "Deadpool & Wolverine beats box office record",
      description:
        "Marvel's Deadpool & Wolverine has had an impressive opening weekend in the US - becoming the eighth-biggest opening ever, and best of the year so far.",
      authors: ["Bonnie McLaren"],
      thumbnail: article3Img,
      alt: "Hugh Jackman and Ryan Reynolds seemingly pointing at someone",
    },
    {
      title: "Why One Major DEADPOOL & WOLVERINE Cameo Seemed Impossible",
      description:
        "Deadpool & Wolverine is a delightfully dirty superhero moview with multiversal mishaps. It's also a very clever commentary on the transience of franchise movies.",
      authors: ["Kyle Anderson"],
      thumbnail: article2Img,
      alt: "Deadpool and Wolverine close-up shot",
    },
  ];

  const articlesToReadWrapper = (
    <div>
      <h1 className="font-semibold text-4xl leading-[54px]">
        Articles to Read
      </h1>
      <p className="font-medium lg:w-3/5 xl:w-7/12">
        Dive Deep into Engaging Content, In-Depth Analysis, and the Latest
        Marvel News. Stay updated with the most intriguing stories, character
        breakdowns, and cinematic insights. Explore a curated selection of
        articles that keep you connected to the Marvel universe.
      </p>
    </div>
  );

  const articlesCarousel = (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      style={{
        width: "100%",
        maxWidth: "100%",
      }}
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1.65 },
        768: { slidesPerView: 1.95 },
        960: { slidesPerView: 2.5 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 2.5 },
        1440: { slidesPerView: 3 },
      }}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
        renderBullet: function (_, className) {
          return '<div class="' + className + '">' + "</div>";
        },
      }}
    >
      {articles.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-[350px] lg:w-[415px] flex flex-col gap-5 mb-9">
            <Image
              src={item.thumbnail}
              alt={item.alt}
              className="object-cover rounded-2xl w-[350px] h-[260px] lg:w-[415px] lg:h-[275px]"
            />
            <div className="flex flex-col gap-[15px]">
              <h1 className="text-deadpool-secondary text-2xl font-semibold">
                {item.title}
              </h1>
              <p className="font-normal">{item.description}</p>
              <p className="flex gap-1 text-deadpool-body">
                <span>By</span>
                {item.authors.map((author, index) => {
                  const addComma =
                    item.authors.length > 1 && index !== item.authors.length - 1
                      ? ","
                      : null;

                  return (
                    <span key={index}>
                      {author}
                      {addComma}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex justify-between items-center">
        <RoundButton
          direction="left"
          className="custom-prev w-[60px] h-[60px]"
        />
        <div className="swiper-pagination"></div>
        <RoundButton
          direction="right"
          className="custom-next w-[60px] h-[60px]"
        />
      </div>
    </Swiper>
  );

  return (
    <MaxWidthWrapper>
      <div
        className="w-full flex flex-col text-deadpool-primary px-[25px] lg:px-[75px] py-7 tracking-tighter gap-[22px] lg:gap-7 scroll-mt-40"
        id="article"
      >
        {articlesToReadWrapper}
        {articlesCarousel}
      </div>
    </MaxWidthWrapper>
  );
}
