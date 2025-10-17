import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GetStarted = () => {
  const profiles = [
    {
      title: "Startup",
      color: "#6B4226",
      button: "Startups",
      text:" Start exploring, connect with others, get listed, build your portfolio, and go live.",
    },
    {
      title: "Investor",
      color: "#C76B3D",
      button: "Get Started",
      text:"Share your investment focus, preferred industries, ticket sizes, and past experience",
    },
    {
      title: "Service Professionals",
      color: "#4E6C50",
      button: "Service Professionals",
      text:"Get discovered by verified startups, respond to interest, and convert leads directly",
    },
  ];

  return (
    <div className="py-16 px-4 w-full">
      {/* Heading */}
      <div className="text-center mb-16">
        <div className="text-3xl font-roboto font-semibold text-[#001032]">
          <h1 >Great!</h1> How do I get started then?
        </div>
        <p className="mt-6 text-sm max-w-[75%] mx-auto text-[#001032]">
          Simple, just choose which profile fits you, <br /> and we'll show you what to
          do next.
        </p>
      </div>

      {/* Profile Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full md:w-[96%] md:mx-auto md:overflow-x-auto mb-16 px-2">
        {profiles.map((profile, idx) => (
          <div
            key={idx}
            className="relative text-white p-6 rounded-xl shadow-lg flex-shrink-0 overflow-hidden w-full md:w-[500px] h-68 md:h-80 pb-16"
            style={{ backgroundColor: profile.color }}
          >
            <div className="flex gap-4 items-center py-2 leading-relaxed">
              <div className="md:block hidden w-16 h-16 rounded-sm bg-white"></div>
              <h3 className="text-xl font-semibold">{profile.title}</h3>
            </div>
            <p className="my-2 md:my-4 text-[16px]  cursor-pointer">
              Sign up and create your account.
            </p>
            <p className="text-[14px] leading-relaxed w-[70%]">
              {profile.text}
            </p>
            <button
              className={`mt-8 md:mt-4 absolute bottom-8 right-8 py-2 px-4 flex items-center gap-4 ${
                profile.button === "Get Started"
                  ? "bg-white text-black rounded-md"
                  : "text-white hover:border hover:border-white rounded-md"
              }`}
            >
              {profile.button}
              {profile.button !== "Get Started" && <FaArrowRight size={14} />}
            </button>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-b from-[#FCF5E5] px-2 md:px-6 py-10 via-[#f5dfc5] to-[#6B4226]">
        <div className="bg-[#6B4226] text-white py-12 md:py-16 px-6 md:px-10 text-center mx-6 shadow-xl">
          <h3 className="text-2xl md:text-4xl md:max-w-[60%] pb-4 md:pb-8 mx-auto md:font-semibold font-poppins leading-relaxed">
            Before you close this tab, picture next Monday
          </h3> 
          <p className="leading-relaxed md:max-w-[90%] text-[14px] md:text-[18px] mx-auto">
            A designer finally polishes the landing page you’ve been delaying.
            That legal fix you’ve been avoiding? It’s sorted now. And you’re
            finally able to connect with a real audience without spending lakhs
            on ads and expensive services.
          </p>
          <p className="mt-6 text-[14px] md:text-[18px]">
            If that’s the kind of Monday you want, go ahead and set it up now.
          </p>
          <button className="mt-8 bg-white text-[#6B4226] py-3 px-8 rounded-md">
            GET IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
