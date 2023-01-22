import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

const AppointmentHero = (props) => {
  //   console.log(props);
  //   let footer = <p>Please pick a day.</p>;
  //   if (props.selected) {
  //     footer = <p>You picked {format(props.selected, "PP")}.</p>;
  //   }
  return (
    <div
      className="hero my-20"
      style={{
        backgroundImage: `url("https://i.ibb.co/0rF14f4/bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2">
          <DayPicker
            mode="single"
            // footer={footer}
            selected={props.selected}
            onSelect={props.setSelected}
          />
        </div>
        <img
          src={require("../../images/chair.png")}
          className="w-96 md:w-1/2 rounded-lg"
          alt="heroImage"
        />
      </div>
    </div>
  );
};

export default AppointmentHero;
