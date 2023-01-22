import React from "react";
import LinkButton from "../../components/LinkButton";

const ServiceHero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={require("../../images/treatment.png")}
          className="min-w-xs md:max-w-md rounded-lg"
        />
        <div className="md:pl-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          <LinkButton>Get Started</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
