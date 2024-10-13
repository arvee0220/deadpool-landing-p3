"use client";

import { useEffect, useState } from "react";
import { AlignRight, Phone } from "lucide-react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Logo from "../elements/Logo";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
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

export default function NavBar() {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    function handleScrollNavbar() {
      if (window.scrollY > 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    }

    window.addEventListener("scroll", handleScrollNavbar);

    return () => window.removeEventListener("scroll", handleScrollNavbar);
  });

  const NavLinks = navMenu.map(({ href, text }, idx) => (
    <li
      key={idx}
      className="hover:border-b-2 hover:text-deadpool-secondary border-deadpool-secondary pb-1 list-none"
    >
      <Link href={href}>{text}</Link>
    </li>
  ));

  const NavbarLinksSm = (
    <div className="flex items-center gap-6 md:hidden">
      <Phone className="size-5 sm:size-6" />
      <Popover>
        <PopoverTrigger asChild>
          <AlignRight className="cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="w-40">{NavLinks}</PopoverContent>
      </Popover>
    </div>
  );

  const NavLinksLg = (
    <ul className="hidden md:flex md:gap-4 items-center">
      {NavLinks}
      <Button
        variant="secondary"
        className="rounded-full md:text-xs lg:text-sm"
      >
        Contact
      </Button>
    </ul>
  );

  return (
    <MaxWidthWrapper>
      <nav
        className={cn(
          "w-full px-[25px] py-5 fixed lg:px-[75px] flex items-center justify-between z-50",
          isTransparent && "bg-deadpool-neutral pb-3"
        )}
      >
        <Logo />
        {NavbarLinksSm}
        {NavLinksLg}
      </nav>
    </MaxWidthWrapper>
  );
}
