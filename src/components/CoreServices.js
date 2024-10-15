import React from "react";
import "../App.css";
import Animation1 from "../assets/images/Animation1.png";
import Animation2 from "../assets/images/Animation2.png";
import Animation3 from "../assets/images/Animation3.png";

const CoreServices = () => {
  return (
    <div className="core-services">
      <div className="title-desc">
        <div className="char-main-services">
          <p>Main Services</p>
        </div>
        <div className="char-learn-services">
          <p>
            Learn services to focus
            <br />
            on your beauty
          </p>
        </div>
        <div className="char-espanol">
          <p>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient
            <br />
            amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
          </p>
        </div>
      </div>

      <div className="box-section">
        <div className="section-left">
          <div className="animation-1">
            <img src={Animation1} alt="" />
          </div>
          <div className="char-beauty-consultation">
            <p>Beauty consultation</p>
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

        <div className="section-mid">
          <div className="animation-2">
            <img src={Animation2} alt="" />
          </div>
          <div className="char-skin-treatments">
            <p>Skin treatments</p>
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

        <div className="section-right">
          <div className="animation-3">
            <img src={Animation3} alt="" />
          </div>
          <div className="char-beauty-product">
            <p>Beauty product</p>
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
