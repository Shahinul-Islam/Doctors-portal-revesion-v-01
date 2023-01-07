import React from "react";
import LinkButton from "../../components/LinkButton";
import appointment from "../../images/appointment.png";
import "./HomeAppointmentSection.css";

const HomeAppointmentSection = () => {
  return (
    <section className="mt-44 ">
      <div
        className="hero appointmentSection"
        style={{ backgroundImage: `url(${appointment})` }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={require("../../images/doctor-small.png")}
            className="lg:w-1/2 hidden -mt-28 md:block appointmentImg"
          />
          <div>
            <p className="mb-6 text-[#19D3AE] font-bold text-xl md:text-center lg:text-left">
              Appointment
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <LinkButton>Get Started</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppointmentSection;
