import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { WorkSliderBtns } from "@/components/WorkSliderBtns";
import { IProjects } from "@/types/interface";

type SwiperComponentProps = {
  handleSlideChange: (swiper: any) => void;
  projects: IProjects[];
  project: any;
};
export const SwiperComponent: FC<SwiperComponentProps> = ({
  handleSlideChange,
  projects,
  project,
}) => {
  return (
    <div className="w-full xl:w-[50%]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="xl:h-[520px] mb-12"
        onSlideChange={handleSlideChange}
      >
        {projects.map((i, index) => (
          <SwiperSlide key={index} className=" w-full">
            <div className="h-[460px]  relative group flex justify-center items-center bg-pink-50/20">
              {/* overlay */}
              <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
              {/* image */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  fill
                  className=" object-cover"
                  alt="project"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <WorkSliderBtns
          containerStyles="w-full flex justify-between  gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 xl:w-max xl:justify-none"
          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all  rounded"
          iconsStyles=""
        />
      </Swiper>
    </div>
  );
};
