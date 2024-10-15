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
    <div className="footer">
      <div className="combine-bottom-background">
        <div className="footer-background">
          <img src={FooterBackGround} alt="Footer background" />
        </div>
        <div className="bottom-background">
          <img src={BottomBackGround} alt="Bottom background" />
        </div>

        <div className="upper-part-footer">
          <div className="sidebar1">
            <div className="footer-logo">
              <img src={FooterLogo} alt="" />
            </div>
            <div className="char-beautice-footer-combination">
              <div className="char-beautice-footer-part1">
                <p>Beautice</p>
              </div>
              <div className="char-beautice-footer-part2">
                <p>is a Beauty Clinic WordPress Theme.</p>
              </div>
            </div>
            <div className="char-baker-footer">
              <p>Baker Steet 101, NY, United States.</p>
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
