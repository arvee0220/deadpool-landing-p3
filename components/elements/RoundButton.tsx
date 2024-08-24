import React from "react";
import { MoveDown, MoveLeft, MoveRight, PlayIcon } from "lucide-react";
import clsx from "clsx";

type RoundButtonTypes = {
  direction: "down" | "left" | "right" | "play";
  className: string;
};

export default function RoundButton({
  direction,
  className,
}: RoundButtonTypes) {
  const renderArrow = () => {
    switch (direction) {
      case "down":
        return <MoveDown />;
      case "left":
        return <MoveLeft />;
      case "right":
        return <MoveRight />;
      default:
        return <PlayIcon />;
    }
  };

  return (
    <div
      className={clsx(
        className,
        "rounded-full",
        "bg-deadpool-iconbackground",
        "flex",
        "justify-center",
        "items-center",
        "cursor-pointer",
        "z-10"
      )}
    >
      {renderArrow()}
    </div>
  );
}
