import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import Sidebar from "./Sidebar";

const Connect = () => {
  const leftPartCol1 = [
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
  ];

  const leftPartCol2 = [
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
    { data: "An experienced entrepreneur and business professional." },
  ];

  const requestOptions = [
    { id: 1, label: "Connect with Admin" },
    { id: 2, label: "Require Advisory Service" },
    { id: 3, label: "Require Legal Service" },
    { id: 4, label: "Require CXO Service" },
    { id: 5, label: "Require Compliance Service" },
    { id: 6, label: "Require HR Service" },
    { id: 7, label: "Require Development Service" },
    { id: 8, label: "Require Finance Service" },
    { id: 9, label: "Require Design Service" },
    { id: 10, label: "Require Funding Solutions" },
    { id: 11, label: "Require Marketing Service" },
    { id: 12, label: "Connect with Investors" },
    { id: 13, label: "Require Consultation Service" },
    { id: 14, label: "Connect with Incubators" },
  ];

  const getVisibleOptions = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return requestOptions.slice(0, 7);
    }
    return requestOptions;
  };

  const [visibleOptions, setVisibleOptions] = useState(getVisibleOptions());

  useEffect(() => {
    const handleResize = () => setVisibleOptions(getVisibleOptions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:flex">
      <Sidebar />
      <div className="min-h-screen bg-gray-100 p-4 w-full md:w-[82%] mx-auto">
        {/* Header */}
        <div className="hidden md:flex bg-white border border-gray-400 shadow-md rounded-lg px-10 mb-4 justify-between items-center">
          <h1 className="text-md font-semibold text-gray-800">
            Welcome, Startup India Pvt. Ltd.
          </h1>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors">
            <FaUser
              className="text-gray-600 border border-gray-600 p-1 rounded-full"
              size={24}
            />
            <span className="font-semibold text-gray-800">
              Switch to professional
            </span>
          </button>
        </div>

        <div className="flex gap-4 items-stretch">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-400 p-6 rounded-md shadow-md justify-between w-full md:w-[60%] h-full gap-6">
            <h2 className="block md:hidden font-semibold text-2xl text-[#001426] px-2">Connect</h2>
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:mt-28 w-full md:w-1/2">
              {leftPartCol1.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border border-gray-600 rounded-lg p-4 bg-white shadow-md hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex-shrink-0 flex items-center justify-center"></div>
                  <p className="text-sm text-gray-800 leading-snug">
                    {item.data}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="hidden md:flex flex-col gap-3 w-full md:w-1/2">
              {leftPartCol2.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border border-gray-600 rounded-lg p-4 bg-white shadow-md hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex-shrink-0 flex items-center justify-center"></div>
                  <p className="text-sm text-gray-800 leading-snug">
                    {item.data}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:flex w-[40%] h-full">
            <div className="bg-white border border-gray-300 shadow-md rounded-2xl overflow-hidden flex flex-col justify-between w-full h-full">
              {/* Header image */}
              <div className="relative h-40 border-2 border-gray-300"></div>

              {/* Profile photo */}
              <div className="relative px-4 -mt-12">
                <div className="w-36 h-36 rounded-full border-2 border-gray-300 shadow-md bg-white"></div>

                <div className="mt-6 px-4">
                  <h2 className="text-gray-900 text-lg font-semibold">
                    Akshay Dogra
                  </h2>
                  <p className="text-sm text-gray-800 mt-2 leading-tight">
                    Grow Your Business by Partnering with <br />
                    <span>India's Fastest-Growing Startup </span>
                  </p>
                  <p>Ecosystem</p>
                  <p className="text-sm text-gray-700 font-medium mt-3">
                    New Delhi, Delhi, India
                  </p>
                </div>
              </div>

              {/* About */}
              <div className="pb-6 mt-10 mb-12">
                <div className="bg-white border-t-2 border-gray-300 rounded-xl shadow-sm p-6 px-8">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                      About
                    </h3>
                    <button className="p-1 rounded-md hover:bg-gray-100 transition">
                      <FiEdit2 className="text-gray-800" />
                    </button>
                  </div>

                  <p className="text-[13px] text-gray-600 mt-2 leading-6">
                    An experienced entrepreneur and business professional who
                    consistently delivers high-quality and result-focused
                    marketing campaign, customer experience and design valuable
                    content for go-to-market, launch, start-up, brand building,
                    event and community engagement. Dedicated results and omni
                    channel product marketing, brand and community development.
                    <span className="text-gray-800 font-medium">
                      {" "}
                      See more...
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
