import React from "react";

const HomePage = () => {
  const features = [
    "Verified Client ipelines",
    "Admin-Controlled Payments",
    "Post-Sales Support",
    "Automated Client Matching",
    "Industry Experts Guidance",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="block md:hidden w-full">
        <section className="bg-[#2D3A80] w-full mx-auto rounded-b-2xl px-6 pt-6 pb-24 text-white shadow-lg">
          {/* Small tagline */}
          <p className="text-[11px] tracking-widest text-white/80 text-center mb-3">
            For Service Professionals
          </p>

          {/* Heading */}
          <h1 className="font-medium leading-snug mb-4 text-4xl text-center max-w-[340px] mx-auto">
            Grow Your Business by Partnering with India’s Fastest-Growing
            Startup Ecosystem
          </h1>

          {/* CTA button */}
          <div className="flex justify-center">
            <button className="bg-white text-[#2D3A80] font-medium w-36 h-10 rounded-md hover:opacity-90 transition mb-6 mt-4">
              Get Listed
            </button>
          </div>
        </section>

        {/* Overlapping screenshot */}
        <div className="relative -mt-20 px-5">
          <div className="shadow-2xl overflow-hidden rounded-xl mx-auto border border-black max-w-[360px]">
            <img
              src="/image1.png"
              alt="Investments"
              className="w-full md:h-40 h-80 object-cover"
            />
          </div>
        </div>

        {/* Feature chips */}
        <section className="py-8 mt-6 ">
          <div className="px-6 grid grid-cols-2 gap-x-8 gap-y-16 text-white">
            <div className="rounded-xl px-4 py-3 text-center text-sm font-medium border-2 border-white shadow-inner bg-[#d4a373]">
              Verified Client Pipelines
            </div>
            <div className="rounded-xl px-4 py-3 border-2 border-white text-center text-sm font-medium shadow-inner bg-[#d4a373]">
              Admin-Controlled Payments
            </div>
            <div className="rounded-xl px-4 py-3 border-2 border-white text-center text-sm font-medium shadow-md bg-[#002A30] text-white">
              Industry Expert Guidance
            </div>
            <div className="rounded-xl px-4 py-3 border-2 border-white text-center text-sm font-medium shadow-md bg-[#002A30] text-white">
              Automated Client Matching
            </div>
          </div>

          <div className="px-6 mt-16 flex justify-center">
            <div className="rounded-xl px-4 py-3 text-center text-sm font-medium shadow-md bg-[#6B4226] text-white w-40 border-2 border-white">
              Post-Sales Support
            </div>
          </div>
        </section>
      </div>

      <div className="hidden md:block w-full px-12 mt-16">
        <section className="w-full max-w-[95%] mx-auto grid grid-cols-2 gap-16 items-center">
          <div className="w-full">
            <h1 className="font-semibold text-4xl leading-[60px] text-[#6B4226] mb-4">
              Grow Your Business by Partnering with India’s Fastest-Growing
              Startup Ecosystem
            </h1>

            <p className="text-gray-800 text-[20px] w-[80%] leading-[50px] mb-6">
              Grow Your Business by Partnering with India’s Fastest-Growing
              Startup
            </p>

            <button className="bg-[#6B4226] text-white font-medium px-10 py-3 rounded-md hover:opacity-90 transition mb-8 mt-4">
              Get Listed
            </button>
          </div>

          <div className="flex flex-col w-full justify-center bg-[#D8D8D8] h-full gap-10 rounded-md my-20"></div>
        </section>
      </div>
      <hr className="w-full border-0 h-[1px] bg-gray-400 mt-24 hidden md:block" />

      <div className="w-full max-w-[95%] mx-auto px-6 py-12 my-12 hidden md:block">
        <div className="hidden md:flex justify-center w-[70%] mx-auto items-center">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-10 relative border-r-2 border-gray-300"
            >
              {/* Icon placeholder */}
              <div className="w-14 h-14 rounded-md bg-gray-200 mb-4"></div>

              {/* Text */}
              <p className="text-sm font-semibold text-[#1C1C1C] leading-snug">
                {feature}
              </p>

              {/* Divider (except last) */}
              {i !== features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-4 h-10 "></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-10 text-center">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`flex flex-col items-center ${
                  i === features.length - 1 ? "col-span-2" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-gray-200 mb-3"></div>

                {/* Text */}
                <p className="text-sm font-semibold text-[#1C1C1C] leading-snug">
                  {feature.split(" ")[0]}{" "}
                  <span className="block font-normal text-gray-600">
                    {feature.split(" ").slice(1).join(" ")}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
