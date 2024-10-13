"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginateProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

export default function CastPaginate({
  currentPage,
  totalPages,
  onPageChange,
}: PaginateProps) {
  return (
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
}
