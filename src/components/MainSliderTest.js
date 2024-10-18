import React from "react";
import "../App.css";
import MoreDetailsButton1 from "../assets/images1/MoreDetailsButton1.svg";
import Frame1 from "../assets/images/Frame1.png";
import SlideButton from "../assets/images/SlideButton.png";
import SlideBackground from "../assets/images/SlideBackground.png";

const MainSlider = () => {
  return (
    <div className="flex flex-col relative w-full lg:pl-[35.5px] lg:px-0 md:px-6 sm:px-4">
      <div className="flex flex-col relative max-w-[1097.5px] lg:w-full lg:pt-[159px] mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row lg:relative max-w-[1097.5px] lg:w-full mx-auto lg:px-0">
          {/* Left side text */}
          <div className="flex flex-col relative max-w-[496px] max-h-[397.5px] lg:w-full lg:h-full lg:mx-0 mx-auto">
            <p
              className="max-w-[474px] w-full h-[128px] mt-[53px] font-poppins
        text-[48px] font-semibold leading-[60px] lg:text-left text-center 
        text-[#091156] z-[1]"
            >
              Clinic & beauty consultant
            </p>
            <p
              className="max-w-[474px] w-full h-[54px] m-0 sm:pt-0 pt-3 font-poppins
        text-[16px] font-medium leading-[24px] tracking-[0.1em] lg:text-left text-center
        text-[#091156] z-[1]"
            >
              It is a long established fact that a reader will be <br />
              by the readable content of a page.
            </p>
            <div className="max-w-[474px] max-h-[58.36px] h-full flex lg:mx-0 mx-auto">
              <button
                className="inline-block relative w-[200px] h-[58.36px]
        mt-[28px] shadow-[0px_17px_22px_#FFEDF6] bg-none border-none
        p-0 cursor-none items-center z-[1]"
              >
                <img src={MoreDetailsButton1} alt="" />
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2
          max-w-[120px] w-full h-[26.94px] top-1/2 left-1/2 font-poppins text-[16px]
          font-semibold leading-[24px] tracking-[0.1em] items-center text-white"
                >
                  <p className="m-0">More Details</p>
                </div>
              </button>
            </div>
          </div>
          {/* Right side image */}
          <div className="relative max-w-[601.5px] max-h-[397.5px] lg:w-full lg:h-full lg:py-0 py-14 lg:px-0 md:px-6 sm:px-4 z-[1]">
            <img src={Frame1} alt="" />
          </div>
        </div>

        {/* Slide Button */}
        <div className="relative max-w-[71px] max-h-[8.15px] lg:pt-[136.35px] w-full mx-auto pt-14">
          <img src={SlideButton} alt="" />
        </div>
      </div>

      <div className="absolute max-w-[1266.42px] max-h-[743px] top-[-104px] left-[-35.5px] z-[0]">
        <img src={SlideBackground} alt="" />
      </div>
    </div>
  );
};
export default MainSlider;
