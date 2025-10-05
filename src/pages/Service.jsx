import React from "react";
import Hero from "../components/serviceprofessionals/Hero"
import ServiceMarket from "../components/serviceprofessionals/ServiceMarket";
import ServiceConsult from "../components/serviceprofessionals/ServiceConsult";
import ServiceStarted from "../components/serviceprofessionals/ServiceStarted";
import PricingFaq from "../components/serviceprofessionals/PricingFaq";
import Navbar from "../components/home/Navbar";

const Service = () => {
  return (
    <div className="bg-[#FCF5E5]">
      <Navbar></Navbar>
      <Hero></Hero>
      <ServiceMarket></ServiceMarket>
      <ServiceConsult></ServiceConsult>
      <ServiceStarted></ServiceStarted>
      <PricingFaq></PricingFaq>
    </div>
  );
};

export default Service;
