import React from "react";
import "../App.css";
import MainLogo from "../assets/images1/MainLogo.svg";
import HomePlus from "../assets/images1/HomePlus.svg";
import ContactButton from "../assets/images/ContactButton.png";

const Header = () => {
  return (
    <div className="site-header">
      <button className="main-logo">
        <img src={MainLogo} alt="" />
      </button>
      <div className="main-menu">
        <button className="home-plus">
          <img src={HomePlus} alt="" />
        </button>
        <button className="char-about">
          <p>About</p>
        </button>
        <button className="char-service">
          <p>Service</p>
        </button>
        <button className="char-gallery">
          <p>Gallery</p>
        </button>
        <button className="char-blog">
          <p>Blog</p>
        </button>
      </div>
      <button className="contact-button">
        <img src={ContactButton} alt="" />
      </button>
    </div>
  );
};
export default Header;
