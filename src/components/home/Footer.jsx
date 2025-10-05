import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Logo from '../../assets/manuecom.png'

const Footer = () => {
  const [openTrust, setOpenTrust] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const trustFaqs = [
    {
      q: "Is this just another agency trying to sell me stuff?",
      a: "No. We focus on providing genuine value and guidance, not selling you random services.",
    },
    {
      q: "Who's behind this platform?",
      a: "Our platform is built by experienced founders and industry experts who’ve been in your shoes.",
    },
    {
      q: "Will I have to share sensitive details about my startup? Is it safe?",
      a: "Yes, some details help us serve you better. But all data is handled securely and never misused.",
    },
  ];

  const faqs = [
    ...trustFaqs,
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

  // split into 2 columns for desktop
  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);

  return (
    <footer className="text-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
        {/* Mobile: Trust & Safety dropdown */}
        <div className="block md:hidden">
          <p className="font-semibold text-3xl py-6">
            Here’s what founders usually ask
          </p>

          {/* Trust & Safety button */}
          <div
            className="flex justify-between items-center py-6 cursor-pointer"
            onClick={() => setOpenTrust(!openTrust)}
          >
            <span className="text-base font-medium">Trust & Safety</span>
            <FaChevronDown
              className={`transition-transform duration-200 text-gray-600 ${
                openTrust ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Show trust faqs only if open */}
          {openTrust && (
            <div className="pl-4">
              {trustFaqs.map((item, idx) => (
                <div key={idx}>
                  <div
                    className="flex justify-between items-center py-4 cursor-pointer"
                    onClick={() => toggle(idx)}
                  >
                    <span className="text-sm font-medium">{item.q}</span>
                    <FaChevronDown
                      className={`transition-transform duration-200 text-gray-600 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === idx && (
                    <p className="text-gray-600 text-sm pb-4">{item.a}</p>
                  )}
                  <hr className="border-[#0010321A]" />
                </div>
              ))}
            </div>
          )}

          <hr className="border-[#0010321A]" />
        </div>

        {/* Desktop Left Column */}
        <div className="space-y-0 hidden md:block">
          {col1.map((item, idx) => {
            const index = idx;
            return (
              <div key={index}>
                <div
                  className="flex justify-between items-center py-6 cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <span className="text-base font-medium">{item.q}</span>
                  <FaChevronDown
                    className={`transition-transform duration-200 text-gray-600 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 text-sm pb-4">{item.a}</p>
                )}
                <hr className="border-[#0010321A]" />
              </div>
            );
          })}
        </div>

        {/* Desktop Right Column */}
        <div className="space-y-0">
          {col2.map((item, idx) => {
            const index = idx + mid;
            return (
              <div key={index}>
                <div
                  className="flex justify-between items-center py-6 cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <span className="text-base font-medium">{item.q}</span>
                  <FaChevronDown
                    className={`transition-transform duration-200 text-gray-600 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 text-sm pb-4">{item.a}</p>
                )}
                <hr className="border-[#0010321A]" />
              </div>
            );
          })}
        </div>
      </div>
       <img
        src={Logo}
        alt=""
        class="block mx-auto mt-20 h-44 md:h-96 w-auto"
      />
    </footer>
  );
};

export default Footer;
