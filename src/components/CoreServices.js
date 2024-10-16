import React from "react";
import "../App.css";
import Animation1 from "../assets/images/Animation1.png";
import Animation2 from "../assets/images/Animation2.png";
import Animation3 from "../assets/images/Animation3.png";

const CoreServices = () => {
  return (
    <div
      className="flex flex-col relative w-[1140px] h-[732px]
       top-[131px] left-[150px]"
    >
      <div
        className="flex flex-col w-[848px] h-[192px] ml-[146px]
      text-center justify-center items-center"
      >
        <div
          className="w-[113px] h-[20px] mt-0 font-poppins
        text-[16px] font-semibold leading-[20px] text-[#FF64AE]"
        >
          <p className="m-0">Main Services</p>
        </div>
        <div
          className="w-[732px] h-[97px] mt-[12px] mb-0
        font-poppins text-[36px] font-semibold leading-[45px] text-[#091156]"
        >
          <p className="m-0">
            Learn services to focus
            <br />
            on your beauty
          </p>
        </div>
        <div
          className="w-[848px] h-[51px] mt-[12px] font-poppins
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

      <div className="flex relative top-[82px] w-[1140px] h-[458px] justify-between">
        <div
          className="flex flex-col w-[343px] h-[458px] rounded-[42px]
        bg-white items-center shadow-[0px_25px_50px_25px_#F6F7FF]"
        >
          <div className="w-[166px] h-[166px] mt-[59px] items-center">
            <img
              className="w-full h-full object-contain"
              src={Animation1}
              alt=""
            />
          </div>
          <div
            className="relative w-[263px] h-[37px] mt-[58px]
          font-poppins text-[18px] font-semibold leading-[22.5px]
          text-center text-[#091156]"
          >
            <p className="m-0">Beauty consultation</p>
          </div>
          <div className="char-espanol-1">
            <p>
              Non parturient amet, feugiat
              <br />
              tellus sagittis, scelerisque eget
              <br />
              nulla turpis.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col w-[343px] h-[458px] rounded-[42px]
        items-center bg-white shadow-[0px_25px_50px_25px_#F6F7FF] z-10"
        >
          <div className="w-[166px] h-[166px] mt-[59px] items-center">
            <img
              className="w-full h-full object-contain"
              src={Animation2}
              alt=""
            />
          </div>
          <div
            className="relative w-[263px] h-[37px] mt-[58px] font-poppins
          text-[18px] font-semibold leading-[22.5px] text-center text-[#091156]"
          >
            <p className="m-0">Skin treatments</p>
          </div>
          <div className="char-espanol-1">
            <p>
              Non parturient amet, feugiat
              <br />
              tellus sagittis, scelerisque eget
              <br />
              nulla turpis.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col w-[343px] h-[458px] rounded-[42px] 
        items-center shadow-[0px_25px_50px_25px_#F6F7FF z-10 bg-[#FFFFFF]"
        >
          <div className="w-[166px] h-[166px] mt-[59px] items-center z-10">
            <img
              className="w-full h-full object-contain"
              src={Animation3}
              alt=""
            />
          </div>
          <div
            className="relative w-[263px] h-[37px] mt-[58px] font-poppins
          text-[18px] font-semibold leading-[22.5px] text-center text-[#091156] z-10"
          >
            <p className="m-0">Beauty product</p>
          </div>
          <div className="char-espanol-1">
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
  );
};
export default CoreServices;
