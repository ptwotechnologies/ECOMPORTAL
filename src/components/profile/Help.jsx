import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { IoSearchSharp } from "react-icons/io5";
import { TfiList } from "react-icons/tfi";
import { HiMiniLink } from "react-icons/hi2";
import { BsSendFill } from "react-icons/bs";

export default function Help() {
  const leftPart = [
    {
      name: "I need assistance with sign up the account",
    },
    {
      name: "Service professional is not responding",
    },
    {
      name: "Can I connect with the investors?",
    },
    {
      name: "Can I connect with the other startups?",
    },
  ];
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
        <div className="flex gap-4">
          {/* Left Card */}
          <div className="min-h-screen flex flex-col rounded-lg border border-gray-300 p-6 shadow-md w-full lg:w-[40%] bg-white">
            <div className="flex justify-between items-start gap-4 w-full">
              <div className="flex items-center gap-4 w-full">
                <div className="w-12 h-12 rounded-full border border-gray-300 shadow-md flex-shrink-0"></div>
                <p className="text-gray-900 font-semibold">Tickets</p>

                {/* Responsive input container */}
                <div className="flex border-2 shadow-md border-gray-300 items-center px-4 justify-between rounded-2xl flex-1 min-w-[150px]">
                  <div className="flex items-center gap-2 flex-1">
                    <IoSearchSharp size={24} className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search Messages"
                      className="p-2 outline-none w-full"
                    />
                  </div>
                  <TfiList size={24} className="text-gray-500" />
                </div>
              </div>
            </div>

            <hr className="border-gray-300 w-full my-3" />

            <div className="flex flex-col w-full gap-4">
              {leftPart.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-gray-300 shadow-md flex-shrink-0"></div>
                      <p className="text-gray-800">{item.name}</p>
                    </div>
                    <p className="text-sm text-gray-500 self-end">10:08 A.M.</p>
                  </div>
                  <hr className="border-gray-300 w-full mt-3" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block w-[60%] items-center justify-center ">
            <div className="border p-6 py-12 pt-20 flex flex-col gap-6 bg-white border-gray-300 shadow-md rounded-lg w-full">
              {rightPart.map((item, index) => (
                <div
                  key={index}
                  className={`
                    border-2 p-4 flex items-center gap-10 border-gray-300 rounded-lg w-[90%]
                    ${index % 2 !== 0 ? "flex-row-reverse ml-auto" : "flex-row"}
                  `}
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-300 shadow-md flex items-center justify-center"></div>
                  <p className="flex-1 text-gray-700">{item.data}</p>{" "}
                  {/* use item.data */}
                </div>
              ))}
            </div>

            <div className="border p-6 border-gray-300 shadow-md rounded-lg w-full mt-4 bg-white">
              <div className="flex border-2 shadow-md border-gray-300 items-center px-4 justify-between rounded-2xl flex-1 min-w-[150px]">
                {" "}
                <input
                  type="text"
                  placeholder="Enter the Text"
                  className="py-4 outline-none w-full"
                />
                <div className="flex items-center gap-2 flex-1">
                  <HiMiniLink size={24} className="text-gray-500 bg-white" />
                  <BsSendFill size={24} className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
