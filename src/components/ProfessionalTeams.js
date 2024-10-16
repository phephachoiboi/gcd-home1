import React from "react";
import "../App.css";
import BriyanNavalli from "../assets/images/BriyanNavalli.png";
import BellaSeb from "../assets/images/BellaSeb.png";
import LillyAdams from "../assets/images/LillyAdams.png";
import Twitter from "../assets/images1/Twitter.svg";
import Facebook from "../assets/images1/Facebook.svg";
import Instagram from "../assets/images1/Instagram.svg";

const ProfessionalTeams = () => {
  return (
    <div
      className="flex flex-col relative w-[1085px] h-[861px]
    top-[-220.89px] left-[178px] items-center"
    >
      <div
        className="flex flex-col relative w-[848px] h-[148px]
      text-center items-center"
      >
        <div
          className="relative w-[160px] h-[20px] mt-0 p-0 font-poppins
        text-[16px] font-semibold leading-[20px] text-center text-[#FF64AE]"
        >
          <p className="m-0">Professional Teams</p>
        </div>
        <div
          className="relative w-[732px] h-[53px] mt-[12px] font-poppins
        text-[36px] font-semibold leading-[45px] text-center text-[#091156]"
        >
          <p className="m-0">The Professional expert</p>
        </div>
        <div
          className="relative w-[848px] h-[51px] mt-[12px] font-poppins
        text-[16px] font-normal leading-[24px] tracking-[0.1em] text-[#8B8B8B]"
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
      </div>

      <div
        className="flex relative w-[1085px] h-[626px] mt-[87px]
      justify-between"
      >
        <div
          className="flex flex-col relative w-[270px] h-[439px]
        mt-[91px] items-center"
        >
          <div className="relative w-[146px] h-[146px]">
            <img
              className="w-full h-full object-contain"
              src={BriyanNavalli}
              alt=""
            />
          </div>
          <div
            className="relative w-[69px] h-[20px] mt-[53px] font-poppins
          text-[16px] font-semibold leading-[20px] text-[#FF64AE]"
          >
            <p className="m-0">Surgeon</p>
          </div>
          <div
            className="relative w-[263px] h-[37px] mt-[15px] font-poppins
          text-[18px] font-semibold leading-[22.5px] text-center text-[#091156]"
          >
            <p className="m-0">Briyan Nevalli</p>
          </div>
          <div className="char-espanol-3">
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit ut <br />
              aliquam, purus sit
              <br />
            </p>
          </div>
          <div className="social-media">
            <div className="twitter">
              <img src={Twitter} alt="" />
            </div>
            <div className="facebook">
              <img src={Facebook} alt="" />
            </div>
            <div className="instagram">
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>

        <div
          className="flex w-[424px] h-[626px] rounded-[42px]
        shadow-[0px_25px_50px_25px_#F6F7FF bg-white justify-center"
        >
          <div
            className="flex flex-col relative w-[270px] h-[439px]
          mt-[91px] items-center"
          >
            <div className="relative w-[146px] h-[146px]">
              <img className="m-0" src={BellaSeb} alt="" />
            </div>
            <div
              className="relative w-[117px] h-[20px] mt-[53px] font-poppins
            text-[16px] font-semibold leading-[20px] text-[#FF64AE]"
            >
              <p className="m-0">Dermatologist</p>
            </div>
            <div
              className="relative w-[263px] h-[37px] mt-[15px] font-poppins
            text-[18px] font-semibold leading-[22.5px] text-center text-[#091156]"
            >
              <p className="m-0">Bella sebastian</p>
            </div>
            <div className="char-espanol-3">
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit ut <br />
                aliquam, purus sit
                <br />
              </p>
            </div>
            <div className="social-media">
              <div className="twitter">
                <img src={Twitter} alt="" />
              </div>
              <div className="facebook">
                <img src={Facebook} alt="" />
              </div>
              <div className="instagram">
                <img src={Instagram} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col relative w-[270px] h-[439px] mt-[91px]
        items-center"
        >
          <div className="relative w-[146px] h-[146px]">
            <img
              className="w-full h-full object-contain"
              src={LillyAdams}
              alt=""
            />
          </div>
          <div
            className="relative w-[106px] h-[20px] mt-[53px] font-poppins
          text-[16px] font-semibold leading-[20px] text-[#FF64AE]"
          >
            <p className="m-0">Stylist expert</p>
          </div>
          <div
            className="relative w-[263px] h-[37px] mt-[15px] font-poppins text-[18px]
          font-semibold leading-[22.5px] text-center text-[#091156]"
          >
            <p className="m-0">Lilly Adams</p>
          </div>
          <div className="char-espanol-3">
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit ut <br />
              aliquam, purus sit
              <br />
            </p>
          </div>
          <div className="social-media">
            <div className="twitter">
              <img src={Twitter} alt="" />
            </div>
            <div className="facebook">
              <img src={Facebook} alt="" />
            </div>
            <div className="instagram">
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfessionalTeams;
