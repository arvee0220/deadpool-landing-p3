import clsx from "clsx";
import React from "react";

type PaginationMarkerPropsType = {
  current: number;
  total: number;
};

export default function PaginationMarker({
  current,
  total,
}: PaginationMarkerPropsType) {
  const markers = [...Array(total)].map((_, index) => (
    <div
      key={index}
      className={clsx(
        "w-10",
        "h-[5px]",
        "rounded-full",
        current === index ? "bg-deadpool-primary" : "bg-[#141311]"
      )}
    ></div>
  ));

  return <div className="flex gap-[25px]">{markers}</div>;
}
