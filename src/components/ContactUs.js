import React from "react";
import "../App.css";
import ContactAnimations from "../assets/images/ContactAnimations.png";
import SendMessageButton from "../assets/images1/SendMessageButton.svg";

const ContactUs = () => {
  return (
    <div
      className="flex relative w-[1290.33px] h-[1072px]
     ml-[0.33px] mt-[-283.89px]"
    >
      <div className="w-[520px] h-[614px] mt-[366px] ml-[150px]">
        <img src={ContactAnimations} alt="" />
      </div>
      <div
        className="flex flex-col relative w-[520px] h-[865px]
      mt-[207px] ml-[100px]"
      >
        <div className="relative w-[497px] h-[169px]">
          <div
            className="w-[90px] h-[20px] font-poppins text-[16px]
          font-semibold leading-[20px] text-[#FF64AE]"
          >
            <p className="m-0">Contact Us</p>
          </div>
          <div
            className="w-[404px] h-[97px] mt-[12px] font-poppins
          text-[36px] font-semibold leading-[45px] text-[#091156]"
          >
            <p className="m-0">
              Send your inquiry to
              <br />
              our expert team
            </p>
          </div>
          <div
            className="w-[497px] h-[28px] mt-[12px] font-poppins
          text-[16px] font-normal leading-[24px] tracking-[0.1em] text-[#8B8B8B]"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet nulla turapis tellus.
            </p>
          </div>
        </div>
        <div className="relative w-[520px] h-[652px] mt-[44px] p-0 border-[#D9DDFE]">
          <form>
            <div className="flex justify-center gap-[30px]">
              <input
                className="border-[1px]"
                type="text"
                id="fname"
                name="firstname"
                placeholder="First name"
                required
              />
              <input
                className="border-[1px]"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last name"
                required
              />
            </div>
            <input
              className="border-[1px]"
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
              required
            />
            <input
              className="border-[1px]"
              type="text"
              id="subjectmessage"
              name="message"
              placeholder="Subject message"
              required
            />
            <div className="h-[239.47px] mb-[54.84px] border-[1px] border-[#D9DDFE] rounded-[15px_15px_15px_15px]">
              <textarea placeholder="Your inquiry here" required></textarea>
            </div>
            <button
              className="inline-block relative w-[248px] h-[58px]
             p-0 m-0 bg-none border-none cursor-pointer rounded-[50px]"
              type="submit"
            >
              <img
                className="block w-full h-full object-contain"
                src={SendMessageButton}
                alt=""
              />
              <div
                className="absolute w-[173px] h-[27px] top-1/2 left-1/2
              transform -translate-x-1/2 -translate-y-1/2 font-poppins
              text-[16px] font-semibold leading-[24px] tracking-[0.1em]
              text-center text-white"
              >
                <p className="m-0">Send Message</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
