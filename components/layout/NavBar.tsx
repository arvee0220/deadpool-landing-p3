"use client";
import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../elements/Logo";
import { useScroll, motion, useMotionValueEvent, animate } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const { scrollY } = useScroll();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 7) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  });

  return (
    <motion.section
      initial={{
        top: 0,
      }}
      animate={{
        top: isTransparent ? 0 : "50px",
      }}
      className={cn(
        "w-full max-w-screen-2xl rounded-full mx-auto flex justify-center items-center fixed z-50 transition-colors ",

        !isTransparent && "bg-black/75 backdrop-blur-lg w-4/6 inset-x-0"
      )}
    >
      <div
        className={cn(
          "w-11/12 h-[8rem] flex justify-between items-center",
          !isTransparent && "h-[7rem]"
        )}
      >
        <Logo />

        {/* Mobile and tablet view */}
        <div className="md:w-6/12 md:hidden flex items-center px-3 gap-5 md:px-1">
          <div>
            <Phone />
          </div>
          <div className="flex flex-col">
            <div
              className="flex flex-col justify-between w-6 h-5 cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? (
                <X size={20} className="text-deadpool-primary" />
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
        <div className="hidden w-full md:flex justify-end items-center mr-3">
          <ul className="flex flex-row justify-between md:gap-4 p-3">
            {navMenu.map(({ href, text }, idx) => (
              <li
                key={idx}
                className="relative w-full hover:border-b-2 hover:text-deadpool-secondary border-deadpool-secondary text-center pb-1"
              >
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="rounded-full">
            Contact
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default NavBar;
