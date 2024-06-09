"use client";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRemix,
  SiNestjs,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaDocker,
} from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vlad Parkhomovych",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+380) 068 953 **** ",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Year",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@adamantinevlad",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ukrainian",
    },
    {
      fieldName: "Email",
      fieldValue: "adamantinevlad@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Ukrainian",
    },
  ],
};
const experience = {
  icon: "",
  title: "My experience",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Viso",
      position: "Front-end Developer",
      duration: "2023 - Present",
    },
    {
      company: "GoIT",
      position: "Full Stack Developer",
      duration: "2022 - 2023",
    },
  ],
};
const education = {
  icon: "",
  title: "My education",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      institution: "GoIT",
      degree: "Full Stack Web Development",
      duration: "2022 - 2023",
    },
    {
      institution: "codecademy",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2022 - 2023",
    },
    {
      institution: "Online Course",
      degree: "Full Stack Mobile Development",
      duration: "2022 - 2023",
    },
  ],
};
const skills = {
  icon: "",
  title: "My skills",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <SiTypescript />,
      name: "typeScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiRemix />,
      name: "remix.js",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <SiNestjs />,
      name: "nest.js",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
  ],
};

export default function ResumePage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className=" min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className=" w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((i, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{i.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {i.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 ">{i.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className=" w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((i, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{i.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {i.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 ">{i.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className=" w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5 xl:gap-[30px]">
                  {skills.skillsList.map((i, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {i.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className=" capitalize">{i.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className=" w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl text-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((i, index) => (
                    <li
                      className="flex items-center justify-center xl:justify-start gap-4"
                      key={index}
                    >
                      <span className="text-white/60">{i.fieldName}</span>
                      <span className="text-[19px]">{i.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
