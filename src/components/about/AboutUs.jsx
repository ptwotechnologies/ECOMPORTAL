import React from "react";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <main className="font-poppins text-[#6B4226] min-h-screen">
      {/* HERO Section */}
      <section
        className="px-4 sm:px-6  md:px-12 pt-6 pb-12 md:pt-20 md:pb-24"
        aria-labelledby="aboutus-hero-heading"
      >
        <div className="max-w-[98%] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-24">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Mobile "About Us" label */}
            <p className="text-[10px] text-[#001032] underline font-semibold -mb-4 uppercase tracking-wide md:hidden">About us</p>

            <h1
              id="aboutus-hero-heading"
              className="font-bold leading-tight text-[28px] sm:text-[38px] md:text-[40px] md:leading-[58px]"
            >
              Taking your <br className="hidden sm:block" /> Step to the next level
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-[380px] whitespace-pre-line">
              Grow Your Business by Partnering with India’s{`\n`}
              Fastest-Growing Startup Ecosystem.
            </p>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#6B4226] text-white px-10 py-3 rounded-md font-semibold text-base md:text-lg shadow-md hover:bg-[#4a2812] hover:shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6B4226]"
              style={{ minWidth: "140px" }}
            >
              Enroll now
            </motion.button>
          </div>

          {/* Right Animation / Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div
              role="img"
              aria-label="Illustration showing growth"
              className="w-full max-w-[560px] aspect-[16/9] bg-[#E6E7EB] flex items-center justify-center text-gray-400 text-lg rounded-lg shadow"
            >
              Animation
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="sm:px-6 md:px-12 pb-10 md:pb-24"
        aria-labelledby="mission-aboutus-heading"
      >
        <div className="max-w-[98%] mx-auto relative hidden md:flex bg-[#6B4226] rounded-[40px] p-8 md:p-16 shadow-2xl overflow-hidden flex-col md:flex-row gap-12">
          
          <span className="hidden md:block absolute bottom-6 right-6 w-4 h-4 bg-white rounded-full shadow" />

          {/* Left content */}
          <div className="flex-1 space-y-8 md:space-y-10 max-w-3xl ">
            <div className="bg-[#E6E7EB] text-[#001032] rounded-lg px-6 py-4 shadow-sm w-full inline-block">
              <h3
                id="mission-aboutus-heading"
                className="text-2xl w-[50%] py-2 font-semibold leading-snug"
              >
                A mission to simplify growth for every startup
              </h3>
            </div>

            <div className="space-y-6 text-white text-base md:text-lg leading-relaxed font-medium">
              <p>
                Our mission is to bring everything that helps a startup grow into one space,
                while connecting the right people with the right support at the right time.
              </p>
              <p>
                We created this portal to make the startup journey less overwhelming and more
                focused.
              </p>
              <p>
                Most founders start with big ideas but end up spending most of their time
                navigating scattered services, chasing investors, and solving problems that
                shouldn’t be this hard in the first place.
              </p>
            </div>
          </div>

          {/* Right decorative box (desktop only) */}
          <div className="hidden md:block flex-none md:w-[297px] mx-auto rounded-[32px] shadow-xl bg-[#AD9687] h-[400px]" aria-hidden="true" />
        </div>

        {/* Mobile Mission Section */}
        <div className="md:hidden mt-8">
          <div className="flex items-center gap-2 mb-4 px-4">
            <div className="w-6 h-6 bg-[#001032] opacity-90 rounded-[6px]" />
            <h2 className="text-[#001032] font-bold text-lg">Our Mission</h2>
          </div>
          <div className="text-black rounded-lg py-6 space-y-4">
            <h3 className="text-white bg-[#001032] text-3xl opacity-90 p-6 font-bold leading-snug">
              A mission to simplify growth for every startup
            </h3>
            <p className=" px-4 text-sm leading-relaxed font-medium">
              Our mission is to bring everything that helps a startup grow into one space, while connecting the right people with the right support at the right time.
            </p>
            <p className="px-4 text-sm leading-relaxed">
              We created this portal to make the startup journey less overwhelming and more focused.
            </p>
            <p className="px-4 text-sm leading-relaxed">
              Most founders start with big ideas but end up spending most of their time navigating scattered services, chasing investors, and solving problems that shouldn’t be this hard in the first place.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
