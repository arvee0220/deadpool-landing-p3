import React from "react";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

// const swiper = new Swiper(".swiper", {
//   modules: [Navigation, Pagination],
//   direction: "vertical",
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// const swiper = document.querySelector('.swiper')

// swiper.slideNext();

export default function ArticlesToRead() {
  const articles = [
    {
      title:
        "45 'Deadpool & Wolverine' Cameos and Easter Eggs From the X-Men, MCU and Beyond",
      description:
        'This article contains major spoilers for plot points, cameos and the ending of "Deadpool & Wolverine," now playing in theaters.',
      authors: ["Jordan Moreau", "Katcy Stephan"],
      thumbnail: "",
    },
    {
      title: "Why One Major DEADPOOL & WOLVERINE Cameo Seemed Impossible",
      description:
        "Deadpool & Wolverine is a delightfully dirty superhero moview with multiversal mishaps. It's also a very clever commentary on the transience of franchise movies.",
      authors: ["Kyle Anderson"],
      thumbnail: "",
    },
    {
      title: "Deadpool & Wolverine beats box office record",
      description:
        "Marvel's Deadpool & Wolverine has had an impressive opening weekend in the US - becoming the eighth-biggest opening ever, and best of the year so far.",
      authors: ["Bonnie McLaren"],
      thumbnail: "",
    },
  ];

  const articlesToReadWrapper = (
    <div>
      <h1 className="font-semibold text-4xl leading-[54px]">
        Articles to Read
      </h1>
      <p>
        Dive Deep into Engaging Content, In-Depth Analysis, and the Latest
        Marvel News. Stay updated with the most intriguing stories, character
        breakdowns, and cinematic insights. Explore a curated selection of
        articles that keep you connected to the Marvel universe.
      </p>
    </div>
  );

  const articlesCarousel = (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination">1</div>
      <div className="swiper-button-prev">{"<"}</div>
      <div className="swiper-button-next">{">"}</div>
      <div className="swiper-scrollbar">{"______"}</div>
    </div>
  );

  return (
    <div className="w-full flex flex-col text-deadpool-primary px-[25px] md:px-[75px] py-7 tracking-tighter gap-[22px]">
      {articlesToReadWrapper}
      {articlesCarousel}
    </div>
  );
}
