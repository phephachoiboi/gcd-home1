import React from "react";
import "../App.css";
import Vector from "../assets/images1/Vector.jpg";
import WatchVideoButton from "../assets/images/WatchVideoButton.png";
import unplash from "../assets/images1/unplash.svg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="left-about-us-desc">
        <div className="char-about-us">
          <p>About Us</p>
        </div>
        <div className="char-slogan-about-us">
          <p>We are the best beauty clinic</p>
        </div>
        <div className="char-espanol-about-us">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
            <br />
            <br />
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </p>
        </div>
        <div className="combine-button-about-us">
          <button className="learn-more-button" type="button">
            <img src={Vector} alt="" />
            <p className="char-learn-more-button">Learn More</p>
          </button>
          <button className="watch-video-button" type="button">
            <img src={WatchVideoButton} alt="" />
          </button>
        </div>
      </div>
      <div className="right-about-us-picture">
        <img src={unplash} alt="" />
      </div>
    </div>
  );
};
export default AboutUs;
