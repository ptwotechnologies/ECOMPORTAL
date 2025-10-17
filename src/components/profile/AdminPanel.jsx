import React from "react";
import { motion } from "framer-motion";
import AdminHeader from "./AdminHeader";
import { RiCheckDoubleLine, RiCheckLine } from "react-icons/ri";
import { FaImage, FaRegCalendarCheck } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import Graph from "../../assets/adminPanel/graph.png";

export default function AdminPanel() {
  const requests = [
    {
      time: "10:30 A.M.",
      title: "Applied as an investor",
      name: "Harika",
      role: "Investor",
      variant: "light",
    },
    {
      time: "14:00 P.M.",
      title: "Require to connect with investors",
      name: "Anil Jain",
      role: "Startup",
      variant: "dark",
    },
    {
      time: "17:00 P.M.",
      title: "Looking for assistance in leads",
      name: "Niharika Sharma",
      role: "Service Professional",
      variant: "light",
    },
  ];
  const stats = [
    {
      icon: <FaImage className="text-white text-sm" />,
      color: "bg-purple-600",
      value: 8,
      label: "On Approval",
    },
    {
      icon: <RiCheckDoubleLine className="text-white text-sm" />,
      color: "bg-blue-600",
      value: 12,
      label: "Registered",
    },
    {
      icon: <FaRegCalendarCheck className="text-white text-sm" />,
      color: "bg-orange-500",
      value: 14,
      label: "Requests",
    },
  ];
  const request = [
    {
      time: "10.30 A.M.",
      title: "Applied as an investor",
      name: "Harika",
      role: "Investor",
      active: false,
    },
    {
      time: "14.00 P.M.",
      title: "Require to connect with investors",
      name: "Anil Jain",
      role: "Startup",
      active: true,
    },
    {
      time: "17.00 P.M.",
      title: "Looking for assistance in leads",
      name: "Niharika Sharma",
      role: "Service Professional",
      active: false,
    },
  ];
  const tags = [
    { label: "Startup", color: "bg-green-100 text-green-700" },
    { label: "Service Professional", color: "bg-purple-100 text-purple-700" },
    { label: "Investor", color: "bg-gray-200 text-gray-700" },
  ];

  const members = Array(4).fill(null);
  const newRegistrations = [
    { name: "Kirti Saini", role: "Startup", hours: "12.5 h" },
    { name: "Parineeta", role: "Investor", hours: "18.6 h" },
    { name: "Nandini Sen", role: "Service Professional", hours: "4.2 h" },
    { name: "Rahul Rai", role: "Startup", hours: "2.5 h" },
  ];

  return (
    <div className="min-h-screen bg-[#ebebeb] p-6">
      {/* Top Navbar */}
      <AdminHeader></AdminHeader>

      {/* Main Layout */}
      <div className="max-w-[96%] mx-auto flex items-center gap-8">
        {/* Left Section */}
        <div className="flex w-[70%] self-stretch flex-col gap-8">
          {/* row 1  */}
          <div className="flex items-center gap-8 w-full">
            <div className="bg-white rounded-2xl self-stretch shadow p-6 w-full">
              <h2 className="text-gray-900 font-semibold text-xl">
                Progress statistics
              </h2>
              <div className="my-4 flex gap-4 items-center">
                <div className=" text-4xl font-bold text-gray-900">64%</div>
                <p className="text-gray-500 text-sm">Total Activity</p>
              </div>

              <div className="flex gap-2 mb-2">
                {["bg-purple-500", "bg-blue-500", "bg-orange-500"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-1.5 rounded-full ${color}`}
                    ></div>
                  )
                )}
              </div>

              <div className="flex justify-between text-xs text-gray-400 mb-5">
                <span>20%</span>
                <span>35%</span>
                <span>41%</span>
              </div>

              <div className="grid grid-cols-3 border bg-[#f1f1f1] py-2 border-gray-200 rounded-xl divide-x divide-gray-200">
                {stats.map((item, i) => (
                  <div key={i} className="flex flex-col items-center p-3">
                    <div
                      className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center mb-1`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-xl my-2 font-semibold text-gray-900">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl self-stretch shadow p-6 w-full">
              <div className="flex w-full justify-between my-3">
                {tags.map((t, i) => (
                  <span
                    key={i}
                    className={`flex-1 text-center mx-1 px-3 py-2 text-xs font-semibold rounded-full ${t.color}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              <div className="my-6">
                <h2 className="text-xl leading-relaxed font-semibold text-gray-900">
                  English Punctuation Made Easy
                </h2>
                <p className="text-sm text-gray-600 my-2 leading-relaxed">
                  Punctuation – learn the basics without the pain. People will
                  never laugh at your punctuation again. You do not require any
                  materials or software.
                </p>
              </div>

              <div className="flex justify-between gap-8 items-center ">
                <div className="bg-[#f1f1f1] p-4 w-1/2 self-stretch rounded-xl">
                  <p className="text-sm text-gray-500 mb-1 text-center">
                    Members
                  </p>
                  <div className="flex -space-x-2 justify-center">
                    {members.map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"
                      />
                    ))}
                  </div>
                </div>

                {/* Subscriptions */}
                <div className="w-1/2 bg-[#f1f1f1] self-stretch p-4 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Subscriptions</p>
                  <div className="relative w-full h-10 bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-10 bg-yellow-400 rounded-lg flex items-center px-3 font-medium text-gray-800"
                      style={{ width: "75%" }}
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-gray-900 text-white py-2 my-4 rounded-lg font-medium hover:bg-gray-800 transition">
                Continue Learning
              </button>
            </div>
          </div>
          {/* row 2  */}
          <div className="bg-white p-6 rounded-2xl shadow-sm w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Requests</h2>
              <div className="flex items-center gap-3 text-gray-600">
                <button className="flex items-center justify-center p-1 border border-gray-700 w-10 h-10 hover:bg-gray-200 rounded-full">
                  <span className="text-lg">←</span>
                </button>
                <span className="font-medium">Today</span>
                <button className="flex items-center justify-center p-1 border border-gray-700 w-10 h-10 hover:bg-gray-200 rounded-full">
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {request.map((req, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-5 flex flex-col justify-between ${
                    req.active
                      ? "bg-[#011627] text-white"
                      : "bg-[#f1f1f1] text-gray-900"
                  }`}
                >
                  <div>
                    <p
                      className={`text-sm mb-2 ${
                        req.active ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {req.time}
                    </p>
                    <p className="font-medium leading-snug">{req.title}</p>
                  </div>

                  <div className="mt-6">
                    <button
                      className={`px-4 py-1.5 rounded-md text-sm font-medium ${
                        req.active
                          ? "bg-white text-[#FF6B00]"
                          : "bg-[#FF6B00]/10 text-[#FF6B00]"
                      }`}
                    >
                      Approve
                    </button>

                    <div className="flex items-center mt-4 gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            req.active ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {req.name}
                        </p>
                        <p
                          className={`text-xs ${
                            req.active ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {req.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[30%] bg-white rounded-2xl shadow-md p-5 flex flex-col gap-6"
        >
          {/* Header Section */}
          <div>
            <div className="flex items-center mt-2 mb-6 justify-between">
              <h2 className="text-gray-900 font-semibold text-xl">Activity</h2>
              <button className="flex items-center gap-2 border border-gray-700 text-gray-600 text-sm px-3 py-1 rounded-lg transition">
                <FiCalendar />
                last 7 days
              </button>
            </div>

            <div className="flex items-center my-3 mx-6 gap-4">
              <p className="text-gray-800 text-4xl">50 </p>
              <p className="text-gray-600 text-sm">Registrations</p>
            </div>
          </div>

          {/* Dummy Image for Graph */}
          <div className="w-full h-72 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={Graph}
              alt="Activity Graph"
              className="object-cover w-full "
            />
          </div>

          {/* New Registrations */}
          <div className="bg-[#f1f1f1] py-5 px-8 rounded-lg">
            <h3 className="text-gray-900 text-[18px] font-semibold mb-3">
              New Registrations
            </h3>
            <div className="flex flex-col gap-4 mt-4">
              {newRegistrations.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-start gap-3">
                    {idx === 0 ? (
                      <RiCheckDoubleLine size={24} className="text-blue-500 text-xs mt-1" />
                    ) : (
                      <RiCheckLine size={24} className="text-gray-400 text-xs mt-1" />
                    )}
                    <div>
                      <p className="text-sm mb-2 text-gray-500">{item.name}</p>
                      <p className="text-sm font-medium text-gray-900">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{item.hours}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
