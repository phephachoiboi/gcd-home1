import React from "react";
import "../App.css";
import SlideBackground from "../assets/images/SlideBackground.png";
import BackgroundBubble from "../assets/images/BackgroundBubble.png";
import BackgroundBubbleContactUs from "../assets/images/BackgroundBubbleContactUs.png";

const BackgroundBubbleCombine = () => {
  return (
    <div className="background-bubble-combine">
      <div className="absolute max-w-[1266.42px] max-h-[743px] ">
        <img src={SlideBackground} alt="" />
      </div>
      <div className="absolute max-w-[948.15px] max-h-[1028.89px] mt-[1448px] ml-[493px]">
        <img src={BackgroundBubble} alt="" />
      </div>
      <div className="absolute max-w-[1175.73px] max-h-[929px] mt-[3142px]">
        <img src={BackgroundBubbleContactUs} alt="" />
      </div>
    </div>
  );
};
export default BackgroundBubbleCombine;
