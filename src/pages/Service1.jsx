import React from "react";
import StartupMarket from "../components/startup/StartupMarket";
import Startup1Navbar from "../components/startup1/Startup1Navbar";
import Startup1Hero from "../components/startup1/Startup1Hero";
import Startup1Consult from "../components/startup1/Startup1Consult";
import Startup1Started from "../components/startup1/Startup1Started";
import Startup1Prices from "../components/startup1/Startup1Prices";
const JoinUs = () => {
  return (
    <div className="bg-[#FCF5E5] md:bg-[#ffffff]">
      <Startup1Navbar></Startup1Navbar>
      <Startup1Hero></Startup1Hero>
      <StartupMarket></StartupMarket>
      <Startup1Consult></Startup1Consult>
      <Startup1Started></Startup1Started>
      <Startup1Prices></Startup1Prices>
    </div>
  );
};

export default JoinUs;
