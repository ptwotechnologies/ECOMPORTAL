import React, { useState } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import logo1 from "../../assets/contact/logo1.png";
import logo2 from "../../assets/contact/logo2.png";
import logo3 from "../../assets/contact/logo3.png";
import logo4 from "../../assets/contact/logo4.png";
import logo5 from "../../assets/contact/logo5.png";
import logo6 from "../../assets/contact/logo6.png";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const experts = [
    { name: "Startups" },
    { name: "Service Professionals" },
    { name: "Investors" },
    { name: "Channel Partners" },
  ];

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  const testimonials = [
    {
      text: "You've got the skills. We've got the message.",
      subtext:
        "Instead of spending money on ads, pitching aimlessly, or chasing unclear leads, plug into a system built for real, verified work. Together with a straightforward way to grow your practice with startups that one thread and ready to move",
    },
    {
      text: "You've got the skills. We've got the tactics.",
      subtext:
        "Instead of spending money on ads, pitching aimlessly, or chasing unclear leads, plug into a system built for real, verified work. Together with a straightforward way to grow your practice with startups that one thread and ready to move",
    },
    {
      text: "You've got the skills. We've got the ecosystem.",
      subtext:
        "Instead of spending money on ads, pitching aimlessly, or chasing unclear leads, plug into a system built for real, verified work. Together with a straightforward way to grow your practice with startups that one thread and ready to move",
    },
  ];

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#001426", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto px-6 py-20 max-w-[98%]">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Section */}
          <div className="space-y-8 pt-4">
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl leading-[32px] md:leading-[40px]">Connect with</h1>
                <h1 className="text-4xl md:text-5xl leading-[32px] md:leading-[40px]">our experts</h1>
              </div>

              <p className="text-slate-400 text-[14px] md:text-[18px] leading-relaxed">
                Our experts in Afrestor will support you and solve
                <br />
                your queries in multiple domains.
              </p>
            </div>

            <div className="space-y-4">
              {experts.map((expert, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <FiCheck
                      className="text-slate-900"
                      size={12}
                      md:size={14}
                      strokeWidth={3}
                    />
                  </div>
                  <span className=" text-[14px] md:text-[18px] text-slate-400">
                    {expert.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Logos Section */}
            <div className="space-y-6">
              <p className=" text-[14px] md:text-[18px] text-slate-300 leading-relaxed">
                Get the access of 50+ investors and 500+ startups
                <br />
                and 200+ service professionals
              </p>

              <div className="space-y-6 py-6 md:py-12">
                {/* First Row */}
                <div className="grid grid-cols-3 gap-x-6">
                  {logos.slice(0, 3).map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center py-4"
                    >
                      <img
                        src={logo}
                        alt={`logo-${idx}`}
                        className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 scale-[2] md:scale-[3] transition-opacity duration-200"
                      />
                    </div>
                  ))}
                </div>

                {/* Horizontal Divider */}
                <div className="md:block hidden border-t border-slate-700"></div>

                {/* Second Row */}
                <div className="grid grid-cols-3 gap-x-6">
                  {logos.slice(3, 6).map((logo, idx) => (
                    <div
                      key={idx + 3}
                      className="flex items-center justify-center py-4 border-r border-slate-700 last:border-r-0"
                    >
                      <img
                        src={logo}
                        alt={`logo-${idx + 3}`}
                        className="h-8 md:h-10 object-contain opacity-70 scale-150 md:scale-[2] hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[14px] md:text-[16px] text-slate-300 pt-2">
              Looking for pricing and benefits{" "}
              <a
                href="#"
                className="text-white underline hover:text-slate-200 inline-flex items-center gap-1"
              >
                Explore Attributes <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-3xl shadow-2xl px-6 py-12 md:p-12 text-slate-900">
            <div className="space-y-7">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-md border-slate-300 focus:outline-none focus:border-slate-900 text-base transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-md border-slate-300 focus:outline-none focus:border-slate-900 text-base transition-colors"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Work Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border rounded-md border-slate-300 focus:outline-none focus:border-slate-900 text-base transition-colors"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 border rounded-md border-slate-300 focus:outline-none focus:border-slate-900 text-base transition-colors"
              />

              <div className="space-y-5 pt-3">
                <label className="block text-[16px] text-[#001D21] font-medium">
                  What are you interested in?
                </label>

                <div className="mt-2 border rounded-md border-gray-300 p-6">
                  {[
                    {
                      value: "startup",
                      label: "Register as Startup",
                      sub: "Get benefits of funding and resource access",
                    },
                    {
                      value: "professional",
                      label: "Register as Service Professional",
                      sub: "Get build and edge in the network",
                    },
                    {
                      value: "investor",
                      label: "Register as Investor",
                      sub: "Get curated and refined startups",
                    },
                    {
                      value: "channel",
                      label: "Register as Channel Partner",
                      sub: "Get more priority and benefits over other professionals",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-start gap-4 mb-6 cursor-pointer group"
                    >
                      <div className="flex-1">
                        <div className="text-[15px] font-medium text-[#002B31] mb-1 leading-relaxed">
                          {option.label}
                        </div>
                        <div className="text-[13px] text-slate-500 leading-relaxed">
                          {option.sub}
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="interest"
                        value={option.value}
                        checked={formData.interest === option.value}
                        onChange={handleChange}
                        className="mt-1.5 w-4 h-4 text-slate-900 border-slate-400"
                      />
                    </label>
                  ))}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className=" px-10 bg-slate-900 text-white py-4 rounded-md font-medium hover:bg-slate-800 transition-all text-base mt-8"
              >
                Get Started
              </button>

              <p className="text-xs text-slate-500 leading-relaxed pt-12">
                Please note that this is not an application to seek funding or
                other services for a new venture or business. By clicking 'Get
                Started' you agree to Afrestor's Privacy Policy
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section - UPDATED */}
        <div className="hidden md:flex justify-center gap-28 mt-36">
          {testimonials.map((testimonial, idx) => (
            <div className="flexm max-w-sm w-full flex-col">
              <div className=" h-[1px] mb-12 bg-white"></div>
              <div
                key={idx}
                className="relative  bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4 pt-12">
                  <div className="text-[#1C1C1C] mb-4">
                    <h2 className="leading-[36px] pb-4 text-[16px] font-medium">
                      {testimonial.text}
                    </h2>
                    <p className="leading-[36px] text-sm">
                      {testimonial.subtext}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    {/* Text */}
                    <div className="text-[14px] text-[#0D1B2A] font-medium">
                      Join once. <br /> Let the ecosystem work for you
                    </div>

                    {/* Vertical Divider */}
                    <div className="h-16 w-px bg-gray-300 mx-2"></div>

                    {/* Button */}
                    <button className="bg-[#0D1B2A] text-white rounded-full px-4 py-3 text-sm w-24 h-24 font-semibold hover:bg-[#1a2d42] transition-colors">
                      Get Listed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
