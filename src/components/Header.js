import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import MainLogo from "../assets/images1/MainLogo.svg";
import HomePlus from "../assets/images1/HomePlus.svg";
import ContactButton from "../assets/images/ContactButton.png";
import DropDownResButton from "../assets/images1/DropdownHeaderRes.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className="relative flex pt-[41px] md:justify-between lg:justify-between max-w-[1140px] lg:px-0 md:px-6 px-4
       mx-auto z-[2] lg:flex w-full "
      >
        {/* Main Logo */}
        <button className="relative md:flex w-[258px] h-[63px] bg-none border-none p-0 m-0 cursor-pointer">
          <img className="absolute top-0 left-[-4px]" src={MainLogo} alt="" />
        </button>

        {/* Dropdown button for smaller screens */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-2"
            aria-expanded={isMenuOpen}
          >
            <img src={DropDownResButton} alt="Dropdown Menu" />
          </button>
        </div>
        {/* Overlay hover when clicking */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[1]" />
        )}

        {/* Conbine menu bar contact button */}
        <div className="flex">
          {/* Menu Bar */}
          {/* <div className="flex items-center w-[481px] h-[25px] mt-[17px] ml-[191px] z-10"> */}
          <div
            ref={dropdownRef}
            className={`absolute md:relative top-full right-0 md:top-auto items-center
          ${isMenuOpen ? "block" : "hidden"}
          space-y-8 md:space-y-0
          md:flex md:items-center
          bg-white md:w-auto
          md:bg-transparent
          py-4 md:py-0
          shadow-lg md:shadow-none
          z-20`}
          >
            <button className="flex relative lg:w-full md:w-3/4 max-w-[66px] items-center bg-none border-none p-0 cursor-pointer">
              <img
                className="w-full h-full object-contain"
                src={HomePlus}
                alt=""
              />
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[55px] h-[24px] lg:ml-[45px] md:ml-[20px] font-poppins
                           text-[16px] font-medium leading-[24px] tracking-[0.1em]
                          text-left bg-none border-none p-0 cursor-pointer 
                           items-center text-[#8B8B8B] "
            >
              <p className="m-0">About</p>
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[69px] h-[24px] lg:ml-[45px] md:ml-[20px] font-poppins
        text-[16px] font-medium leading-[24px] tracking-[0.1em]
        items-center text-left bg-none border-none p-0 cursor-pointer text-[#8B8B8B]  
        "
            >
              <p className="m-0">Service</p>
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[67px] h-[24px] lg:ml-[46px] md:ml-[21px] font-poppins
        text-[16px] font-medium leading-[24px] tracking-[0.1em]
        items-center text-left bg-none border-none p-0 cursor-pointer text-[#8B8B8B]
        "
            >
              <p className="m-0">Gallery</p>
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[41px] h-[24px] lg:ml-[47px] md:ml-[22px] font-poppins
          text-[16px] font-medium leading-[24px] tracking-[0.1em]
          items-center text-left bg-none border-none p-0 cursor-none text-[#8B8B8B]
        "
            >
              <p className="m-0">Blog</p>
            </button>
            {/* Contact Button */}
            <button
              className="max-w-[158px] md:flex lg:w-full md:w-1/2 max-h-[52px] lg:h-full md:h-2/3 ml-auto lg:ml-[52px] md:ml-[14px] md:justify-start bg-none
      border-none p-0 cursor-pointer items-center z-10
      "
            >
              <img src={ContactButton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
