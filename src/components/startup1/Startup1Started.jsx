
import React from "react";

const Startup1Started = () => {
  return (
    <div>
      <section className="hidden md:block">
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-[95%] w-full grid grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="flex flex-col justify-between">
              {/* Heading */}
              <h2 className="text-4xl leading-snug font-semibold text-[#0D1B2A] mb-8">
                How do I get started?
              </h2>

              {/* Steps */}
              <div className="flex flex-col space-y-8 pt-6 text-lg font-medium text-gray-800 leading-relaxed">
                <div className="border-b border-[#979797] pb-8">
                  Choose your on-boarding plan
                </div>
                <div className="border-b border-[#979797] pb-8">
                  Create your profile and list your services
                </div>
                <div className="border-b border-[#979797] pb-8">
                  Get approved in 24 hours
                </div>
                <div className="border-b border-[#979797] pb-8">
                  Go live on the portal
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between mt-12">
                <span className="text-4xl leading-relaxed font-medium text-[#1C1C1C]">
                  Design & Branding
                </span>
                <span className="bg-[#E5E5E5] rounded-full w-20 h-20 flex items-center justify-center text-[20px] font-semibold text-[#1C1C1C] mr-10">
                  1/4
                </span>
              </div>
            </div>

            {/* Right Section - Placeholder box */}
            <div className="bg-[#D9D9D9] mt-32 rounded-lg h-[400px] w-full"></div>
          </div>
        </div>
      </section>
      <section className="hidden md:block py-12 px-6">
        <h1 className="px-8 text-3xl font-semibold py-12 leading-snug">
          Trusted by professionals
        </h1>
        <div className="max-w-[95%] mx-auto">
          <div className="flex gap-6 overflow-x-auto py-8 md:py-4">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[90%] md:w-[40%] bg-white border border-[#00103280] rounded-md flex flex-col md:flex-row overflow-hidden"
              >
                <p className="text-gray-600 md:mb-4 px-4 pt-6 md:py-20 md:w-2/3 leading-relaxed">
                  "Breaks down your numbers, shows you how long your runway
                  actually is, and where you’re bleeding cash. Breaks down your
                  numbers, shows you how long your runway actually is, and where
                  you’re bleeding cash"
                </p>

                <div className="px-2 pt-8 md:p-10 h-40 md:h-full flex flex-row-reverse md:flex-col items-start justify-center gap-2">
                  <img
                    src="/.jpg"
                    alt="Card Image"
                    className="w-full h-full rounded-md object-cover bg-gray-200 hidden md:block"
                  />
                  <div className="md:hidden w-[60px] h-[100px] md:w-1/3 bg-[#4E6C50] rounded-full md:h-32 ml-6 md:ml-0"></div>
                  <div>
                    <p className="text-sm text-gray-500 h-[100px] md:border-none border-r border-gray-500 pr-8 md:pr-0">
                      Vivek <br /> T Company Name <br /> Startup
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="block md:hidden">
        <hr className="my-8 border-gray-600/80" />
        <div className=" md:hidden min-h-screen flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-relaxed text-[#0D1B2A] md:text-center py-4">
            How do I get started?
          </h2>

          {/* Step Cards */}
          <div className="w-full mt-6 rounded-md">
            {[
              {
                title: "Choose your on-boarding plan",
                desc: [
                  "All plans include access to the portal and startup requests",
                  "Just pick what fits your business goals",
                ],
              },
              {
                title: "Create your profile and list your services",
                desc: [
                  "Add categories, pricing, sample work, and turnaround timelines",
                  "We use this to match you with real startup needs",
                ],
              },
              {
                title: "Get approved in 24 hours",
                desc: [
                  "Our team reviews all listings to ensure legitimacy and relevance",
                ],
              },
              {
                title: "Go live on the portal",
                desc: [
                  "Get discovered by verified startups, respond to interest, and convert leads directly",
                ],
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="px-6 pt-12 bg-[#634228] text-white leading-relaxed"
              >
                {/* Icon Placeholder */}
                <div className="w-[40px] h-[40px] bg-gray-300 rounded-sm mb-3"></div>

                {/* Title */}
                <h3 className="text-xl font-semibold my-4 relaxed-[56px]">
                  {step.title}
                </h3>

                {/* Description */}
                <ul className="space-y-2 my-4 text-sm">
                  {step.desc.map((d, i) => (
                    <li key={i} className="flex items-start leading-[28px]">
                      <span className="mr-2">→</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Animation Placeholder */}
                <div className="bg-white rounded-md h-64 flex items-center justify-center text-xs text-gray-500">
                  Animation
                </div>

                {/* Divider */}
                <hr className="mt-12 border-white/80" />
              </div>
            ))}
          </div>

          {/* Final CTA Section */}
          <div className="w-full text-center py-10">
            <h3 className="text-2xl leading-[60px] font-bold text-[#634228] mb-4">
              Ready to on-board...?
            </h3>
            <button className="bg-[#634228] border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-[#875f40] leading-relaxed">
              Click here & Get started
            </button>
          </div>

          {/* Info Card Section */}
          <div className="max-w-sm w-full border border-gray-500 shadow-md rounded-2xl px-6 py-4 pt-12 my-6">
            <div className="text-sm text-[#1C1C1C] mb-4">
              <h2 className="leading-[24px] pb-4 text-sm font-medium">
                You’ve got the skills. We’ve got the startups.{" "}
              </h2>
              <p className="leading-[24px] text-sm">
                Instead of spending money on ads, pitching endlessly, or chasing
                unclear leads, plug into a system built for real, verified work.
                Together with a straightforward way to grow your practice with
                startups that are filtered and ready to move.
              </p>
            </div>
            <div className="flex items-center justify-between">
              {/* Text */}
              <div className="text-[14px] text-[#0D1B2A] font-medium">
                Join once. <br /> Let the ecosystem work for you
              </div>

              {/* Vertical Divider */}
              <div className="h-16 w-px bg-gray-300 mx-2"></div>

              {/* Button */}
              <button className="bg-[#634228] text-white rounded-full px-4 py-3 text-sm w-24 h-24 font-semibold">
                Get Listed
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Startup1Started;
