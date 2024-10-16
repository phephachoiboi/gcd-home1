import React from "react";
import "../App.css";
import MoreDetailsButton1 from "../assets/images1/MoreDetailsButton1.svg";
import Frame1 from "../assets/images/Frame1.png";
import SlideButton from "../assets/images/SlideButton.png";

const MainSlider = () => {
  return (
    <div className="flex relative w-[1286.5px] h-[701px] border-0 border-[#41487F]">
      <div
        className="flex flex-col relative w-[496px]
       h-[397.5px] top-[159px] left-[189px]"
      >
        <p
          className="w-[430px] h-[128px] mt-[53px] font-poppins
        text-[48px] font-semibold leading-[60px] text-left
        text-[#091156] z-10"
        >
          Clinic & beauty consultant
        </p>
        <p
          className="w-[474px] h-[54px] m-0 font-poppins
        text-[16px] font-medium leading-[24px] tracking-[0.1em] text-left
        text-[#091156] z-10"
        >
          It is a long established fact that a reader will be <br />
          by the readable content of a page.
        </p>
        <button
          className="inline-block relative w-[200px] h-[58.36px]
        mt-[28px] shadow-[0px_17px_22px_#FFEDF6] bg-none border-none
        p-0 cursor-none items-center z-10"
        >
          <img src={MoreDetailsButton1} alt="" />
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2
          w-[120px] h-[26.94px] top-1/2 left-1/2 font-poppins text-[16px]
          font-semibold leading-[24px] tracking-[0.1em] items-center text-white"
          >
            <p className="m-0">More Details</p>
          </div>
        </button>
      </div>

      <div className="relative w-[601.5px] h-[397.5px] top-[157px] left-[189px]">
        <div className="w-full h-full object-contain z-10">
          <img src={Frame1} alt="" />
        </div>
      </div>
      <div className="relative w-[71px] h-[8.15px] top-[692.85px] left-[-412.5px]">
        <img src={SlideButton} alt="" />
      </div>
    </div>
  );
};
export default MainSlider;
