import React from "react";

const Services = () => {
  return (
    <div className="my-12">
      <p className="text-center text-[#19D3AE] uppercase font-bold text-xl">
        OUR SERVICES
      </p>
      <p className="text-3xl mt-4 text-center text-[#3A4256]">
        Services We Provide
      </p>
      <div className="grid md:grid-cols-3 gap-5 p-6">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={require("../../images/fluoride.png")}
              alt="flouride"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center text-[#3A4256]">
            <h2 className="card-title">Fluoride Treatment</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={require("../../images/cavity.png")}
              alt="flouride"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center text-[#3A4256]">
            <h2 className="card-title">Cavity Filling</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={require("../../images/whitening.png")}
              alt="flouride"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center text-[#3A4256]">
            <h2 className="card-title">Teeth Whitening</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
