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
    <div className="professional-team">
      <div className="title-desc-team">
        <div className="char-professional-teams">
          <p>Professional Teams</p>
        </div>
        <div className="char-professional-expert">
          <p>The Professional expert</p>
        </div>
        <div className="char-espanol-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
      </div>

      <div className="box-section-1">
        <div className="section-left-1">
          <div className="animation-4">
            <img src={BriyanNavalli} alt="" />
          </div>
          <div className="char-surgeon">
            <p>Surgeon</p>
          </div>
          <div className="char-briyan-nevalli">
            <p>Briyan Nevalli</p>
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

        <div className="box-background-bella">
          <div className="section-mid-1">
            <div className="animation-5">
              <img src={BellaSeb} alt="" />
            </div>
            <div className="char-dermatologist">
              <p>Dermatologist</p>
            </div>
            <div className="char-bella-sebastian">
              <p>Bella sebastian</p>
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

        <div className="section-right-1">
          <div className="animation-6">
            <img src={LillyAdams} alt="" />
          </div>
          <div className="char-stylist-expert">
            <p>Stylist expert</p>
          </div>
          <div className="char-lilly-adams">
            <p>Lilly Adams</p>
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
