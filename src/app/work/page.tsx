"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

import { SwiperComponent } from "@/components/SwiperComponent";

const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "project 1",
    description: "Doloribus beatae, quisquam animi rerum saepe fugit",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/chocolate.png",
    live: "https://parkhomovych.github.io/Lazy-Winners",
    github: "https://github.com/Parkhomovych/Lazy-Winners",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "project 1",
    description: "Doloribus beatae, quisquam animi rerum saepe fugit",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Node.js" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description: "Doloribus beatae, quisquam animi rerum saepe fugit",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Nest.js" }],
    image: "",
    live: "",
    github: "",
  },
];
export default function WorkPage() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper?.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80hv] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project?.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project?.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project?.description}</p>
              {/* stack */}
              <ul className="flex gap-3">
                {project.stack.map((i, index) => (
                  <li className=" text-xl text-accent" key={index}>
                    {i.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full  bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full  bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <SwiperComponent
            handleSlideChange={handleSlideChange}
            projects={projects}
            project={project}
          />
        </div>
      </div>
    </motion.section>
  );
}
