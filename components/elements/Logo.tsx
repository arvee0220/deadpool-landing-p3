import { Moon } from "lucide-react";

function Logo() {
  return (
    <div className="h-15 flex flex-col text-deadpool-primary ml-3">
      <span className="text-sm md:text-base">
        NIGHT{" "}
        <Moon className="size-4 md:size-6 inline relative -top-[10px] -left-[2px]" />
      </span>
      <span className="text-[20px] font-bold md:text-[24px] leading-none relative -top-[0.4rem]">
        CINEMA
      </span>
    </div>
  );
}

export default Logo;
