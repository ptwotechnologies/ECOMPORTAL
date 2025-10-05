import React from "react";
import Logo from "../../assets/manuecom.png";
import { FaCheck } from "react-icons/fa6";

function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-6 md:p-12">
        {/* Left Side - Logo and Text */}
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

        {/* Right Side - Payment Card */}
        <div className="bg-white rounded-[20px] border-[6px] border-[#6B4226] shadow-lg p-10 flex flex-col items-center w-full md:w-1/2">
          {/* Logo */}
          <img
            src={Logo}
            alt="Manuecom Logo"
            className="w-[180px] h-auto mb-6"
          />

          {/* Instruction */}
          <p className="text-[15px] font-medium text-[#6B4226] text-center">
            Payment has been received successfully!
          </p>

          {/* Tick in Circle */}
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 my-20 mb-40 md:mb-20">
            <FaCheck size={80} />
          </div>

          {/* Button */}
          <button className="w-full mt-20 bg-[#6B4226] text-white text-[14px] font-medium py-2.5 px-6 rounded hover:bg-[#5A3A1F] transition-colors">
            Continue
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[14px] leading-relaxed text-[#0f1623] py-4 px-20 hidden md:block">
        Terms, Privacy Disclosures Cookie Settings © Artestor Technologies LLP
      </div>
    </div>
  );
}

export default PaymentSuccess;
