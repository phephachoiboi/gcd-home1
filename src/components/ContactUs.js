import React from "react";
import "../App.css";
import ContactAnimations from "../assets/images/ContactAnimations.png";
import SendMessageButton from "../assets/images1/SendMessageButton.svg";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-animation">
        <img src={ContactAnimations} alt="" />
      </div>
      <div className="contact-us-right-box">
        <div className="title-desc-contact-us">
          <div className="char-contact-us">
            <p>Contact Us</p>
          </div>
          <div className="char-send-inquiry">
            <p>
              Send your inquiry to
              <br />
              our expert team
            </p>
          </div>
          <div className="char-espanol-4">
            <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="name-row">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First name"
                required
              />
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last name"
                required
              />
            </div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
              required
            />
            <input
              type="text"
              id="subjectmessage"
              name="message"
              placeholder="Subject message"
              required
            />
            <div className="inquiry-row">
              <textarea placeholder="Your inquiry here" required></textarea>
            </div>
            <button className="submit-button" type="submit">
              <img src={SendMessageButton} alt="" />
              <div className="char-send-message">
                <p>Send Message</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
