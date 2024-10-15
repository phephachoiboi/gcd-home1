import React from "react";
import "../App.css";
import SlideBackground from "../assets/images/SlideBackground.png";
import BackgroundBubble from "../assets/images/BackgroundBubble.png";
import BackgroundBubbleContactUs from "../assets/images/BackgroundBubbleContactUs.png";

const BackgroundBubbleCombine = () => {
  return (
    <div className="background-bubble-combine">
      <div className="slide-background">
        <img src={SlideBackground} alt="" />
      </div>
      <div className="background-bubble">
        <img src={BackgroundBubble} alt="" />
      </div>
      <div className="background-bubble-contact-us">
        <img src={BackgroundBubbleContactUs} alt="" />
      </div>
    </div>
  );
};
export default BackgroundBubbleCombine;
