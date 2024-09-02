import Link from "next/link";
import React from "react";
import Logo from "../elements/Logo";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "../ui/button";

type LogoLinkType = {
  name: string;
  link: string;
  icon: React.ReactElement;
};

type LinkType = {
  name: string;
  link: string;
};

type FooterLinkType = {
  linkHeader: string;
  links: LinkType[];
};

type ContactType = {
  icon: React.ReactElement;
  details: string;
};

type ContactLinkType = {
  linkHeader: string;
  contacts: ContactType[];
};

export default function Footer() {
  const logoLinks: LogoLinkType[] = [
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: <FaInstagram />,
    },
    {
      name: "X",
      link: "https://x.com",
      icon: <FaXTwitter />,
    },
    {
      name: "Tiktok",
      link: "https://tiktok.com",
      icon: <FaTiktok />,
    },
  ];

  const footerLinks: FooterLinkType[] = [
    {
      linkHeader: "Information",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Reviews",
          link: "/",
        },
        {
          name: "Article",
          link: "/",
        },
        {
          name: "Cast",
          link: "/",
        },
      ],
    },
    {
      linkHeader: "Helpful Links",
      links: [
        {
          name: "Subscription",
          link: "/",
        },
        {
          name: "Terms of Use",
          link: "/",
        },
        {
          name: "Privacy Policy",
          link: "/",
        },
        {
          name: "Feedback",
          link: "/",
        },
      ],
    },
    {
      linkHeader: "Services",
      links: [
        {
          name: "Tickets On sale",
          link: "/",
        },
        {
          name: "Dealer",
          link: "/",
        },
      ],
    },
  ];

  const contactLinks: ContactLinkType = {
    linkHeader: "Contact Us",
    contacts: [
      {
        icon: <FaPhone />,
        details: "+63123456789",
      },
      {
        icon: <FaEnvelope />,
        details: "Nightcinema1@gmail.com",
      },
    ],
  };

  const subscribeWrapper = (
    <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center gap-[50px] bg-deadpool-iconbackground rounded-[60px] px-11 py-10 xl:py-[82px]">
      <div className="text-deadpool-primary">
        <h1 className="text-4xl font-semibold mb-2">
          Subscribe for you to be updated
        </h1>
        <p className="text-base">
          Stay Updated on the Latest Marvel News and Updates.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-[13px]">
        <input
          type="text"
          placeholder="Your Email"
          className="w-full md:w-[333px] h-12 border-b border-deadpool-primary bg-transparent px-3 py-[21px]"
        />
        <Button variant={"secondary"} className="rounded-full" size={"lg"}>
          Get Started
        </Button>
      </div>
    </div>
  );

  const siteDetails = (
    <div className="w-full lg:w-[344px] h-[200px] lg:h-auto flex flex-col justify-between pr-[58px] ">
      <Logo />
      <p className="md:w-3/5 lg:w-full">
        Your ultimate destination for all things film. Explore in-depth review,
        breaking news, and exclusive insights into the latest movies and
        cinematic trends.
      </p>
      <div className="flex gap-[34px]">
        {logoLinks.map((logo) => (
          <Link
            href={logo.link}
            target="_blank"
            key={logo.name}
            className="text-deadpool-secondary text-2xl"
          >
            {logo.icon}
          </Link>
        ))}
      </div>
    </div>
  );

  const contactLinksWrapper = (
    <div className="flex flex-col gap-5" id="footer">
      <h1 className="font-semibold text-deadpool-primary">
        {contactLinks.linkHeader}
      </h1>
      {contactLinks.contacts.map((item, index) => (
        <div key={index} className="flex gap-4 items-center">
          <span className="text-deadpool-secondary text-2xl">{item.icon}</span>
          <span>{item.details}</span>
        </div>
      ))}
    </div>
  );

  const siteDirectory = (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-10 xl:gap-x-0 gap-y-24">
      {footerLinks.map((item, index) => (
        <div key={index} className="flex flex-col gap-5">
          <h1 className="font-semibold text-deadpool-primary">
            {item.linkHeader}
          </h1>
          {item.links.map((link) => (
            <Link href={link.link} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
      ))}
      {contactLinksWrapper}
    </div>
  );

  return (
    <div className="w-screen flex flex-col text-deadpool-body bg-deadpool-neutral tracking-tighter px-[25px] lg:px-[75px] py-7">
      {subscribeWrapper}
      <div className="w-full flex flex-col gap-24 xl:gap-0 xl:flex-row justify-between mt-32">
        {siteDetails}
        {siteDirectory}
      </div>
      <h1 className="w-full text-center mt-20">
        All Rights Reserved. NightCinema
      </h1>
    </div>
  );
}
