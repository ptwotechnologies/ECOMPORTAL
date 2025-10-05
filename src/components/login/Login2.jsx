import React, { useState } from "react";
import Logo from "../../assets/manuecom.png";

function Login2() {
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleGetStarted = (userType) => {
    console.log("Get started as:", userType);
    // Navigate to respective registration/login page
  };

  const userTypes = [
    {
      id: "startup",
      title: "Startup",
      description:
        "Get exclusive connect with others, get listed and unlock more benefits",
      bgColor: "bg-[#6B4226]",
      hoverColor: "hover:bg-[#5A3A1F]",
    },
    {
      id: "artisan",
      title: "Artisans",
      description:
        "Get exclusive connect with others, get listed and unlock more benefits",
      bgColor: "bg-[#4A7C59]",
      hoverColor: "hover:bg-[#3D6B4A]",
    },
    {
      id: "service-professional",
      title: "Service Professional",
      description:
        "Get exclusive connect with others, get listed and unlock more benefits",
      bgColor: "bg-[#4A5578]",
      hoverColor: "hover:bg-[#3D4663]",
    },
  ];

  return (
    <>
       <div className="min-h-screen mt-4 md:mt-12 flex items-center justify-center p-4 md:p-8">
              <div className="w-full max-w-[90%] flex items-center">
                {/* Left Side - centered */}
                <div className="hidden lg:flex flex-col justify-center items-center mb-[260px] w-[40%]">
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
                <div className="w-full md:w-[60%] flex flex-col justify-center items-center rounded-[20px] shadow-xl border-[19px] border-[#6B4226] p-8 md:px-6 md:py-12">
            {/* Logo */}
            <img
              src={Logo}
              alt=""
              className="w-[298px] h-[298px] md:-mt-[40px] -mt-[20px]"
            />

            {/* Subtitle */}
            <p className="text-center text-[15px] font-medium text-[#6B4226] mb-8 -mt-[20px]">
              Get the most benefits from our pool of possible clients for you
            </p>

            {/* Question */}
            <div className="w-full mb-6">
              <p className="text-center text-[16px] max-w-[300px] mx-auto text-[#6B4226] p-4 md:p-3 border border-gray-600 rounded-md mb-6">
                Which side are you on?
              </p>
            </div>

            {/* Radio Button Choices for Small Devices */}
            <div className="w-full md:hidden space-y-3 mb-6">
              {userTypes.map((type) => (
                <label
                  key={type.id}
                  className="flex items-center space-x-3 cursor-pointer p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="userType"
                    value={type.id}
                    checked={selectedUserType === type.id}
                    onChange={() => setSelectedUserType(type.id)}
                    className="w-5 h-5 text-[#6B4226] focus:ring-[#6B4226]"
                  />
                  <span className="text-[15px] text-[#6B4226] font-medium">
                    {type.title}
                  </span>
                </label>
              ))}
            </div>

            <button
              className="bg-[#6B4226] block md:hidden w-full p-4 text-white rounded-md hover:bg-[#5A3A1F]"
              disabled={!selectedUserType}
              onClick={() => handleGetStarted(selectedUserType)}
            >
              Continue
            </button>

            {/* User Type Cards for Medium+ Devices */}
            <div className=" hidden md:grid grid-cols-1 w-full md:grid-cols-3 gap-4 md:my-12">
              {userTypes.map((type) => (
                <div
                  key={type.id}
                  className={`${type.bgColor} rounded-lg p-5 flex flex-col items-start text-white transition-all duration-200 ${type.hoverColor} cursor-pointer`}
                  onClick={() => setSelectedUserType(type.id)}
                >
                  {/* Icon */}
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-10 h-10 bg-white mb-3"></div>

                    {/* Title */}
                    <h3 className="text-[16px] font-semibold mb-3">
                      {type.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] leading-relaxed mb-4 flex-grow">
                    {type.description}
                  </p>

                  {/* Get Started Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetStarted(type.id);
                    }}
                    className="ml-auto bg-white text-[#1F2937] text-[13px] font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex"
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
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

export default Login2;
