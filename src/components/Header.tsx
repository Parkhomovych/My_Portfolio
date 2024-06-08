import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";
export const Header: FC = () => {
  return (
    <header className=" py-8 xl:py-12 ">
      <div className="container mx-auto flex items-center  justify-between">
        <Logo />
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"contacts"}>
            <Button>Hire me </Button>
          </Link>
        </div>
        <div className=" xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
