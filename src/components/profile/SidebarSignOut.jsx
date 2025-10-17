import { useState } from "react";
import {
  FaUser,
  FaUserFriends,
  FaLink,
  FaBell,
  FaCog,
  FaQuestionCircle,
  FaBars,
} from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import Logo from "../../assets/artestor.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarSignOut() {
  const [activeItem, setActiveItem] = useState("Profile");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Profile", icon: FaUser },
    { name: "Requests", icon: FaUserFriends },
    { name: "Connect", icon: FaLink },
    { name: "Notification", icon: FaBell },
  ];

  const bottomItems = [
    { name: "Settings", icon: FaCog },
    { name: "Help", icon: FaQuestionCircle },
    { name: "Sign Out", icon: PiSignOutBold },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen rounded-r-lg shadow-lg">
        {/* Left Icon Bar */}
        <div className="w-14 bg-gray-900 flex flex-col items-center py-4 relative">
          <button className="w-10 h-10 flex mt-2 items-center justify-center text-white hover:bg-gray-800 rounded mb-8">
            <FaBars className="text-xl" />
          </button>

          {/* Main Menu Icons */}
          <div className="flex flex-col gap-1 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${
                    activeItem === item.name
                      ? "bg-white text-gray-900"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <Icon className="text-lg" />
                </button>
              );
            })}
          </div>

          {/* Bottom Menu Icons (Fixed hover alignment) */}
          <div className="flex flex-col gap-1 mb-4 z-10">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-all duration-200"
                >
                  <Icon className="text-lg" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Sidebar */}
        <div className="w-56 bg-white flex flex-col border-r border-gray-200 relative z-20">
          <div className="px-4 py-5 flex items-center gap-2 border-b border-gray-200">
            <img src={Logo} alt="Logo" className="w-9 h-9 ml-10 scale-[5]" />
          </div>

          <nav className="flex-1 py-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center px-6 py-2.5 text-left text-sm ${
                  activeItem === item.name
                    ? "bg-gray-900 text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Bottom Part (Desktop version same as Mobile now) */}
          <div className="border-t border-gray-200 py-4 px-6 flex flex-col gap-3">
            <div className="border-2 border-gray-700 rounded-md flex flex-col">
              <button className="w-full text-sm py-1.5 rounded-md bg-transparent text-gray-800">
                Yes
              </button>
              <button className="w-full bg-gray-900 text-white text-sm py-1.5 rounded-md">
                Cancel
              </button>
            </div>

            <button className="mt-3 w-full bg-gray-900 text-white text-sm py-2.5 rounded-md font-medium hover:bg-gray-800 transition">
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden flex-col bg-white shadow-lg relative">
        <div className="flex justify-between items-center p-6 px-10">
          <img src={Logo} alt="Logo" className="w-8 h-8 scale-[3]" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-4 right-4 mt-2 bg-white shadow-lg rounded-xl border border-gray-200 p-6 z-50"
            >
              <div className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMenuOpen(false);
                    }}
                    className={`text-left text-[15px] text-gray-900 font-semibold ${
                      activeItem === item.name
                        ? "bg-gray-900 px-4 py-2 rounded-lg text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

                <div className="mt-36 flex flex-col">
                  <div className="border-2 border-gray-700 rounded-md flex flex-col">
                    <button className="w-full text-sm py-1.5 rounded-md bg-transparent text-gray-800">
                      Yes
                    </button>
                    <button className="w-full bg-gray-900 text-white text-sm py-1.5 rounded-md">
                      Cancel
                    </button>
                  </div>

                  <button className="mt-3 w-full bg-gray-900 text-white text-sm py-2.5 rounded-md font-medium hover:bg-gray-800 transition">
                    Sign out
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
