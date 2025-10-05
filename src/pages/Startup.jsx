import React from "react";
import StartupHero from "../components/startup/StartupHero";
import StartupMarket from "../components/startup/StartupMarket";
import StartupConsult from "../components/startup/StartupConsult";
import StartupStarted from "../components/startup/StartupStarted";
import StartupPrices from "../components/startup/StartupPrices";
import Navbar from "../components/home/Navbar";
const Startup = () => {
  return (
    <div >
      <Navbar></Navbar>
      <StartupHero></StartupHero>
      <StartupMarket></StartupMarket>
      <StartupConsult></StartupConsult>
      <StartupStarted></StartupStarted>
      <StartupPrices></StartupPrices>
    </div>
  );
};

export default Startup;
