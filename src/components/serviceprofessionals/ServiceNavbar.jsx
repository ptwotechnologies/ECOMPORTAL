import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ServiceNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-3 flex items-center bg-[#2D3A80] rounded-t-lg md:bg-[#FCF5E5] justify-between relative">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.jpg"
          alt="Manuecom"
          className="h-8 w-8 md:h-32 md:w-32 hidden md:block"
        />
        <img
          src="/logo.jpg"
          alt="Manuecom"
          className="h-8 w-8 md:h-32 md:w-32 block md:hidden"
        />
      </div>

      {/* Center: Desktop Menu */}
      <div className="hidden md:flex bg-[#6B4226] justify-center items-center space-x-1 px-4 py-2 rounded-full">
        <a
          href="#"
          className="text-white bg-transparent hover:bg-white hover:text-[#6B4226] px-4 py-2 rounded-full flex items-center gap-1 justify-center text-sm transition"
        >
          Auxiliaries <MdOutlineKeyboardArrowDown />
        </a>

        <a
          href="#"
          className="text-white bg-transparent hover:bg-white hover:text-[#6B4226] px-4 py-2 rounded-full font-medium text-sm transition"
        >
          Pricing
        </a>

        <a
          href="#"
          className="text-white bg-transparent hover:bg-white hover:text-[#6B4226] px-4 py-2 rounded-full font-medium text-sm transition"
        >
          Resources
        </a>
      </div>

      {/* Right: Desktop Sign in / Sign up */}
      <div className="hidden md:flex items-center justify-center space-x-6">
        <a
          href="#"
          className="text-[#6B4226] underline underline-offset-4 text-sm"
        >
          Sign in
        </a>
        <a
          href="#"
          className="bg-[#6B4226] text-white px-6 py-3 rounded text-sm hover:opacity-90"
        >
          Sign up
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes size={22} className="text-white" />
          ) : (
            <FaBars size={22} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#2D3A80] flex flex-col items-center space-y-4 py-6 md:hidden shadow-lg z-50 rounded-2xl">
          <a
            href="#"
            className="bg-[#C76B3D] text-white flex items-center gap-1 justify-center px-4 py-2 rounded-full text-sm"
          >
            Auxiliaries <MdOutlineKeyboardArrowDown />
          </a>
          <a
            href="#"
            className="hover:bg-[#2D3A80] px-4 py-2 rounded-full font-medium text-sm"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:bg-[#2D3A80] px-4 py-2 rounded-full font-medium text-sm"
          >
            Resources
          </a>
          <a
            href="#"
            className="underline underline-offset-4 hover:bg-[#2D3A80] px-4 py-2 rounded-full text-sm"
          >
            Sign in
          </a>
          <a href="#" className="bg-[#2D3A80] px-6 py-2 rounded text-sm">
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
};

export default ServiceNavbar;
