import React from "react";
import "../App.css";
import Vector from "../assets/images1/Vector.jpg";
import WatchVideoButton from "../assets/images/WatchVideoButton.png";
import unplash from "../assets/images1/unplash.svg";
import BackgroundBubble from "../assets/images/BackgroundBubble.png";

const AboutUs = () => {
  return (
    <div className="flex mt-[134.44px] lg:px-0 md:px-6 px-4">
      <div
        className="flex max-w-[1440px]  w-full h-auto mx-auto items-center
      lg:px-[150px] px-4"
      >
        <div className="flex lg:flex-row flex-col max-w-[1440px] w-full h-full mx-auto items-center">
          {/* Left side text */}
          <div className="flex flex-col max-w-[664px] max-h-[399.36px] lg:w-full h-full lg:items-start items-center lg:px-0 md:px-6 px-4 z-[1]">
            <div
              className="max-w-[73px] w-full h-[20px] font-poppins lg:text-[16px] text-[12px] lg:text-left text-center lg:px-0 px-2
        font-semibold leading-[20px] text-[#FF64AE]"
            >
              <p className="m-0">About Us</p>
            </div>
            <div
              className="relative max-w-[664px] w-full h-[52px] mt-[12px] ml-[1px] lg:text-left text-center lg:px-0 px-2
        font-poppins lg:text-[36px] text-[28px] font-semibold leading-[45px] text-[#091156]"
            >
              <p className="m-0">We are the best beauty clinic</p>
            </div>
            <div
              className="relative max-w-[483px] w-full h-[196px] lg:mt-[12px] mt-9 font-poppins lg:text-left text-center lg:px-0 px-2
        lg:text-[16px] text-[12px] font-normal leading-[24px] tracking-[0.1em] 
        text-[#8B8B8B]"
            >
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
                <br />
                <br />
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </p>
            </div>
            <div className="flex lg:flex-row flex-col relative max-w-[457px] h-[58.36px] mt-[49px] w-full items-center">
              <button
                className="inline-block relative max-w-[200px] lg:w-full h-[58.36px]
          items-center justify-center text-center bg-none border-none
          lg:p-0 px-3 cursor-pointer rounded-tl-[50px]"
                type="button"
              >
                <img
                  className="w-full h-full object-contain"
                  src={Vector}
                  alt=""
                />
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
                className="flex max-w-[213px] w-full h-[49px] ml-[44px] mt-[5px]
          bg-none border-none lg:p-0 px-3 cursor-pointer items-center"
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

          {/* Right side picture */}
          <div className=" max-w-[476px] w-full h-[350px] mt-[44.56px] lg:px-0 px-4 z-[1]">
            <img
              className="w-full h-full object-contain"
              src={unplash}
              alt=""
            />
          </div>
        </div>

        {/* Background Bubble */}
        {/* <div className="absolute max-w-[948.15px] h-[1028.89px] w-full ml-[343px] lg:px-0 mx-auto z-[0]">
          <img src={BackgroundBubble} alt="" />
        </div> */}
      </div>
    </div>
  );
};
export default AboutUs;
