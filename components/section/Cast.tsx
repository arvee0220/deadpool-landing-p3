"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image, { StaticImageData } from "next/image";
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
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import CelebCards from "../sub-components/Card";

type CastProps = {
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

const itemsPerPage = 4;

function Cast() {
  const [currentPage, setCurrentPage] = useState(1);
  const lastItemIdx = currentPage * itemsPerPage;
  const firstItemIdx = lastItemIdx - itemsPerPage;
  const currentItems = castMembers.slice(firstItemIdx, lastItemIdx);

  const pageChangeHandler = (pageNumber: number): void =>
    setCurrentPage(pageNumber);

  const totalPages = Math.ceil(castMembers.length / itemsPerPage);

  return (
    <section className="w-full">
      <MaxWidthWrapper>
        <section
          className="w-full px-[25px] lg:px-[75px] flex flex-col items-center justify-center scroll-mt-24 py-10"
          id="cast"
        >
          <div className="self-end ld:text-right mb-8 max-w-3xl ml-auto">
            <h1 className="md:text-end text-4xl mb-2 font-semibold tracking-tighter">
              Deadpool & Wolverine Cast
            </h1>
            <p className="md:text-end tracking-tighter">
              Meet the Star-Studded Lineup Bringing Your Favorite Characters to
              Life. Explore the actors behind this iconic Marvel duo and their
              roles in the film.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
            {currentItems.map(({ img, castName, castRole }, idx) => (
              <CelebCards
                key={idx}
                imgs={img}
                castName={castName}
                castRole={castRole}
              />
            ))}
          </div>
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={pageChangeHandler}
          />
        </section>
      </MaxWidthWrapper>
    </section>
  );
}

type PaginateProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Paginate: React.FC<PaginateProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(currentPage > 1 ? currentPage - 1 : 1);
          }}
        />
      </PaginationItem>
      {Array.from({ length: totalPages }, (_, idx) => (
        <PaginationItem key={idx + 1}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(idx + 1);
            }}
            className={currentPage === idx + 1 ? "active" : ""}
          >
            {idx + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            );
          }}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Cast;
