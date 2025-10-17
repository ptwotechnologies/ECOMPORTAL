import React from "react";
import Sidebar from "./Sidebar";
import { FaUser } from "react-icons/fa";
import { HiMiniLink } from "react-icons/hi2";
import { BsSendFill } from "react-icons/bs";
import { TfiList } from "react-icons/tfi";
import { FiEdit2 } from "react-icons/fi"; // added for edit icon in About card

const Request = () => {
  const rightPart = [
    {
      data: "An experienced entrepreneur and business professional who consistently delivers high-quality and result-focused. An experienced entrepreneur and business professional who consistently.",
    },
    {
      data: "An experienced entrepreneur and business professional who consistently delivers high-quality and result-focused. An experienced entrepreneur and business professional who consistently.",
    },
    {
      data: "An experienced entrepreneur and business professional who consistently delivers high-quality and result-focused. An experienced entrepreneur and business professional who consistently.",
    },
    {
      data: "An experienced entrepreneur and business professional who consistently delivers high-quality and result-focused. An experienced entrepreneur and business professional who consistently.",
    },
  ];

  const rightMobilePart = [
    {
      data: "An experienced entrepreneur and business professional.",
    },
    {
      data: "An experienced entrepreneur and business professional.",
    },
    {
      data: "An experienced entrepreneur and business professional.",
    },
    {
      data: "An experienced entrepreneur and business professional.",
    },
  ];

  return (
    <div className="md:flex">
      <Sidebar></Sidebar>
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

        {/* ✅ Equal height fix added here */}
        <div className="flex gap-4 items-stretch">
          {/* Left Card */}
          <div className="flex flex-col justify-between w-full md:w-[60%] items-center h-full">
            <div className="border px-6 py-3 flex flex-col gap-6 bg-white border-gray-300 shadow-md rounded-lg w-full h-full">
              <div className="flex border-2 shadow-md border-gray-300 items-center px-4 justify-between rounded-2xl flex-1 min-w-[150px]">
                <div className="flex items-center gap-2">
                  <p className="px-2 border-r-2 border-gray-500">Raised</p>
                  <p className="text-white bg-gray-900 p-2 rounded-lg m-2">
                    Received
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <TfiList size={24} className="text-gray-500 bg-white" />
                </div>
              </div>

              {/* ✅ Desktop Right Part */}
              {rightPart.map((item, index) => (
                <div
                  key={index}
                  className={`border-2 p-4 flex items-center gap-10 border-gray-300 rounded-lg w-[90%]
                    ${
                      index % 2 !== 0 ? "flex-row-reverse ml-auto" : "flex-row"
                    } hidden lg:flex`}
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-300 shadow-md flex items-center justify-center"></div>
                  <p className="flex-1 text-gray-700">{item.data}</p>
                </div>
              ))}

              {/* ✅ Mobile Right Part */}
              {rightMobilePart.map((item, index) => (
                <div
                  key={index}
                  className={`border-2 p-4 flex items-center gap-10 border-gray-300 rounded-lg w-[90%]
                    ${
                      index % 2 !== 0 ? "flex-row-reverse ml-auto" : "flex-row"
                    } flex lg:hidden`}
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-300 shadow-md flex items-center justify-center"></div>
                  <p className="flex-1 text-gray-700">{item.data}</p>
                </div>
              ))}
            </div>

            <div className="border p-6 border-gray-300 shadow-md rounded-lg w-full mt-4 bg-white">
              <div className="flex border-2 shadow-md border-gray-300 items-center px-4 justify-between rounded-2xl flex-1 min-w-[150px]">
                <input
                  type="text"
                  placeholder="Enter the Text"
                  className="py-4 hidden md:block outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="py-4 block md:hidden outline-none w-full"
                />
                <div className="flex items-center gap-2 flex-1 justify-end">
                  <HiMiniLink size={24} className="text-gray-500 bg-white" />
                  <BsSendFill size={24} className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Right Card (exact UI, untouched CSS) */}
          <div className="hidden lg:flex w-[40%] h-full">
            <div className="bg-white border border-gray-300 shadow-md rounded-2xl overflow-hidden flex flex-col justify-between w-full h-full">
              {/* Header image section */}
              <div className="relative h-40 border-2 border-gray-300"></div>

              {/* Profile photo overlap */}
              <div className="relative px-4 -mt-12">
                <div className="w-36 h-36 rounded-full border-2 border-gray-300 shadow-md bg-white"></div>

                <div className="mt-6 px-4">
                  <h2 className="text-gray-900 text-lg font-semibold">
                    Akshay Dogra
                  </h2>
                  <p className="text-sm text-gray-800 mt-2 leading-tight">
                    Grow Your Business by Partnering with <br />
                    <span>India’s Fastest-Growing Startup </span>
                  </p>
                  <p>Ecosystem</p>
                  <p className="text-sm text-gray-700 font-medium mt-3">
                    New Delhi, Delhi, India
                  </p>
                </div>
              </div>

              {/* About Section */}
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
          {/* ✅ End Right Card */}
        </div>
      </div>
    </div>
  );
};

export default Request;
