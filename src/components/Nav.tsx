"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FC } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contacts",
    path: "/contacts",
  },
];

export const Nav: FC = () => {
  const pathName = usePathname();
  return (
    <nav className=" flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
