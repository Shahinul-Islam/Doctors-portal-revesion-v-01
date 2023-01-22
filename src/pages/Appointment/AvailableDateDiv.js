import { format } from "date-fns";
import React from "react";

const AvailableDateDiv = ({ selected }) => {
  return (
    <div className="flex justify-center my-10">
      <h2 className="text-[#19D3AE] text-xl p-1">
        Available Appointments on {format(selected, "PP")}
      </h2>
    </div>
  );
};

export default AvailableDateDiv;
