import React from "react";
import Hero from "../components/serviceprofessionals/Hero"
import ServiceNavbar from "../components/serviceprofessionals/ServiceNavbar";
import ServiceMarket from "../components/serviceprofessionals/ServiceMarket";
import ServiceConsult from "../components/serviceprofessionals/ServiceConsult";
import ServiceStarted from "../components/serviceprofessionals/ServiceStarted";
import PricingFaq from "../components/serviceprofessionals/PricingFaq";

const Service = () => {
  return (
    <div>
      <ServiceNavbar></ServiceNavbar>
      <Hero></Hero>
      <ServiceMarket></ServiceMarket>
      <ServiceConsult></ServiceConsult>
      <ServiceStarted></ServiceStarted>
      <PricingFaq></PricingFaq>
    </div>
  );
};

export default Service;
