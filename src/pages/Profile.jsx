import React from "react";
import Sidebar from "../components/profile/Sidebar";
import RightHero from "../components/profile/RightHero";
import Help from "../components/profile/Help";
import Request from "../components/profile/Request";
import RequestRaised from "../components/profile/RequestRaised";
import SignOut from "../components/profile/SignOut";
import Settings from "../components/profile/Settings";
import Notification from "../components/profile/Notification";
import Connect from "../components/profile/Connect";
import AdminPanel from "../components/profile/AdminPanel";
import Admin2 from "../components/profile/Admin2";
import Desktop from "../components/profile/Desktop";
import Desktop2 from "../components/profile/Desktop2";

const Profile = () => {
  return (
    <>
      <div className="bg-gray-100">
        {/* <RightHero></RightHero> */}
        {/* <Help></Help> */}
        {/* <Request></Request> */}
        {/* <RequestRaised></RequestRaised> */}
        {/* <SignOut></SignOut> */}
        {/* <Settings></Settings> */}
        {/* <Notification></Notification> */}
        {/* <Connect></Connect> */}
        <AdminPanel></AdminPanel>
        {/* <Admin2></Admin2> */}
        {/* <Desktop></Desktop> */}
        {/* <Desktop2></Desktop2> */}
      </div>
    </>
  );
};

export default Profile;
