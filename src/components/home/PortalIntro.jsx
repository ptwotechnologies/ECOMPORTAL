import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Portal2 from "../../assets/portalIntro/portal2.png";
import Portal1 from "../../assets/portalIntro/portal1.png";
import Portal3 from "../../assets/portalIntro/portal3.png";
import Portal4 from "../../assets/portalIntro/portal4.png";
const PortalIntro = () => {
  const cards = [
    {
      name: "",
      image: Portal1,
      para: "You’re building a startup that solves a real-world problem",
    },
    {
      name: "Investors",
      image: Portal2,
      para: "You want incubated startups curated to your domain",
    },
    {
      name: "Service Professionals",
      image: Portal3,
      para: "You want startups curated to your domain",
    },
  ];
  const mobileCards = [
    {
      name: "Startups",
      image: Portal1,
      para: "You’re building a startup that solves a real-world problem ",
    },
    {
      name: "Investors",
      image: Portal2,
      para: "You want incubated startups curated to your domain",
    },
    {
      name: "Service Professionals",
      image: Portal3,
      para: "You want startups curated to your domain",
    },
  ];

  return (
    <>
      <div className="hidden md:block bg-[#FCF5E5] w-full h-full mt-16">
        {/* Brown Section */}
        <section className="w-full rounded-[40px] bg-[#6B4226] px-16 py-12 pb-20 text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <h2 className="text-4xl font-semibold mb-14">
            Who is this portal for?
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-start px-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-6"
              >
                <div className="border-t border-white/50 w-full h-1"></div>

                <div className="h-6 flex items-center justify-center">
                  {card.name && (
                    <span className="px-2 bg-[#6B4226] text-white text-2xl font-medium">
                      {card.name}
                    </span>
                  )}
                </div>

                <div className="w-full aspect-[5/4] shadow-md rounded-[10px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name || "portal image"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Paragraph */}
                <p className="text-[16px] leading-[30px] max-w-xs">
                  {card.para}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Section */}
        <div className="flex flex-col justify-center items-center mt-20 text-[#6B4226] gap-6">
          <h1 className="text-3xl md:text-4xl font-medium leading-[1.2] text-center">
            Found yourself nodding?
          </h1>
          <h6 className="text-sm font-medium leading-[30px] text-center">
            Cool, let’s show you around
          </h6>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-white text-[18px] leading-[35px] mt-6 w-full max-w-xl">
            <button className="bg-[#6B4226] rounded-[5px] px-6 py-3 w-full">
              I’d Like To Get Me Started
            </button>
            <button className="bg-[#6B4226] rounded-[5px] px-6 py-3 w-full">
              How it works
            </button>
          </div>
        </div>

        {/* Blue Section */}
        <div className="relative bg-[#1a2744] opacity-90 w-full px-6 md:px-16 py-20 md:py-28 mt-24 rounded-t-[30px]">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#001032] opacity-90 rounded-[30px]"></div>

          <div className="relative z-10 max-w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left column */}
            <div>
              <h2 className="text-[36px] md:text-[42px] font-semibold text-white leading-[50px] mb-6">
                What makes us different?
              </h2>
              <p className="text-white text-sm mb-8 font-light opacity-90">
                You see, we’ve already spent years chasing investors, burning
                cash on Facebook ads, and paying agencies that promised the
                moon, guess what? most of it went nowhere.
              </p>

              <p className="font-medium text-sm mb-10 text-white leading-relaxed">
                That’s when we realized —
                <span className="block mt-3 text-white text-xl md:text-2xl font-semibold leading-snug">
                  The problem wasn’t our ideas.
                  <br />
                  It was the system around us.
                </span>
              </p>

              <hr className="border-gray-700 my-10" />

              <h3 className=" mb-4 text-white text-[18px] leading-[30px]">
                Really! The system is built to drain founders
              </h3>
              <p className="text-white/90 font-normal text-sm leading-[28px] mb-6 font-poppins">
                First, the ad platforms charge you for every single click
                (doesn’t matter if those clicks convert, they still get paid.)
                And just when you think you’re learning the ropes…
                <br />
                They start selling you courses on how to spend even more. I
                mean, seriously? Then comes the agencies with their retainers
                and compliance firms pushing paperwork with fear. Add legal
                fees, branding costs, social media retainers.
                <br />
                And while all this eats away at your time, money, and energy—
                <br />
                The one thing you actually need — real users and real investors
                — stays completely out of reach.
                <br />
                Phew..!
              </p>

              <div className="space-y-6">
                <p className="border-t border-gray-600 pt-6 text-white text-[18px]">
                  Keep financial accurate and accessible
                </p>
                <p className="border-y border-gray-600 py-6 text-white text-[18px]">
                  Receive compliance and tax support
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-y-24 gap-x-12 text-center text-white w-full max-w-sm">
                <div>
                  <p className="text-[28px] font-bold">150+</p>
                  <p className="text-[15px] opacity-80">
                    Service Professionals
                  </p>
                </div>
                <div>
                  <p className="text-[28px] font-bold">500+</p>
                  <p className="text-[15px] opacity-80">
                    Startups & Businesses
                  </p>
                </div>
                <div>
                  <p className="text-[28px] font-bold">10+</p>
                  <p className="text-[15px] opacity-80">Venture Firms</p>
                </div>
                <div>
                  <p className="text-[28px] font-bold">50+</p>
                  <p className="text-[15px] opacity-80">
                    Angel Investors & VCs
                  </p>
                </div>
              </div>

              <div className="mt-20 w-full bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center">
                <img
                  src={Portal4}
                  alt=""
                  className="w-full max-w-3xl max-h-[500px] object-cover rounded-md"
                />
              </div>

              <div className="bg-white mt-6 text-[#001032] w-full px-10 py-4 rounded-full font-medium shadow-md text-[16px] text-center">
                Simply, a one stop solution for startups & founders!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block md:hidden w-full">
        <div className="text-[#4E6C50] py-8 px-4">
          <h2 className="text-4xl w-[80%] leading-[50px] font-poppins font-semibold my-4">
            Who is this portal for?
          </h2>
          <div className="flex overflow-x-auto gap-4 py-4">
            {mobileCards.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col gap-4 w-32"
              >
                <h2 className="font-semibold text-xl truncate whitespace-nowrap overflow-hidden">
                  {item.name}
                </h2>

                <div className="relative">
                  <div className="bg-[#9c9da1] h-48 w-full rounded-md"></div>

                  {/* Arrow icon at image's bottom-right */}
                  <div className="absolute bottom-4 right-4 text-white p-2 rounded-full bg-[#7e7f82] border border-white">
                    <FaArrowRight size={16} />
                  </div>
                </div>

                <p className="text-xs">{item.para}</p>
              </div>
            ))}
          </div>
          <div className="flex mt-10 flex-col text-center items-center leading-[50px] justify-center">
            <h3 className="font-bold text-lg">Found yourself nodding?</h3>
            <p className="text-sm font-semibold mt-3">Cool, let’s show you around</p>
          </div>
          <div className="flex mt-10 text-center items-center gap-6 justify-center">
            <button className="text-sm px-4 py-2 bg-[#6B4226] rounded-md text-white">
              How it works
            </button>
            <button className="text-sm px-4 py-2 text-[#6B4226] border-2 border-[#6B4226] rounded-md">
              I’d Like To Get Me Started
            </button>
          </div>
        </div>
        {/* Blue Section  */}
        <div className="rounded-t-md bg-[#001032] opacity-95 text-white px-6 py-8 ">
          <h1 className="text-3xl leading-relaxed ">
            Created by founders, who needed it first
          </h1>
          <p className="text-[15px] font-extralight pt-6 leading-relaxed">
            You see, we’ve already spent years chasing investors, burning cash
            on Facebook ads, and paying agencies that promised the moon, guess
            what? most of it went nowhere.
          </p>
          <p className="text-[15px] font-extralight my-4">
            That’s when we realized — The problem wasn’t our ideas. It was the
            system around us.
          </p>

          <div className="bg-[#616B80] my-10 px-4 py-3 text-sm rounded-full">
            Really! The system is built to drain founders…
          </div>
          <p className="my-4">
            First, the ad platforms charge you for every single click (doesn’t
            matter if those clicks){" "}
            <span className="underline underline-offset-4 cursor-pointer">
              {" "}
              See more...
            </span>
          </p>
          <hr className="my-10" />
          <div className="bg-[#616B80] my-10 px-4 py-3 text-sm rounded-full">
            That’s when we decided, we need to fix this...
          </div>
          <p className="text-[15px] my-4">
            So our team sat together, spent months on planning, strategizing,
            building and came up{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              {" "}
              See more...
            </span>
          </p>
        </div>

        <div className="bg-[#616B80] text-white mx-10 my-10 px-4 py-3 text-sm rounded-full">
          Really! The system is built to drain founders…
        </div>
      </div>
    </>
  );
};

export default PortalIntro;
