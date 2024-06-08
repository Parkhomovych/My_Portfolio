import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href={`/`}>
      <h1 className="text-4xl font-semibold">
        Vlad<span className="text-accent">.</span>
      </h1>
    </Link>
  );
};
