"use client";
import { FC } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
};
export const WorkSliderBtns: FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};
