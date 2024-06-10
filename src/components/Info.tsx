import { FC } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+38 068 953 ****",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "adamantinevlad@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Lviv, Mechnikova 10, 79016 ",
  },
];

export const Info: FC = () => {
  return (
    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
      <ul className="flex flex-col gap-10">
        {info.map((i, index) => (
          <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
              <div className="text-[28px]">{i.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{i.title}</p>
              <h3 className="text-xl">{i.description}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
