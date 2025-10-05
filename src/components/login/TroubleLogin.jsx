import React, { useState } from "react";
import Logo from "../../assets/manuecom.png";
import { FaRegCalendarAlt } from "react-icons/fa";

function TroubleLogin() {
  const [date, setDate] = useState("");

  return (
    <>
      <div className="min-h-screen mt-4 md:mt-12 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[90%] flex items-center">
          {/* Left Side - centered */}
          <div className="hidden lg:flex flex-col items-center mb-[260px] w-1/2">
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
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center rounded-[20px] shadow-xl border-[19px] border-[#6B4226] p-8 md:p-12">
            {/* Logo */}
            <img
              src={Logo}
              alt="Logo"
              className="w-40 h-40 md:w-[200px] md:h-[200px] object-contain"
            />

            {/* Subtitle */}
            <p className="text-center text-[15px] font-medium text-[#6B4226] my-2">
              Trouble Log In?
            </p>
            <p className="text-center text-[15px] font-medium text-[#6B4226] mb-8 mt-2">
              Enter your email or phone and we'll send you a link or code to get
              back into your account.
            </p>

            {/* Input Fields */}
            <div className="space-y-6 w-full">
              <input
                type="text"
                placeholder="Email or Phone"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] mb-40"
              />

              <button className="w-full bg-[#6B4423] text-white font-normal py-3.5 rounded-lg hover:bg-[#5A3A1F] transition-colors duration-200 text-[14px] shadow-md">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="hidden md:block mx-20 mt-28 pb-12">
        <p className="text-[16px] leading-relaxed text-[#0f1623]">
          Terms, Privacy Disclosures Cookie Settings © Artestor Technologies LLP
        </p>
      </div>
    </>
  );
}

export default TroubleLogin;
