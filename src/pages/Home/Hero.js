import React from "react";
import LinkButton from "../../components/LinkButton";
// import "../../images/chair.png";

const Hero = () => {
  return (
    <div
      className="hero my-20"
      style={{
        backgroundImage: `url("https://i.ibb.co/0rF14f4/bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex flex-col-reverse lg:flex-row">
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold mt-7">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <LinkButton>Get Started</LinkButton>
          {/* <button className="btn btn-primary">Get Started</button> */}
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

export default Hero;
