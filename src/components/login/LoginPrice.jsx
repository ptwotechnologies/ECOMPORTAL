import React, { useState } from "react";
import Logo from "../../assets/manuecom.png";
import { FaRegCalendarAlt } from "react-icons/fa";

function LoginPrices() {
  const [date, setDate] = useState("");

  const pricingPlans = [
    {
      id: 1,
      title: "Onboarding Prices",
      subtitle: "Best for funds",
      range: "under $3M",
      price: "$3.5k + 0.75%",
      priceNote: "of fund size annualized cost",
      investments: "Investments: 15",
      regulatory: "State Regulatory",
      fees: "Fees: Variable",
      features: [
        "Fund admin",
        "Fund admin",
        "Legal fund formation",
        "* Pricing may vary with add-on services",
      ],
    },
    {
      id: 2,
      title: "Onboarding Prices",
      subtitle: "Best for funds",
      range: "under $3M",
      price: "$3.5k + 0.75%",
      priceNote: "of fund size annualized cost",
      investments: "Investments: 15",
      regulatory: "State Regulatory",
      fees: "Fees: Variable",
      features: [
        "Fund admin",
        "Fund admin",
        "Legal fund formation",
        "* Pricing may vary with add-on services",
      ],
    },
    {
      id: 3,
      title: "Onboarding Prices",
      subtitle: "Best for funds",
      range: "under $3M",
      price: "$3.5k + 0.75%",
      priceNote: "of fund size annualized cost",
      investments: "Investments: 15",
      regulatory: "State Regulatory",
      fees: "Fees: Variable",
      features: [
        "Fund admin",
        "Fund admin",
        "Legal fund formation",
        "* Pricing may vary with add-on services",
      ],
    },
    {
      id: 4,
      title: "Onboarding Prices",
      subtitle: "Best for funds",
      range: "under $3M",
      price: "$3.5k + 0.75%",
      priceNote: "of fund size annualized cost",
      investments: "Investments: 15",
      regulatory: "State Regulatory",
      fees: "Fees: Variable",
      features: [
        "Fund admin",
        "Fund admin",
        "Legal fund formation",
        "* Pricing may vary with add-on services",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen mt-4 md:mt-12 flex items-center justify-center p-4 md:p-8">
        <div className="w-full flex items-center justify-between gap-8">
          {/* Left Side */}
          <div className="hidden lg:flex w-1/3 flex-col justify-center items-center mb-[260px]">
            <div>
              <img
                src={Logo}
                alt="Artestor Logo"
                className="w-[438px] h-[438px]"
              />
            </div>

            <p className="text-[18px] font-normal text-[#6B4226] leading-relaxed max-w-xs -mt-40 text-center">
              Allows you to get funding,
              <br />
              resources and investor connect
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center items-center rounded-[20px] shadow-xl border-[19px] border-[#6B4226] p-8 md:p-12">
            {/* Logo */}
            <img
              src={Logo}
              alt=""
              className="w-[298px] h-[298px] md:-mt-[40px] -mt-[20px]"
            />

            {/* Subtitle */}
            <p className="hidden md:block text-center text-[15px] font-medium text-[#6B4226] border-2 border-gray-400 p-4 rounded-md mb-16 -mt-[28px]">
              Choose the best suited onboarding plan for you
            </p>

            <div className="w-full flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#6B4226]/60 scrollbar-track-transparent">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white border-t-[6px] text-[#6b4226] border-[#ba1e1e] shadow-md flex-shrink-0 flex flex-col w-[290px] snap-center"
                >
                  {/* Header */}
                  <div className="px-4 py-3">
                    <h3 className="text-[18px] font-bold mb-2 leading-relaxed">
                      {plan.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed my-1">
                      {plan.subtitle}
                    </p>
                    <p className="text-[12px] leading-relaxed my-1">
                      {plan.range}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-2 flex flex-col flex-grow">
                    {/* Price */}
                    <div className="mb-4">
                      <p className="text-[20px]">{plan.price}</p>
                      <p className="text-[12px] leading-relaxed">
                        {plan.priceNote}
                      </p>
                    </div>

                    {/* Investment Details */}
                    <div className="mb-4 space-y-2 pb-6 border-b text-[12px] border-gray-300">
                      <p>{plan.investments}</p>
                      <p>{plan.regulatory}</p>
                      <p>{plan.fees}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <p className="text-[14px] text-gray-800 mb-4">Features</p>
                      <div className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <p
                            key={index}
                            className="text-[14px] leading-relaxed text-gray-700 flex items-start"
                          >
                            {!feature.startsWith("*") && (
                              <span className="mr-1">✓</span>
                            )}
                            <span
                              className={
                                feature.startsWith("*")
                                  ? "text-[#6b4226] my-2"
                                  : ""
                              }
                            >
                              {feature}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Continue Button */}
                    <button className="w-full bg-[#6B4226] text-white text-[13px] font-medium py-2.5 px-4 rounded hover:bg-[#5A3A1F] transition-colors mt-auto mb-8">
                      Continue
                    </button>
                  </div>
                </div>
              ))}
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

export default LoginPrices;
