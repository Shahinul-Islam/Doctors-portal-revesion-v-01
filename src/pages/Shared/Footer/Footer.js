import React from "react";
import footerBg from "../../../images/footer.png";

const Footer = () => {
  return (
    <div
      className=" p-4 bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <footer className="md:flex gap-4 justify-evenly items-center text-[#3A4256]">
        <div className="flex flex-col my-2">
          <span className="footer-title">Services</span>
          <a className="text-[#3A4256]">Emergency Checkup</a>
          <a className="text-[#3A4256]">Monthly Checkup</a>
          <a className="text-[#3A4256]">Weekly Checkup</a>
          <a className="text-[#3A4256]">Deep Checkup</a>
        </div>

        <div className="flex flex-col my-2">
          <span className="footer-title">ORAL HEALTH</span>
          <a className="text-[#3A4256]">Fluoride Treatment</a>
          <a className="text-[#3A4256]">Cavity Filling</a>
          <a className="text-[#3A4256]">Teath Whitening</a>
        </div>

        <div className="flex flex-col my-2">
          <span className="footer-title">Our Address</span>
          <address className="text-[#3A4256]">New York - 101010 Hudson</address>
        </div>
      </footer>
      <div className="text-center mt-10">
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
