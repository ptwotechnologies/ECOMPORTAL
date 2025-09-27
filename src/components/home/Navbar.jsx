import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-3 flex mx-6 items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.jpg"
          alt="Manuecom"
          className="h-10 w-10 md:h-32 md:w-32"
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

      {/* Right: Sign in / Sign up */}
      <div className="hidden md:flex items-center justify-center space-x-6">
        <a href="#" className="text-[#6B4226] underline underline-offset-4 text-sm">
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
            <FaTimes size={22} className="text-[#6B4226]" />
          ) : (
            <FaBars size={22} className="text-[#6B4226]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#F5EDE4] flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg">
          <a
            href="#"
            className="bg-[#6B4226] text-white flex items-center gap-1 justify-center px-4 py-2 rounded-full text-sm"
          >
            Auxiliaries <MdOutlineKeyboardArrowDown />
          </a>
          <a
            href="#"
            className="text-[#6B4226] hover:bg-[#6B4226] hover:text-white px-4 py-2 rounded-full font-medium text-sm"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#6B4226] hover:bg-[#6B4226] hover:text-white px-4 py-2 rounded-full font-medium text-sm"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-[#6B4226] hover:bg-[#6B4226]  underline underline-offset-4 hover:text-white px-4 py-2 rounded-full text-sm"
          >
            Sign in
          </a>
          <a
            href="#"
            className="bg-[#6B4226] text-white px-4 py-2 rounded text-sm"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
