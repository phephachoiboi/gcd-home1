import React from "react";
import "../App.css";
import MainLogo from "../assets/images1/MainLogo.svg";
import HomePlus from "../assets/images1/HomePlus.svg";
import ContactButton from "../assets/images/ContactButton.png";

const Header = () => {
  return (
    <div className="relative flex pt-[41px] pl-[150px] z-10">
      <button className="relative w-[258px] h-[63px] bg-none border-none p-0 m-0 cursor-pointer">
        <img className="absolute top-0 left-[-4px]" src={MainLogo} alt="" />
      </button>
      <div className="flex items-center w-[481px] h-[25px] mt-[17px] ml-[191px] z-10">
        <button className="flex items-center bg-none border-none p-0 cursor-pointer">
          <img src={HomePlus} alt="" />
        </button>
        <button
          className="flex w-[55px] h-[24px] ml-[45px] font-poppins
                           text-[16px] font-medium leading-[24px] tracking-[0.1em]
                          text-left bg-none border-none p-0 cursor-pointer 
                           items-center text-[#8B8B8B] "
        >
          <p className="m-0">About</p>
        </button>
        <button
          className="flex w-[69px] h-[24px] ml-[45px] font-poppins
        text-[16px] font-medium leading-[24px] tracking-[0.1em]
        text-left bg-none border-none p-0 cursor-pointer text-[#8B8B8B]  
        "
        >
          <p className="m-0">Service</p>
        </button>
        <button
          className="flex w-[67px] h-[24px] ml-[46px] font-poppins
        text-[16px] font-medium leading-[24px] tracking-[0.1em]
        text-left bg-none border-none p-0 cursor-pointer text-[#8B8B8B]
        "
        >
          <p className="m-0">Gallery</p>
        </button>
        <button
          className="flex w-[41px] h-[24px] ml-[47px] font-poppins
          text-[16px] font-medium leading-[24px] tracking-[0.1em]
          text-left bg-none border-none p-0 cursor-none text-[#8B8B8B]
        "
        >
          <p className="m-0">Blog</p>
        </button>
      </div>
      <button
        className="w-[158px] h-[52px] mt-[4px] ml-[52px] bg-none
      border-none p-0 cursor-pointer items-center z-10
      "
      >
        <img
          className="w-full h-full object-contain"
          src={ContactButton}
          alt=""
        />
      </button>
    </div>
  );
};
export default Header;
