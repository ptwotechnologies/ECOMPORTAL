import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

export default function StartupPrices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const trustFaqs = [
    {
      q: "Is this just another agency trying to sell me stuff?",
      a: "No. We focus on providing genuine value and guidance, not selling you random services.",
    },
    {
      q: "Who's behind this platform?",
      a: "Our platform is built by experienced founders and industry experts who've been in your shoes.",
    },
    {
      q: "Will I have to share sensitive details about my startup? Is it safe?",
      a: "Yes, some details help us serve you better. But all data is handled securely and never misused.",
    },
  ];

  const otherFaqs = [
    {
      q: "Getting Started",
      a: "Simply sign up, explore available resources, and connect with experts to kickstart your journey.",
    },
    {
      q: "Eligibility",
      a: "Anyone with a startup idea or an early-stage company can join and benefit from our programs.",
    },
    {
      q: "Expert Consultations",
      a: "You can book sessions with mentors and industry experts directly through the platform.",
    },
  ];

  const allFaqs = [
    {
      q: "How is this different from Upwork or LinkedIn",
      a: "This is not a public marketplace. Only verified startups are allowed in, and all requests are reviewed. You won’t have to pitch constantly or chase unclear leads.",
    },
    {
      q: "Is there a fee to get listed?",
      a: "No everyone can join with 0 charges.",
    },
    {
      q: "Do I need to pitch to startups?",
      a: "You can book sessions with mentors and industry experts directly through the platform.",
    },
    {
      q: "Is there a contract for each project?",
      a: "You can book sessions with mentors and industry experts directly through the platform.",
    },
    {
      q: "How do you prevent scams?",
      a: "You can book sessions with mentors and industry experts directly through the platform.",
    },
    {
      q: "How long does approval take?",
      a: "You can book sessions with mentors and industry experts directly through the platform.",
    },
  ];

  // Split for desktop 2 columns (questions only)
  const mid = Math.ceil(allFaqs.length / 2);
  const col1 = allFaqs.slice(0, mid);
  const col2 = allFaqs.slice(mid);

  return (
    <div className="min-h-screen p-10">
      {/* Section Heading */}
      <h1 className="text-2xl font-semibold leading-[28px] text-[#0a0a0a] my-10 hidden md:block">
        Start your journey
      </h1>

      {/* Pricing Section (kept as before) */}
      <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-12 md:mx-4 mb-20 scrollbar-hide">
        {[
          { color: "border-t-red-600" },
          { color: "border-t-orange-600" },
          { color: "border-t-cyan-600" },
        ].map((style, i) => (
          <div
            key={i}
            className={`min-w-[350px] md:min-w-0 border ${style.color} border-t-8 bg-white shadow-sm`}
          >
            <div className="p-6">
              <h2 className="font-semibold text-xl leading-relaxed py-4">
                Onboarding Prices
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Best for funds under $25M
              </p>
              <div className="flex gap-2 items-end font-medium font-poppins mb-2">
                <p className="text-2xl leading-relaxed">$3.5k + 0.75%</p>
                <p className="text-sm text-gray-600">of fund size</p>
              </div>
              <p className="text-sm text-gray-600 mb-6">annualized cost</p>
              <p className="text-sm text-gray-600 leading-[28px]">
                Investments: 15
              </p>
              <p className="text-sm text-gray-600 mb-4 leading-[28px]">
                State Regulatory Fees: Variable
              </p>
              <hr className="mt-8 border-gray-500/80" />
              <h3 className="font-semibold leading-[28px] mt-6 mb-2 text-gray-800">
                Features:
              </h3>
              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-4 text-[14px] leading-[40px]">
                  <FaCheck className="text-[#002a30]" /> Fund admin
                </p>
                <p className="flex items-center gap-4 text-[14px] leading-[40px]">
                  <FaCheck className="text-[#002a30]" /> Legal fund formation
                </p>
              </div>
              <div className="flex flex-col gap-16 text-sm text-gray-500">
                <p>* Pricing may vary with add-on services</p>
                <button className="w-full bg-[#002a30] text-white py-4 text-lg rounded-md font-medium hover:bg-[#002a30] transition">
                  Get started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="max-w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#0a0a0a]">FAQ</h2>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-0">
          {allFaqs.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="font-medium text-gray-800 text-sm pr-4">
                  {item.q}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-200 text-gray-600 flex-shrink-0 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === idx && (
                <div className="pb-4 pr-8">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop 2 Columns - Questions Only */}
        <div className="hidden md:block">
          {/* Trust & Safety Header */}
          <h3 className="text-sm font-medium text-gray-600 mb-6">
            Trust & Safety
          </h3>

          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-0">
              {col1.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 py-4">
                  <p className=" text-gray-600 text-[16px] leading-[32px]">
                    {item.q}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-0">
              {col2.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 py-4">
                  <p className=" text-gray-600 text-[16px] leading-[32px]">
                    {item.q}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <img
        src="logo.jpg"
        alt=""
        class="block mx-auto mt-20 h-44 md:h-96 w-auto"
      />
    </div>
  );
}
