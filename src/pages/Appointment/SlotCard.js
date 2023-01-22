// import { format } from "date-fns";
// import { el } from "date-fns/locale";
import React, { useEffect, useRef } from "react";
// import AppointmentModal from "../../components/AppointmentModal";
// import LinkButton from "../../components/LinkButton";

const SlotCard = ({ option, setTreatment, setMySlot }) => {
  // console.log(format(selected, "PP"));
  const { name, slots, _id } = option;
  const bookingButton = useRef();
  const bookSlotSection = useRef();
  useEffect(() => {
    // console.log(bookingButton.current);
    // console.log(bookSlotSection.current.value);
  }, []);
  return (
    <div className="text-center shadow-lg p-6 rounded max-w-xs bg-white">
      <p className="text-xl text-[#19D3AE]">{name}</p>
      <select
        className="select max-w-xs select-bordered select-sm my-2"
        required
        onClick={(event) => {
          setMySlot(event.target.value);
        }}
      >
        <option ref={bookSlotSection} disabled selected className="text-center">
          Book Your Slot
        </option>
        {slots.map((slot) => (
          <option name="bookingSlot">{slot}</option>
        ))}
      </select>
      <p className="mb-5">
        {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available
      </p>
      <label
        id="bookingButton"
        ref={bookingButton}
        onClick={() => {
          setTreatment(option);
        }}
        htmlFor="my-modal"
        className="bg-gradient-to-r from-[#19C0D3] to-[#0FCFEC] w-28 h-14 px-4 py-3 text-white text-sm rounded"
      >
        Book Appointment
      </label>
    </div>
  );
};

export default SlotCard;
