import React from "react";
import Logo from "../../assets/manuecom.png";
import QRCode from "../../assets/qr.png";

function Payment() {
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
          <p className="text-[15px] hidden md:block font-medium text-[#6B4226] mb-6 text-center">
            Complete the payment by scanning the QR code below
          </p>
          <p className="block md:hidden text-[15px] font-bold text-[#6B4226] text-center">
            Complete the payment
          </p>

          {/* QR Code */}
          <div className="p-1 rounded-md border border-gray-400 my-6 md:mt-0">
            <img
              src={QRCode}
              alt="Payment QR Code"
              className="w-[200px] h-[200px]"
            />
          </div>

          {/* Small Note */}
          <p className="text-[12px] text-[#6B4226] mb-6 text-center">
            Scan the QR code and proceed with the payment
            <br /> as per the chosen plan
          </p>

          {/* Button */}
          <button className="w-full bg-[#6B4226] text-white text-[14px] font-medium py-2.5 px-6 rounded hover:bg-[#5A3A1F] transition-colors mt-20 md:mt-2">
            Continue
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-36 text-[14px] leading-relaxed text-[#0f1623] py-6 hidden md:block">
        Terms, Privacy Disclosures Cookie Settings © Artestor Technologies LLP
      </div>
    </div>
  );
}

export default Payment;
