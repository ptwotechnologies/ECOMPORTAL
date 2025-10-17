import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const AdminHeader = () => {
  const [activeTab, setActiveTab] = useState("Registrations");
  const tabs = [
    "Dashboard",
    "Registrations",
    "Requests",
    "Verification",
    "Connect",
    "Meetings",
    "Notifications",
  ];
  return (
    <div className="max-w-[96%] mx-auto mb-6">
      <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm">
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-[#001426] rounded-full flex items-center justify-center">
            <RiSearch2Line size={32} className="text-white"/>
          </div>
        </div>

        {/* Middle Navigation Tabs with Border */}
        <div className="flex items-center gap-1 border-2 border-gray-500 rounded-full px-1.5 py-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-[16px] font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#001426] text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right User Button */}
        <button className="flex items-center gap-4 bg-[#001426] text-white rounded-full p-2 pr-8">
          <div className="w-10 h-10 bg-[#d9d9d9] rounded-full"></div>
          <span className="font-medium">Hammad</span>
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
