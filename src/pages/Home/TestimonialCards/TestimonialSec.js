import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSec = () => {
  return (
    <div className="grid lg:grid-cols-3 place-items-center gap-4 mb-10">
      <TestimonialCard></TestimonialCard>
      <TestimonialCard></TestimonialCard>
      <TestimonialCard></TestimonialCard>
    </div>
  );
};

export default TestimonialSec;
