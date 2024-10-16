import React from "react";
import "../App.css";
import FooterBackGround from "../assets/images/FooterBackGround.png";
import BottomBackGround from "../assets/images/BottomBackGround.png";
import FooterLogo from "../assets/images/FooterLogo.png";
import HomeFooter from "../assets/images/HomeFooter.png";
import AboutFooter from "../assets/images/AboutFooter.png";
import ServicesFooter from "../assets/images/ServicesFooter.png";
import PortfolioFooter from "../assets/images/PortfolioFooter.png";
import TeamFooter from "../assets/images/TeamFooter.png";
import TermsConditionFooter from "../assets/images/TermsConditionFooter.png";
import PrivacyFooter from "../assets/images/PrivacyFooter.png";
import CareersFooter from "../assets/images/CareersFooter.png";
import ContactFooter from "../assets/images/ContactFooter.png";
import FacebookFooter from "../assets/images/FacebookFooter.png";
import TwitterFooter from "../assets/images/TwitterFooter.png";
import LinkedinFooter from "../assets/images/LinkedinFooter.png";
import YoutubeFooter from "../assets/images/YoutubeFooter.png";
import InstagramFooter from "../assets/images/InstagramFooter.png";
import ToTopButton from "../assets/images/ToTopButton.png";

const Footer = () => {
  return (
    <div className="flex flex-col relative w-[1440px] h-[705.34px] mt-[69.66px]">
      <div className="relative w-[1440px] h-[705.34px]">
        <div className="absolute w-[1440px] h-[705.34px] left-0 z-0">
          <img src={FooterBackGround} alt="Footer background" />
        </div>
        <div className="absolute w-[1440px] h-[125px] top-[580.34px] z-[-1]">
          <img src={BottomBackGround} alt="Bottom background" />
        </div>

        <div className="flex relative w-[1140px] h-[219px] mt-[225.34px] ml-[150px]">
          <div className="flex flex-col relative w-[492px] h-[191px] mt-[16px] z-10">
            <div className="w-[258px] h-[63px]">
              <img src={FooterLogo} alt="" />
            </div>
            <div className="flex relative w-[461px] h-[21px] mt-[33px] ml-[31px]">
              <div
                className="relative font-poppins text-[16px] font-bold
              leading-[24px] tracking-[0.1em] text-left text-[#D7DBFF]"
              >
                <p className="m-0">Beautice</p>
              </div>
              <div
                className="relative ml-[5px] font-poppins text-[16px] font-normal
              leading-[24px] tracking-[0.1em] text-left text-[#D7DBFF]"
              >
                <p className="m-0">is a Beauty Clinic WordPress Theme.</p>
              </div>
            </div>
            <div
              className="relative w-[297px] h-[24px] mt-[26px] ml-[32px] font-poppins
            text-[14px] italic font-medium leading-[21px] tracking-[0.1em]
            text-left text-[#D7DBFF]"
            >
              <p className="m-0">Baker Steet 101, NY, United States.</p>
            </div>
            <div className="char-contact-info">
              <div className="char-phone-footer">
                <p>+521 569 8966.</p>
              </div>
              <div className="char-mail-footer">
                <p>mail@company.com.</p>
              </div>
            </div>
          </div>

          <div className="sidebar2">
            <div className="char-pages-footer">
              <p>Pages</p>
            </div>
            <button className="home-footer-button">
              <img src={HomeFooter} alt="" />
            </button>
            <button className="about-footer-button">
              <img src={AboutFooter} alt="" />
            </button>
            <button className="about-services-button">
              <img src={ServicesFooter} alt="" />
            </button>
            <button className="about-gallery-button">
              <img src={PortfolioFooter} alt="" />
            </button>
            <button className="about-team-button">
              <img src={TeamFooter} alt="" />
            </button>
          </div>

          <div className="sidebar3">
            <div className="char-informations-footer">
              <p>Informations</p>
            </div>
            <button className="home-terms-condition-button">
              <img src={TermsConditionFooter} alt="" />
            </button>
            <button className="privacy-policy-button">
              <img src={PrivacyFooter} alt="" />
            </button>
            <button className="blog-footer-button">
              <img src={CareersFooter} alt="" />
            </button>
            <button className="contact-footer-button">
              <img src={ContactFooter} alt="" />
            </button>
          </div>
        </div>

        <div className="lower-part-footer">
          <div className="social-media-footer-bar">
            <div className="facebook-footer">
              <img src={FacebookFooter} alt="" />
            </div>
            <div className="twitter-footer">
              <img src={TwitterFooter} alt="" />
            </div>
            <div className="linkedin-footer">
              <img src={LinkedinFooter} alt="" />
            </div>
            <div className="youtube-footer">
              <img src={YoutubeFooter} alt="" />
            </div>
            <div className="instagram-footer">
              <img src={InstagramFooter} alt="" />
            </div>
          </div>

          <div className="alt-desain-footer">
            <p>© AltDesain Studio 2021 - All right reserved.</p>
          </div>
        </div>

        <button className="to-top-button">
          <img src={ToTopButton} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Footer;
