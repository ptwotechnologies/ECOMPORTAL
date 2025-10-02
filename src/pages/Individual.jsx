import React from "react";
import StartupMarket from "../components/startup/StartupMarket";
import IndividualHero from "../components/individuals/IndividualHero";
import StartupConsult from "../components/startup/StartupConsult";
import StartupStarted from "../components/startup/StartupStarted";
import IndividualNavbar from "../components/individuals/IndividualNavbar";
import ChannelPrices from "../components/channel/ChannelPrices";
const Individual = () => {
  return (
    <div className="bg-[#ffffff]">
      <IndividualNavbar></IndividualNavbar>
      <IndividualHero></IndividualHero>
      <StartupMarket></StartupMarket>
      <StartupConsult></StartupConsult>
      <StartupStarted></StartupStarted>
      <ChannelPrices></ChannelPrices>
    </div>
  );
};

export default Individual;
