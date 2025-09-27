import React from "react";

const HomePage = () => {
  const features = [
    "Free Expert Guidance",
    "Real Audience Access",
    "Cross-Industry Community",
    "Real Audience Access",
    "No Hidden Fees",
  ];

  const artisans = [
    "You're building a startup that solves a real-world problem",
    "You want incubated startups curated to your domain",
    "You want startups curated to your domain",
    "You want incubated startups curated to your domain",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="block md:hidden w-full">
        <section className="bg-[#6B4226] w-full max-w-4xl mx-auto rounded-xl px-6 py-8 pb-20 text-white shadow-lg">
          <div className="flex justify-start mb-4">
            <span className="bg-gradient-to-r from-[#6B4226]  to-[#F5EDE4] text-white px-4 py-1 rounded-full text-[9px] leading-[30px]">
              We’ve built a platform for artisans
            </span>
          </div>

          <h1 className="font-semibold leading-[59px] mb-4 text-4xl">
            Everything you need to scale your startUp
          </h1>

          <p className="text-[14px] leading-[35px] text-[#F5EDE4] mb-6">
            Get expert-backed support, investor visibility, low-cost services
            and organic audience access — all in one system
          </p>

          <button className="bg-white text-[#6B4226] font-medium w-[163px] h-[60px] rounded-md hover:opacity-90 transition mb-6 mt-4">
            Get Started
          </button>

          <hr className="border-[#F5EDE4]/40 my-8 mx-4" />

          <div className="flex justify-center mb-6">
            <span className="w-[306px] h-[50px] rounded-full bg-gradient-to-r from-[#6B4226] via-[#6B4226] to-[#F5EDE4] text-white text-xs font-medium flex items-center justify-center">
              Built for artisans who wants to grow
            </span>
          </div>

          <div className="flex justify-center pb-20 gap-6">
            {[
              "Investors are already waiting for startups like you",
              "You get reduced-cost agency services (90% off market rates)",
            ].map((text, i) => (
              <div key={i} className="flex w-1/2 flex-col gap-8">
                <div className="bg-[#F5EDE4] rounded-2xl h-60 shadow-inner"></div>
                <p className="text-white text-[12px] px-4">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col justify-center gap-32">
          <div className="shadow-lg overflow-hidden rounded-[20px] mx-8 -my-28 border border-black">
            <img
              src="/image1.png"
              alt="Investments"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="border w-1/3 mx-auto border-[#6B4226] text-[#6B4226] text-lg px-4 mt-6 py-4 rounded-md">
            Learn more
          </button>
        </div>
      </div>

      <div className="hidden md:block w-full px-12 py-12 mt-8">
        <section className="w-full max-w-[95%] mx-auto grid grid-cols-2 gap-16 items-center">
          <div>
            <span className="px-4 py-3 rounded-full text-[12px] text-white bg-gradient-to-r from-[#6B4226] via-[#6B4226] to-[#F5EDE4] cursor-pointer ">
              We’ve built a platform for startups →
            </span>

            <h1 className="font-semibold text-4xl leading-[50px] text-[#6B4226] mt-10 mb-4">
              Everything you need to scale your startUp
            </h1>

            <p className="text-[#6B4226] text-[16px] leading-[35px] mb-6">
              Get expert-backed support, investor visibility, low-cost services
              and organic audience access — all in one system
            </p>

            <button className="bg-[#6B4226] text-white font-medium px-10 py-3 rounded-md hover:opacity-90 transition mb-8 mt-4">
              Get Started
            </button>

            <div className="flex justify-start mt-20 my-4">
              <span className="px-4 py-3 rounded-full text-[12px] text-white bg-gradient-to-r from-[#6B4226] via-[#6B4226] to-[#F5EDE4] cursor-pointer">
                We’ve built a platform for startups →
              </span>
            </div>

            <ul className="space-y-8 mt-16">
              {[
                "Investors are already waiting for startups like you",
                "Free guidance from experts to become investor-ready",
                "You can tap into real audience without running a single ad",
                "Access low-cost services and investor visibility all in one system",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-6">
                  <span className="w-[34px] h-[34px] rounded-sm bg-green-800"></span>
                  <span className="text-black text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-10 mt-20">
            <img
              src="/image1.png"
              alt="Investments"
              className="w-full rounded-xl object-cover"
            />
            <button className="bg-[#6B4226] text-white font-medium px-10 py-3 rounded-md hover:opacity-90 transition text-lg">
              See How It Works →
            </button>
          </div>
        </section>
      </div>

      <div className="w-full max-w-[95%] mx-auto px-6 py-12">
        <div className="hidden md:flex justify-around items-center mb-12">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col flex-wrap items-center gap-8">
              <div className="w-[80px] h-[80px] rounded-full bg-white border shadow-md shadow-gray-300 border-gray-300 mb-2"></div>
              <p className="text-black text-sm font-medium">{feature}</p>
            </div>
          ))}
        </div>

        <div className="block md:hidden bg-[#6B4226] text-white rounded-xl px-6 py-8 text-center">
          <div className="grid grid-cols-2 gap-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-4 ${
                  i === features.length - 1 ? "col-span-2" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white border border-gray-300 mb-2"></div>
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 hidden md:block">
          <h2 className="text-[#6B4226] font-semibold text-3xl my-16">
            Crafted by Artisans
          </h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-20 w-max px-2">
              {artisans.map((text, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-6 flex-shrink-0 w-[309px]"
                >
                  <div className="bg-white rounded-lg p-6 shadow-md h-[384px] w-full"></div>
                  <p className="text-[#6B4226] text-sm text-center w-full">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
