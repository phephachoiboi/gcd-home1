import React from "react";
import "../App.css";
import Vector from "../assets/images1/Vector.jpg";
import WatchVideoButton from "../assets/images/WatchVideoButton.png";
import unplash from "../assets/images1/unplash.svg";

const AboutUs = () => {
  return (
    <div
      className="flex relative w-[1291.15px] h-[1028.89px] 
    top-[-88px] left-[150px] overflow-hidden"
    >
      <div className="flex flex-col relative w-[664px] h-[395px] top-[354.44px]">
        <div
          className="w-[73px] h-[20px] font-poppins text-[16px]
        font-semibold leading-[20px] text-left text-[#FF64AE]"
        >
          <p className="m-0">About Us</p>
        </div>
        <div
          className="relative w-[664px] h-[52px] mt-[12px] ml-[1px]
        font-poppins text-[36px] font-semibold leading-[45px] text-[#091156]"
        >
          <p className="m-0">We are the best beauty clinic</p>
        </div>
        <div
          className="relative w-[483px] h-[196px] mt-[12px] font-poppins
        text-[16px] font-normal leading-[24px] tracking-[0.1em] 
        text-left text-[#8B8B8B]"
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
            <br />
            <br />
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </p>
        </div>
        <div className="flex relative w-[457px] h-[58.36px] mt-[49px] items-center">
          <button
            className="inline-block relative w-[200px] h-[58.36px]
          items-center justify-center text-center bg-none border-none
          p-0 cursor-pointer rounded-tl-[50px]"
            type="button"
          >
            <img className="w-full h-full object-contain" src={Vector} alt="" />
            <p
              className="absolute w-[200px] top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2 pointer-events-none
            font-poppins text-[16px] font-semibold leading-[24px]
            tracking-[0.1em] text-center text-[#FFFFFF]"
            >
              Learn More
            </p>
          </button>
          <button
            className="flex w-[213px] h-[49px] ml-[44px] mt-[5px]
          bg-none border-none p-0 cursor-pointer items-center"
            type="button"
          >
            <img
              className="w-full h-full object-contain"
              src={WatchVideoButton}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="relative w-[476px] h-[350px] top-[399px]">
        <img className="w-full h-full object-contain" src={unplash} alt="" />
      </div>
    </div>
  );
};
export default AboutUs;
