import React, { useState } from "react";
import Logo from "../../assets/manuecom.png";
import { FaRegCalendarAlt } from "react-icons/fa";

function Login3() {
  const [date, setDate] = useState("");

  return (
    <>
      <div className="min-h-screen mt-4 md:mt-12 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[90%] flex items-center">
          {/* Left Side - centered */}
          <div className="hidden lg:flex flex-col justify-center items-center mb-[260px] w-1/2">
            <div>
              <img
                src={Logo}
                alt="Artestor Logo"
                className="w-[438px] h-[438px]"
              />
            </div>

            <p className="text-[18px] font-normal text-[#6B4226] leading-relaxed  max-w-xs -mt-40">
              Allows you to get funding,
              <br />
              resources and investor connect
            </p>
          </div>
          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center rounded-[20px] shadow-xl border-[19px] border-[#6B4226] p-8 md:p-12">
            {/* Logo */}
            <img
              src={Logo}
              alt="Logo"
              className="w-40 h-40 md:w-[200px] md:h-[200px] object-contain"
            />

            {/* Subtitle */}
            <p className="text-center text-[14px] font-medium text-[#6B4226] mb-8 mt-2">
              Get the most benefits from our pool of possible clients for you
            </p>

            {/* Input Fields */}
            <div className="space-y-6 w-full">
              <input
                type="text"
                placeholder="Email or Phone"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <input
                type="text"
                placeholder="Mobile or Phone"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <input
                type="email"
                placeholder="Business Email"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <input
                type="text"
                placeholder="Website"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />

              {/* Business Type Dropdown with placeholder-like option */}
              <select
                defaultValue=""
                className="w-full px-4 py-3 md:hidden border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#9CA3AF] "
              >
                <option value="" disabled>
                  Business Type
                </option>
                <option value="startup">Startup</option>
                <option value="settled">Fully Settled</option>
              </select>

              {/* Founded On Date Input with custom placeholder */}
              <div className="relative w-full md:hidden">
                {!date && (
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[14px] pointer-events-none">
                    Founded on
                  </span>
                )}
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] pr-10"
                />
                <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
              </div>

            </div>
              <button className="w-full bg-[#6B4423] text-white font-normal py-3.5 rounded-lg hover:bg-[#5A3A1F] transition-colors duration-200 text-[14px] shadow-md mt-20 md:mt-12">
                Continue
              </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="hidden md:block mx-36 mt-28 pb-12">
        <p className="text-[16px] leading-relaxed text-[#0f1623]">
          Terms, Privacy Disclosures Cookie Settings © Artestor Technologies LLP
        </p>
      </div>
    </>
  );
}

export default Login3;
