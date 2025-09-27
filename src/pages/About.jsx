import React from "react";
import AboutUs from "../components/about/AboutUs";
import Navbar from "../components/home/Navbar";
import ValueSection from "../components/about/ValueSection";
import AboutFooter from "../components/about/AboutFooter";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <ValueSection></ValueSection>
      <AboutFooter></AboutFooter>
    </div>
  );
};

export default About;
