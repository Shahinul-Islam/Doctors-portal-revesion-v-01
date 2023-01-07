import React from "react";

const TestimonialCard = () => {
  return (
    <div className="p-4 shadow-md rounded-md md:w-10/12">
      <p className="">
        It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to using
        Content here, content
      </p>
      <div className="flex items-center gap-2 mt-3">
        <div className="w-12 rounded-full bg-[#19D3AE] p-1 ">
          <img
            src={require("../../../images/people1.png")}
            className="rounded-full"
          />
        </div>
        <div>
          <p>Winson Herry</p>
          <p>California</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
