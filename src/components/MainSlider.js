import React from "react";
import "../App.css";
import MoreDetailsButton1 from "../assets/images1/MoreDetailsButton1.svg";
import Fram1 from "../assets/images/Frame1.png";
import SlideButton from "../assets/images/SlideButton.png";

const MainSlider = () => {
  return (
    <div className="main-slider">
      <div className="left-main-slider">
        <p className="char-clinic">Clinic & beauty consultant</p>
        <p className="char-establish">
          It is a long established fact that a reader will be <br />
          by the readable content of a page.
        </p>
        <button className="more-details-button">
          <img src={MoreDetailsButton1} alt="" />
          <div className="char-more-details-button">
            <p>More Details</p>
          </div>
        </button>
      </div>

      <div className="right-main-slider">
        <div className="frame1">
          <img src={Fram1} alt="" />
        </div>
      </div>
      <div className="side-button">
        <img src={SlideButton} alt="" />
      </div>
    </div>
  );
};
export default MainSlider;
