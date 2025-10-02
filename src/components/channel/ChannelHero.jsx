import React from "react";

const ChannelHero = () => {
  const steps = [
    {
      number: "1",
      title: "Onboard",
      subtitle: "Verified startup first",
      description:
        "Verified startup first ensures that every founder actively seeking",
    },
    {
      number: "2",
      title: "Guide",
      subtitle: "Verified startup first",
      description:
        "Verified startup first ensures that every founder actively seeking",
    },
    {
      number: "3",
      title: "Network",
      subtitle: "Verified startup first",
      description:
        "Verified startup first ensures that every founder actively seeking",
    },
    {
      number: "4",
      title: "Allocate",
      subtitle: "Verified startup first",
      description:
        "Verified startup first ensures that every founder actively seeking",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Mobile View - Keep as is */}
      <div className="block md:hidden w-full">
        <section className="bg-gradient-to-b from-[#011032] to-[#01236d] w-full mx-auto rounded-b-2xl px-6 pt-6 pb-24 text-white shadow-lg">
          {/* Small tagline */}
          <p className="text-[11px] tracking-widest text-white/80 text-center mb-3">
            For Service Professionals
          </p>

          {/* Heading */}
          <h1 className="font-medium leading-snug mb-4 text-4xl text-center max-w-[340px] mx-auto">
            Grow Your Business by Partnering with India's Fastest-Growing
            Startup Ecosystem
          </h1>

          {/* CTA button */}
          <div className="flex justify-center">
            <button className="bg-white text-[#011032] font-medium w-36 h-10 rounded-md hover:opacity-90 transition mb-6 mt-4">
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
        <section className="py-8 mt-6">
          <div className="px-6 grid grid-cols-2 gap-x-8 gap-y-16 text-white">
            <div className="rounded-xl px-4 py-3 text-center text-sm font-medium border-2 border-white shadow-inner bg-[#002a30]">
              Verified Client Pipelines
            </div>
            <div className="rounded-xl px-4 py-3 border-2 border-white text-center text-sm font-medium shadow-inner bg-[#002a30]">
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
            <div className="rounded-xl px-4 py-3 text-center text-sm font-medium shadow-md bg-[#002a30] text-white w-40 border-2 border-white">
              Post-Sales Support
            </div>
          </div>
        </section>
      </div>

      {/* Desktop View - Updated */}
      <div className="hidden md:block w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[90%] mx-auto px-12 py-20">
          <div className="flex items-center justify-between gap-12">
            {/* Left side content */}
            <div className="flex-1">
              {/* Main heading */}
              <h1 className="text-4xl font-semibold text-gray-900 w-[85%] leading-[60px] mb-6">
                Grow Your Business by Partnering with India's Fastest-Growing Startup Ecosystem
              </h1>
              
              {/* Subheading */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Grow Your Business by Partnering with India's Fastest-Growing Startup
              </p>
              
              {/* Get Listed button */}
              <button className="bg-[#001032] text-white font-medium px-8 py-3 rounded-md hover:bg-[#001d5b] transition">
                Get Listed
              </button>
            </div>

            {/* Right side - Gray placeholder */}
            <div className="flex-1">
              <div className="bg-gray-300 h-96 rounded-lg"></div>
            </div>
          </div>
        </section>
        
        <hr className="h-px hidden md:block bg-gray-400 border-0 my-4 w-full" />

        {/* Steps Section */}
        <section className="w-full max-w-[95%] mx-auto px-12 py-20">
          <h2 className="text-3xl font-semibold leading-[36px] text-gray-900 mb-20">
            The startup ecosystem
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-left pr-4 border-r border-gray-500">
                {/* Large number */}
                <div className="text-5xl font-semibold leading-[36px] text-gray-900 mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-[36px] text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChannelHero;