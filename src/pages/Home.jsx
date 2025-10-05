import React from "react";
import Navbar from "../components/home/Navbar";
import Homepage from "../components/home/Homepage";
import PortalIntro from "../components/home/PortalIntro";
import Consultation from "../components/home/Consultation";
import GetStarted from "../components/home/GetStarted";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div className="bg-[#FCF5E5]">
      <Navbar />
      <Homepage />
      <PortalIntro />
      <Consultation />
      <GetStarted />
      <Footer></Footer>
    </div>
  );
};

export default Home;
