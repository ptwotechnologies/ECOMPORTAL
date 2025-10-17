import React, { useState } from "react";
import Logo from "../../assets/manuecom.png";
import { FaRegCalendarAlt } from "react-icons/fa";

function NewPass() {
  const [date, setDate] = useState("");

  return (
    <>
      <div className="min-h-screen m-0 md:mt-12 flex items-center justify-center p-0 md:p-8">
        <div className="w-full md:w-[98%] md:gap-20 flex items-center justify-center">
          {/* Left Side - centered */}
          <div className="hidden lg:flex flex-col justify-center items-center mb-[260px]">
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
         <div className="w-full lg:w-auto lg:min-w-[480px] flex flex-col justify-center items-center md:rounded-[20px] shadow-xl border-[19px] border-[#6B4226] p-8 md:p-12">
            {/* Logo */}
            <img
              src={Logo}
              alt="Logo"
              className="w-60 h-60 md:w-[200px] md:h-[200px] object-contain scale-150"
            />

            <p className="text-center text-[15px] font-medium text-[#6B4226] mb-8 mt-2 md:my-8">
              Set your new password and confirm the new password
            </p>

            {/* Input Fields */}
            <div className="space-y-6 w-full">
              <input
                type="password"
                placeholder="Enter New Password"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4423] text-[14px] text-[#111827] placeholder:text-[#9CA3AF]"
              />
              <div className="text-gray-400 text-[10px] space-y-4">
                <p>
                  Password must be strong and contain alphanumeric(123abc), one
                  uppercase letter and one special character(@,#,$)
                </p>
                <p>
                  By clicking, you agree to our Terms , Privacy Policy and
                  Cookies Policy .
                </p>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
                  <p>Log out from all the devices</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#6B4423] mt-40 text-white font-normal py-3.5 rounded-lg hover:bg-[#5A3A1F] transition-colors duration-200 text-[14px] shadow-md">
              Reset Your Password
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

export default NewPass;
