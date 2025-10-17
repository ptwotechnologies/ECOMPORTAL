import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { MdPhone, MdLanguage, MdEmail, MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import AdminHeader from "./AdminHeader";

export default function Desktop() {
  

  const users = Array(12).fill({
    name: "Angela Moss",
    company: "Highnest Studios",
    phone: "+91 8766270884",
    website: "www.artestor.com",
    email: "info@artestor.com",
    role: "Founder, CEO",
  });

  const statuses = ["Investor", "Service Professionals"];

  return (
    <div className="min-h-screen bg-[#ebebeb] p-6">
      {/* Header - White Background Container */}
      <AdminHeader></AdminHeader>

      {/* Main Content Area */}
      <div className="max-w-[96%] mx-auto flex gap-4">
        {/* Sidebar - White Background */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-[200px] bg-white h-screen rounded-2xl p-3 shadow-sm"
        >
          <div className="space-y-2">
            <button className="w-full py-3 px-3 bg-[#C4C4C4] rounded-xl text-sm font-semibold text-white transition-colors">
              Statuses
            </button>
            {statuses.map((status) => (
              <button
                key={status}
                className="w-full py-3 px-3 bg-[#001426] text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors text-center leading-tight whitespace-nowrap"
              >
                {status}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full flex justify-between items-start mb-2 pr-2">
                {/* Profile Image */}
                <div className="w-32 h-32 bg-[#C4C4C4] rounded-full mx-auto mb-4"></div>

                {/* Right Side: Toggle + User Info */}
                <div className="flex flex-col items-end">
                  {/* Toggle Switch (Extreme Right) */}
                  <label className="relative inline-flex items-center cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-14 h-8 bg-[#C4C4C4] peer-focus:outline-none rounded-full relative peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#335559]"></div>
                  </label>

                  {/* User Info */}
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold text-[#001426] mb-1 text-lg">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">{user.company}</p>
                  </div>
                </div>
              </div>

              {/* Contact Details - Two Column Layout */}
              <div className="flex gap-3 ml-2">
                {/* Icon Column */}
                <div className="flex flex-col bg-[#001426] rounded-2xl p-2 gap-2">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdPhone size={20} className="text-[#001426]" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdLanguage size={20} className="text-[#001426]" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdEmail size={20} className="text-[#001426]" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdWork size={20} className="text-[#001426]" />
                  </div>
                </div>

                {/* Text Column */}
                <div className="flex flex-col gap-2 flex-1 justify-center">
                  <div className="h-10 flex items-center">
                    <span className="text-sm text-[#001426] font-medium">
                      {user.phone}
                    </span>
                  </div>
                  <div className="h-10 flex items-center">
                    <span className="text-sm text-[#001426] font-medium">
                      {user.website}
                    </span>
                  </div>
                  <div className="h-10 flex items-center">
                    <span className="text-sm text-[#001426] font-medium underline">
                      {user.email}
                    </span>
                  </div>
                  <div className="h-10 flex items-center">
                    <span className="text-sm text-[#001426] font-medium">
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow Button */}
              <button className="w-12 h-12 bg-[#335559] rounded-full flex items-center justify-center ml-auto hover:bg-teal-800 transition-colors">
                <FiArrowRight size={20} className="text-white" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
