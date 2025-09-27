import React from "react";

export default function ValueSection() {
  return (
    <main className="font-poppins min-h-screen">
      {/* Mobile Layout (below 720px) */}
      <div className="md:hidden w-full">
        {/* Section 1: Orange Card with Blue Top Border */}
        <section
          className="bg-[#C76B3DCC] pt-8 pb-12"
          aria-label="Where startups, experts and capital grow together"
        >
          {/* Orange Square and Our Vision Header */}
          <div className="flex flex-col gap-3 mb-6 px-6">
            <div
              className="w-10 h-10 bg-[#C76B3D] rounded-md flex-shrink-0"
              aria-hidden="true"
            />
            <h3
              className="text-white text-xl font-semibold"
              role="heading"
              aria-level="3"
            >
              Our Vision
            </h3>
          </div>

          <h2
            className="text-white bg-[#C76B3D] font-semibold text-3xl mb-6 leading-snug py-4 px-6"
            role="heading"
            aria-level="2"
          >
            Where startups, experts and capital grow together
          </h2>

          <div className="space-y-4 px-6">
            <p className="text-white text-[16px] font-normal leading-relaxed">
              Our vision is to build a self-sustaining ecosystem where startups
              grow alongside verified experts, service providers, and investors
              without overspending on ads or branding.
            </p>
            <p className="text-white text-[16px] font-normal leading-relaxed">
              We believe that ideas should not be held back by limited budget or
              lack of access.
            </p>
            <p className="text-white text-[16px] leading-relaxed font-normal">
              That's why rather than creating yet another portal, we focus more
              on making the essential parts of building a business actually
              accessible.
            </p>
          </div>
        </section>

        {/* Section 2: Green Section */}
        <section
          className="bg-[#657D67] pt-8 pb-12"
          aria-label="Where startups, experts and capital grow together"
        >
          <div className="flex flex-col gap-3 mb-6 px-6">
            <div
              className="w-10 h-10 bg-[#4E6C50] rounded-md flex-shrink-0"
              aria-hidden="true"
            />
            <h3
              className="text-white text-xl font-semibold"
              role="heading"
              aria-level="3"
            >
              Our Aim
            </h3>
          </div>

          <h2
            className="text-white bg-[#4E6C50] font-semibold text-3xl mb-6 leading-snug py-4 px-6"
            role="heading"
            aria-level="2"
          >
            Because founders deserve a better system
          </h2>

          <div className="space-y-4 px-6">
            <p className="text-white text-[16px] font-normal leading-relaxed">
              Our aim is to remove the friction that slows founders down and
              make growth feel more doable and less chaotic.
            </p>
            <p className="text-white text-[16px] font-normal leading-relaxed">
              Most startups struggle because the support around them is either
              too expensive, too scattered, or simply not designed for people
              who are just starting out.
            </p>
            <p className="text-white text-[16px] leading-relaxed font-normal">
              Instead of making you run around and figure it all out alone,
              we’ve built a place where everything works together.
            </p>
          </div>
        </section>

        {/* Section 3: Orange Section with Cards */}
        <section
          className="pt-8 pb-6"
          aria-label="A system that evolves with you"
        >
          {/* Brown Square and Life Time Value Header */}
          <div className="flex flex-col gap-3 mb-6 px-6">
            <div
              className="w-10 h-10 bg-[#C76B3D] rounded-md flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-[18px] font-semibold tracking-tight">
              Life Time Value
            </span>
          </div>

          <h4
            className="text-white bg-[#C76B3D] font-semibold text-3xl mb-6 leading-snug py-4 px-6"
            role="heading"
            aria-level="4"
          >
            A system that evolves with you
          </h4>

          {/* Individual cards inside */}
          <div className="space-y-4 flex flex-col">
            <div className="rounded-md p-5 mx-4 border border-gray-400 shadow-md shadow-gray-400">
              <p className="text-[#1F2435] text-sm leading-relaxed font-normal">
                Once you're here, the system keeps building on what you've
                already done, so you can focus more on your growth, and less on
                managing the back-end.
              </p>
            </div>
            <div className="rounded-md p-5 mx-4 border border-gray-400 shadow-md shadow-gray-400">
              <p className="text-[#1F2435] text-sm leading-relaxed font-normal">
                Startups don't need to keep switching platforms every time they
                reach a new milestone. This portal allows you to evolve while
                staying connected with updated tools, advanced support, and a
                growing network of trusted people who understand your space.
              </p>
            </div>
            <div className="rounded-md p-5 mx-4 border border-gray-400 shadow-md shadow-gray-400">
              <p className="text-[#1F2435] text-sm leading-relaxed font-normal">
                You don't have to start from scratch every few months
              </p>
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-6"></div>
      </div>

      {/* Desktop Layout (720px and above) */}
      <div className="hidden md:block w-full max-w-[98%] mx-auto px-4 sm:px-6 py-2 md:py-12 md:px-12">
        {/* Top Row - Two Cards Side by Side */}
        <div
          className="grid grid-cols-2 gap-8 mb-8 p-12"
          style={{
            backgroundImage: "url('Rectangle.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "28px",
          }}
        >
          {/* Green Card - Our Aim */}
          <section
            className="bg-[#657D67] rounded-3xl p-8 shadow-lg"
            aria-label="Because founders deserve a better system"
          >
            <h2
              className="text-white font-bold text-[28px] mb-8 leading-[1.2] tracking-tight"
              role="heading"
              aria-level="2"
            >
              Where startups, experts and capital grow together
            </h2>

            <div className="space-y-6">
              <p className="text-white text-[16px] leading-[1.6] font-normal">
                Our vision is to build a self-sustaining ecosystem where
                startups grow alongside verified experts, service providers, and
                investors without overspending on ads or branding.
              </p>
              <p className="text-white text-[16px] leading-[1.6] font-normal">
                We believe that ideas should not be held back by limited budget
                or lack of access.
              </p>
              <p className="text-white text-[16px] leading-[1.6] font-normal">
                That's why rather than creating yet another portal, we focus
                more on making the essential parts of building a business
                actually accessible.
              </p>
            </div>
          </section>

          {/* Orange Card - Our Vision */}
          <section
            className="bg-[#C46E43] rounded-3xl p-8 shadow-lg"
            aria-label="Where startups, experts and capital grow together"
          >
            <h2
              className="text-white font-bold text-[28px] mb-8 leading-[1.2] tracking-tight"
              role="heading"
              aria-level="2"
            >
              Because founders deserve a better system
            </h2>

            <div className="space-y-6">
              <p className="text-white text-[16px] leading-[1.6] font-normal">
                Our aim is to remove the friction that slows founders down and
                make growth feel more doable and less chaotic.
              </p>
              <p className="text-white text-[16px] leading-[1.6] font-normal">
                Most startups struggle because the support around them is either
                too expensive, too scattered, or simply not designed for people
                who are just starting out.
              </p>
              <p className="text-white text-[16px] leading-[1.6] font-normal">
                Instead of making you run around and figure it all out alone,
                we've built a place where everything works together.
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Section - Full Width Dark Blue */}
        <section
          className="flex flex-col p-8 gap-16"
        >
          <h2
            className="text-white w-[40%] py-4 px-8 rounded-md bg-[#001032] opacity-90 font-semibold text-[32px]"
            role="heading"
            aria-level="2"
          >
            A system that evolves with you
          </h2>

          {/* Content Grid */}
          <div className="flex flex-col gap-16">
            {/* First Card - Gray */}
            <div className="bg-[#8a8d95] w-[60%] rounded-md px-6 py-4">
              <p className="text-white text-[15px] leading-[1.5] font-normal">
                Once you're here, the system keeps building on what you've
                already done, so you can focus more on your growth, and less on
                managing the back-end.
              </p>
            </div>

            {/* Second Card - Light Gray */}
            <div className="bg-[#d6d2ca] w-[75%] rounded-md px-6 py-4">
              <p className="text-gray-800 text-[15px] leading-[1.5] font-normal">
                Startups don't need to keep switching platforms every time they
                reach a new milestone. This portal allows you to evolve while
                staying connected with updated tools, advanced support, and a
                growing network of trusted people who understand your space.
              </p>
            </div>
          </div>

            <div className="bg-[#d7d1c4] w-[45%] rounded-md px-6 py-6">
              <p className="text-[#1F2937] text-[18px] font-medium leading-[1.5] ">
                You don't have to start from scratch every few months
              </p>
            </div>
        </section>
      </div>
    </main>
  );
}
