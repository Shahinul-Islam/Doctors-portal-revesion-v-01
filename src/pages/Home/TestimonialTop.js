import React from "react";
import quote from "../../icons/quote.svg";

const TestimonialTop = () => {
  return (
    <div className="mt-16 mb-6 flex justify-between items-center px-4">
      <div>
        <p className="font-bold text-xl text-[#19D3AE]">Testimonial</p>
        <p className="text-2xl md:text-3xl lg:text-4xl text-[#3A4256] mt-4">
          What Our Patients Says
        </p>
      </div>
      <div>
        <img src={quote} className="h-10 md:h-28 lg:h-40"></img>
      </div>
    </div>
  );
};

export default TestimonialTop;
