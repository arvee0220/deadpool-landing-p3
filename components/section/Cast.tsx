"use client";

import { StaticImageData } from "next/image";
import {
  aaron,
  blake,
  chris,
  dafne,
  emma,
  hugh,
  leslie,
  matthew,
  ryan,
  shioli,
} from "../constants/images";
import { useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import CastSlider from "../sub-components/CastSlider";
import useViewportResize from "@/lib/useViewportResize";
import CastPaginate from "../sub-components/CastPaginate";

export type CastProps = {
  img: StaticImageData;
  castName: string;
  castRole: string;
};

const castMembers: CastProps[] = [
  { img: ryan, castName: "Ryan Reynolds", castRole: "Deadpool" },
  { img: hugh, castName: "Hugh Jackman", castRole: "Wolverine" },
  { img: emma, castName: "Emma Corrin", castRole: "Cassandra Nova" },
  { img: aaron, castName: "Aaron Stanford", castRole: "Pyro" },
  { img: matthew, castName: "Matthew Macfayden", castRole: "Mobius" },
  { img: shioli, castName: "Shioli Kutsuna", castRole: "Yukio" },
  { img: leslie, castName: "Leslie Uggams", castRole: "Blind Al" },
  { img: blake, castName: "Blake Lively", castRole: "Ladypool" },
  { img: chris, castName: "Chris Evans", castRole: "Johnny Storm" },
  { img: dafne, castName: "Dafne Keen", castRole: "Laura / X-23" },
];

function Cast() {
  const isWidthSmall = useViewportResize();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const lastItemIdx = currentPage * 6;
  const firstItemIdx = lastItemIdx - 6;
  const currentItems = castMembers.slice(firstItemIdx, lastItemIdx);
  const totalPages = Math.ceil(castMembers.length / 6);

  const pageChangeHandler = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    setLoading(true);

    setTimeout(() => setLoading(false), 500);
  };

  const SectionTitle = (
    <div className="self-end ld:text-right mb-8 max-w-3xl">
      <h1 className="md:text-end text-4xl mb-2 font-semibold tracking-tighter">
        Deadpool & Wolverine Cast
      </h1>
      <p className="md:text-end tracking-tighter">
        Meet the Star-Studded Lineup Bringing Your Favorite Characters to Life.
        Explore the actors behind this iconic Marvel duo and their roles in the
        film.
      </p>
    </div>
  );

  const CastSliderWrapperSm = (
    <div className="w-full space-y-6">
      <CastSlider
        castArray={currentItems.slice(0, Math.ceil(currentItems.length / 2))}
        loading={loading}
      />
      <CastSlider
        castArray={currentItems.slice(Math.ceil(currentItems.length / 2))}
        loading={loading}
      />
    </div>
  );

  const CastDisplayWrapperLg = (
    <div className="w-full">
      <CastSlider castArray={currentItems} loading={loading} />
    </div>
  );

  const CastPaginateWrapper = (
    <div className="py-10">
      <CastPaginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={pageChangeHandler}
      />
    </div>
  );

  // const CastDisplayWrapperLg = (
  //   <div className="flex">
  //     {currentItems.map((cast, idx) => (
  //       <CastCard cast={cast} key={idx} />
  //     ))}
  //   </div>
  // );

  return (
    <section className="w-full">
      <MaxWidthWrapper>
        <section
          className="w-full px-[25px] lg:px-[75px] flex flex-col items-center justify-center scroll-mt-24 py-10 gap-8"
          id="cast"
        >
          {SectionTitle}
          {isWidthSmall ? CastSliderWrapperSm : CastDisplayWrapperLg}
          {CastPaginateWrapper}
        </section>
      </MaxWidthWrapper>
    </section>
  );
}

export default Cast;
