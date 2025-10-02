import React from "react";
import StartupMarket from "../components/startup/StartupMarket";
import ChannelHero from "../components/channel/ChannelHero";
import StartupConsult from "../components/startup/StartupConsult";
import StartupStarted from "../components/startup/StartupStarted";
import ChannelNavbar from "../components/channel/ChannelNavbar";
import ChannelPrices from "../components/channel/ChannelPrices";
const Channel = () => {
  return (
    <div className="bg-[#ffffff]">
      <ChannelNavbar></ChannelNavbar>
      <ChannelHero></ChannelHero>
      <StartupMarket></StartupMarket>
      <StartupConsult></StartupConsult>
      <StartupStarted></StartupStarted>
      <ChannelPrices></ChannelPrices>
    </div>
  );
};

export default Channel;
