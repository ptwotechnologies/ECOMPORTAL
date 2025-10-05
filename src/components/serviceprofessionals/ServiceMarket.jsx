import React from "react";

const features = [
  {
    title: "Verified startup flow",
    desc: "Work with early-stage founders actively seeking your services – no cold outreach needed.",
  },
  {
    title: "Organic visibility",
    desc: "Get discovered organically inside the portal by 500+ startups browsing daily.",
  },
  {
    title: "Access to mid & high ticket projects",
    desc: "Work on clearly defined projects, budgets are pre-set and verified by our admin team.",
  },
  {
    title: "Admin-support communication",
    desc: "From onboarding to delivery, we help streamline conversations and protect both sides.",
  },
  {
    title: "Consultation for industry experts",
    desc: "Get free guidance on portfolio building, pricing, negotiation, and presentation.",
  },
];

const testimonials = [
  {
    bg: "#6B4226",
    text: "Raise capital, close deals, and manage your portfolio — all from a single platform. AngelList handles all overhead and back-office services, so you can focus on your deals. Raise capital, close deals, and manage your portfolio — all from a single platform. AngelList handles all overhead and back-office services, so you can focus on your deals.",
    designation: "Designation",
    company: "Company",
  },
  {
    bg: "#c76b3d",
    text: "Raise capital, close deals, and manage your portfolio — all from a single platform. AngelList handles all overhead and back-office services, so you can focus on your deals. Raise capital, close deals, and manage your portfolio — all from a single platform. AngelList handles all overhead and back-office services, so you can focus on your deals.",
    designation: "Designation",
    company: "Company",
  },
];

const FeatureItem = ({ title, desc }) => (
  <p className="font-medium">
    <span className="leading-[40px]">• {title}</span> <br />
    {desc}
  </p>
);

const TestimonialCard = ({ bg, text, designation, company }) => (
  <div className="flex flex-col md:flex-row rounded-md border border-gray-500 overflow-hidden" style={{ backgroundColor: bg }}>
    {/* Left Section */}
    <div
      className="outlined-text font-semibold p-10 md:w-4/5"
     
    >
      <p className="text-sm md:text-[18px] leading-relaxed pt-4">{text}</p>
      <div className="mt-4 text-xs md:text-[14px] flex flex-col gap-1">
        <span>{designation},</span>
        <span>{company}</span>
      </div>
    </div>

    {/* Right White Box */}
    <div className="bg-gray-100 md:w-1/2 rounded-l-xl"></div>
  </div>
);


const ServiceMarket = () => {
  return (
    <section className="px-6 md:px-16 py-16 hidden md:block">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-[#323e56] mb-16 leading-[40px]">
        The broken loops in the market
      </h2>

      <div className="flex justify-center w-full items-center gap-10">
        {/* Left Side - Text */}
        <div className="space-y-4 w-[40%] text-black text-sm md:text-base">
          <h1 className="font-semibold py-4">
            The support system you’ve been missing
          </h1>
          {features.map((item, index) => (
            <FeatureItem key={index} title={item.title} desc={item.desc} />
          ))}
        </div>

        {/* Right Side - Color Cards */}
        <div className="w-[50%] grid grid-cols-2 gap-6">
          {["bg-gray-100", "bg-[#748783]", "bg-[#606776]", "bg-[#76736d]"].map(
            (color, i) => (
              <div
                key={i}
                className={`w-full h-28 md:h-72 ${color} rounded-md shadow-lg`}
              ></div>
            )
          )}
        </div>
      </div>

      {/* Bottom Section - Testimonial/Info Cards */}
      <div className="mt-20 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[70%] snap-start">
            <TestimonialCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceMarket;
