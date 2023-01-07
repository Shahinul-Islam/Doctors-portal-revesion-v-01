import React from "react";
import Hero from "./Hero";
import HeroCard from "./HeroCard";
import HomeAppointmentSection from "./HomeAppointmentSection";
import ServiceHero from "./ServiceHero";
import Services from "./Services";
import StayConnected from "./StayConnected";
import TestimonialSec from "./TestimonialCards/TestimonialSec";
import TestimonialTop from "./TestimonialTop";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HeroCard></HeroCard>
      <Services></Services>
      <ServiceHero></ServiceHero>
      <HomeAppointmentSection></HomeAppointmentSection>
      <TestimonialTop></TestimonialTop>
      <TestimonialSec></TestimonialSec>
      <StayConnected></StayConnected>
    </div>
  );
};

export default Home;
