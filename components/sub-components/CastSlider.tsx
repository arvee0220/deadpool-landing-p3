"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { CastProps } from "../section/Cast";
import "swiper/css";
import CastCard from "./CastCard";

export default function CastSlider({
  castArray,
  loading,
}: {
  castArray: CastProps[];
  loading: boolean;
}) {
  return (
    <Swiper
      style={{
        width: "100%",
        maxWidth: "100%",
      }}
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1.25 },
        430: { slidesPerView: 1.75 },
        640: { slidesPerView: 2.25 },
        768: { slidesPerView: 2.75 },
        960: { slidesPerView: 3.25 },
        1024: { slidesPerView: 3.75 },
        1136: { slidesPerView: 4.25 },
        1280: { slidesPerView: 4.75 },
        1440: { slidesPerView: 6 },
      }}
    >
      {castArray.map((cast, idx) => (
        <SwiperSlide key={idx}>
          <CastCard cast={cast} loading={loading} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
