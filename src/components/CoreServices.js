import React from "react";
import "../App.css";
import Animation1 from "../assets/images/Animation1.png";
import Animation2 from "../assets/images/Animation2.png";
import Animation3 from "../assets/images/Animation3.png";

const CoreServices = () => {
  return (
    <div className="flex mt-[139.15px] lg:px-0 md:px-6 px-4">
      <div className="flex flex-col max-w-[1140px] lg:w-full mx-auto items-center">
        <div className="flex flex-col max-w-[1140px] w-full h-full mx-auto">
          {/* Upper box for tiltle */}
          <div
            className="flex flex-col max-w-[848px] max-h-[192px] lg:w-full
      mx-auto text-center justify-center items-center"
          >
            <div
              className="max-w-[113px] max-h-[20px] lg:w-full lg:h-full mt-0 font-poppins mx-auto
        text-[16px] font-semibold leading-[20px] text-[#FF64AE]"
            >
              <p className="m-0">Main Services</p>
            </div>
            <div
              className="max-w-[732px] max-h-[97px] lg:w-full lg:h-full mt-[12px] mx-auto
        font-poppins text-[36px] font-semibold leading-[45px] text-[#091156]"
            >
              <p className="m-0">
                Learn services to focus
                <br />
                on your beauty
              </p>
            </div>
            <div
              className="max-w-[848px] max-h-[51px] lg:w-full lg:h-full sm:mt-[20.15px] mt-3 font-poppins mx-auto
        text-[16px] font-normal leading-[24px] tracking-[0.1em] text-[#8B8B8B]"
            >
              <p className="m-0">
                Porta rhoncus orci condimentum vitae lobortis eu dignissim non
                massa. Non parturient
                <br />
                amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
              </p>
            </div>
          </div>

          {/* Lower box for section part */}
          <div
            className="flex flex-wrap lg:w-full md:mt-[82px] sm:mt-[62px] mt-24
         justify-center lg:gap-[55px] sm:gap-14 gap-10 items-start mx-auto lg:px-0 md:px-1"
          >
            {/* Left Section */}
            <div
              className="flex flex-col max-w-[343px] h-[458px] lg:w-full md:w-3/4 rounded-[42px] pt-[59px] px-[34px]
        bg-white items-center shadow-[0px_25px_50px_25px_#F6F7FF]"
            >
              <div className="max-w-[166px] max-h-[166px] lg:w-full lg:h-full md:w-3/4 items-center">
                <img
                  className="w-full h-full object-contain"
                  src={Animation1}
                  alt=""
                />
              </div>
              <div
                className=" max-w-[263px] max-h-[37px] lg:w-full lg:h-full md:w-3/4 mt-[58px]
          font-poppins text-[18px] font-semibold leading-[22.5px]
          text-center text-[#091156]"
              >
                <p className="m-0">Beauty consultation</p>
              </div>
              <div
                className="max-w-[274px] w-full h-[80px] mt-[6px] font-poppins text-[14px] leading-[21px] tracking-widest
              text-center text-[#8B8B8B] z-[1]"
              >
                <p>
                  Non parturient amet, feugiat
                  <br />
                  tellus sagittis, scelerisque eget
                  <br />
                  nulla turpis.
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div
              className="flex flex-col max-w-[343px] h-[458px] lg:w-full md:w-3/4 rounded-[42px] pt-[59px] px-[34px]
        items-center bg-white shadow-[0px_25px_50px_25px_#F6F7FF] z-[1]"
            >
              <div className="max-w-[166px] max-h-[166px] lg:w-full lg:h-full md:w-3/4 items-center">
                <img
                  className="w-full h-full object-contain"
                  src={Animation2}
                  alt=""
                />
              </div>
              <div
                className=" max-w-[263px] max-h-[37px] lg:w-full lg:h-full md:w-3/4 mt-[58px] font-poppins
          text-[18px] font-semibold leading-[22.5px] text-center text-[#091156]"
              >
                <p className="m-0">Skin treatments</p>
              </div>
              <div
                className="max-w-[274px] w-full h-[80px] mt-[6px] mb-[52px] font-poppins text-[14px] leading-[21px] tracking-widest
              text-center text-[#8B8B8B] z-[1]"
              >
                <p>
                  Non parturient amet, feugiat
                  <br />
                  tellus sagittis, scelerisque eget
                  <br />
                  nulla turpis.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div
              className="flex flex-col max-w-[343px] h-[458px] lg:w-full md:w-3/4 rounded-[42px] pt-[59px] px-[34px]
        items-center shadow-[0px_25px_50px_25px_#F6F7FF z-[1] bg-[#FFFFFF]"
            >
              <div className="max-w-[166px] max-h-[166px] lg:w-full lg:h-full md:w-3/4 items-center z-10">
                <img
                  className="w-full h-full object-contain"
                  src={Animation3}
                  alt=""
                />
              </div>
              <div
                className=" max-w-[263px] max-h-[37px] lg:w-full lg:h-full md:w-3/4 mt-[58px] font-poppins
          text-[18px] font-semibold leading-[22.5px] text-center text-[#091156] z-10"
              >
                <p className="m-0">Beauty product</p>
              </div>
              <div
                className="max-w-[274px] w-full h-[80px] mt-[6px] mb-[52px] font-poppins text-[14px] leading-[21px] tracking-widest
              text-center text-[#8B8B8B] z-[1]"
              >
                <p>
                  Non parturient amet, feugiat
                  <br />
                  tellus sagittis, scelerisque eget
                  <br />
                  nulla turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoreServices;
