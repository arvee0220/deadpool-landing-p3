"use client";
import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../elements/Logo";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";

interface navText {
  href: string;
  text: string;
}

const navMenu: navText[] = [
  { href: "#home", text: "Home" },
  { href: "#marveltalk", text: "Reviews" },
  { href: "#article", text: "Article" },
  { href: "#cast", text: "Cast" },
];

const NavBar: React.FC = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const { scrollY } = useScroll();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  });

  return (
    <section
      className={cn(
        "pl-0 w-full fixed z-50",
        !isTransparent &&
          "bg-black/75 backdrop-blur-lg inset-x-0 md:pl-6 border-b border-stone-700",
        !matches && !isTransparent && "pl-4"
      )}
    >
      <MaxWidthWrapper className="flex justify-center items-center">
        <div
          className={cn(
            "w-11/12 h-32 flex justify-between items-center",
            !isTransparent && "h-24",
            !matches && isTransparent && "h-28",
            !matches && !isTransparent && "h-20"
          )}
        >
          <Logo />
          {/* Mobile and tablet view */}
          <div
            className={cn(
              "w-full md:w-6/12 md:hidden flex items-center gap-6 pr-6 justify-end",
              !isTransparent && !matches && "w-full "
            )}
          >
            <div>
              <Phone className="size-5 sm:size-6" />
            </div>
            <div className="flex flex-col">
              <div
                className="flex flex-col justify-between w-6 h-5 cursor-pointer"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {toggleMenu ? (
                  <X className="size-6 sm:size-8 text-deadpool-primary" />
                ) : (
                  <>
                    <span className="block w-full h-[2px] bg-deadpool-primary rounded" />
                    <span className="block w-4/6 h-[2px] bg-deadpool-primary rounded ml-auto" />
                    <span className="block w-full h-[2px] bg-deadpool-primary rounded" />
                  </>
                )}
              </div>
              {toggleMenu && (
                <div className="flex flex-col mt-2 bg-deadpool-neutral rounded-md shadow-lg absolute top-20 right-8 w-15">
                  <ul className="flex flex-col gap-2 p-3">
                    {navMenu.map(({ href, text }, idx) => (
                      <li
                        key={idx}
                        className="hover:border-b-2 hover:text-deadpool-secondary border-deadpool-secondary"
                      >
                        <Link href={href}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mid to larger viewport */}
          <div
            className={cn(
              "hidden w-full md:flex justify-end items-center mr-0",
              !isTransparent && "mr-6"
            )}
          >
            <ul className="flex flex-row justify-between md:gap-4 p-3">
              {navMenu.map(({ href, text }, idx) => (
                <li
                  key={idx}
                  className="md:text-sm lg:text-base relative w-full hover:border-b-2 hover:text-deadpool-secondary border-deadpool-secondary text-center pb-1"
                >
                  <Link href={href}>{text}</Link>
                </li>
              ))}
            </ul>
            <Button
              variant="secondary"
              className={cn(
                "rounded-full md:text-xs lg:text-sm",
                !isTransparent && "ml-2"
              )}
            >
              Contact
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default NavBar;
