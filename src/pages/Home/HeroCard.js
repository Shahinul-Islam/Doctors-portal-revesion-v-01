import React from "react";
import clock from "../../icons/clock.svg";
import marker from "../../icons/marker.svg";
import phone from "../../icons/phone.svg";

const HeroCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-9 place-items-center p-2">
      <div
        className="card bg-gradient-to-r from-[#19C0D3] to-[#0FCFEC] text-primary-content"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body flex lg:flex-row items-center gap-4">
          <div>
            <img src={clock} alt="clock" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-xl">Opening Hours</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
      </div>
      <div
        className="card w-full lg:pr-8 bg-[#3A4256] text-primary-content"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body flex lg:flex-row items-center gap-4">
          <div>
            <img src={marker} alt="clock" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-xl">Visit our location</h2>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
      </div>
      <div
        className="card lg:pr-28 w-full bg-gradient-to-r from-[#19C0D3] to-[#0FCFEC] text-primary-content"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-body flex lg:flex-row items-center gap-4">
          <div>
            <img src={phone} alt="clock" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-xl">Contact us now</h2>
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
