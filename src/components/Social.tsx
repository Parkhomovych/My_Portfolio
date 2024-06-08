import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    path: "https://github.com/Parkhomovych",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    path: "https://www.linkedin.com/in/vladyslav-parkhomovych",
  },
  {
    icon: <FaTelegram className="w-5 h-5" />,
    path: "https://t.me/adamantinevlad",
  },
  { icon: <FaInstagram className="w-5 h-5" />, path: "" },
];

export const Social: FC = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
