import React, { useState } from "react";
// import AppointmentModal from "../../components/AppointmentModal";
import AppointmentHero from "./AppointmentHero";
import AppointmentSlots from "./AppointmentSlots";
import AvailableDateDiv from "./AvailableDateDiv";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  // console.log(selected);
  return (
    <div>
      <AppointmentHero
        setSelected={setSelected}
        selected={selected}
      ></AppointmentHero>
      <AvailableDateDiv selected={selected}></AvailableDateDiv>
      <AppointmentSlots selected={selected}></AppointmentSlots>
    </div>
  );
};

export default Appointment;
