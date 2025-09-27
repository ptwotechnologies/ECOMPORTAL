import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";

export default function WhoHereSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      title: "Trust & Safety",
      body: `Is this just another agency trying to sell me stuff?
Who's behind this platform? Will I have to share sensitive details about my startup? Is it safe?`,
    },
    {
      title: "Getting Started",
      body: `A short onboarding checklist: eligibility, documents, and what to expect during expert consultations.`,
    },
    {
      title: "Eligibility",
      body: `Who can apply, what stage we accept (pre-seed, seed), and evaluation criteria used by investors.`,
    },
    {
      title: "Expert Consultations",
      body: `How consultations are scheduled, what to prepare, and sample outcomes you can expect.`,
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full" style={{ backgroundColor: "#F6F3E8" }}>
      <div className="max-w-[98%] mx-auto px-6 md:px-20 py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl text-[#4E6C50] font-semibold flex flex-col gap-2 md:gap-3 mb-10">
          <span>Who's here and</span>
          <span>What that matters?</span>
        </h2>

        {/* Top area: grid with content + visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-6 md:mt-16">
          {/* Left content */}
          <div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-transparent"
                    aria-hidden
                  >
                    <FaArrowDown className="w-6 h-6 md:w-8 md:h-8 text-[#4E6C50]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg md:text-2xl text-[#4E6C50] md:text-gray-800 font-medium"
                  >
                    Investors
                  </h3>
                  <p className="mt-2 md:mt-3 text-sm md:text-md leading-relaxed text-gray-600 font-normal md:font-medium">
                    They use the portal to find refined, verified startups that
                    are already prepared and aligned with their interests. Since
                    we offer investor consultations and pitch improvement
                    support, what they receive is already filtered, focused, and
                    investment-ready.
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 my-1 md:my-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <FaArrowRight className="w-5 h-5 md:w-8 md:h-8 text-[#4E6C50]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-medium text-[#4E6C50] md:text-gray-800">
                    Service Professionals
                  </h3>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 my-1 md:my-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <FaArrowRight className="w-5 h-5 md:w-8 md:h-8 text-[#4E6C50]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-medium text-[#4E6C50] md:text-gray-800">
                    Channel Partners
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Right visual (placeholder image in screenshot) */}
          <div className="w-full hidden md:flex justify-center md:justify-end">
            <div className="bg-gray-200 rounded-xl w-full h-56 md:h-96 shadow-sm" />
          </div>
        </div>

        {/* FAQ area */}
        <div className="mt-14 hidden md:block">
          <h3
            className="text-xl md:text-3xl font-semibold md:font-bold"
            style={{ color: "#05243E" }}
          >
            Here's what founders
            <br className="hidden md:block" />
            usually ask
          </h3>

          <div className="mt-6 border-t border-white/40 pt-6 ">
            <div className="space-y-3">
              {faq.map((f, i) => (
                <div key={i} className="bg-transparent">
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full text-left flex items-center justify-between py-3 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                  >
                    <div>
                      <div className="text-lg font-medium text-gray-700">
                        {f.title}
                      </div>
                      {i === 0 && (
                        <div className="mt-2 text-xs md:text-sm text-gray-500">
                          Is this just another agency trying to sell me stuff?
                          Who's behind this platform? Will I have to share
                          sensitive details about my startup? Is it safe?
                        </div>
                      )}
                    </div>

                    <motion.span
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <FiChevronDown className="w-5 h-5 text-gray-600" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                        className="overflow-hidden px-1"
                      >
                        <div className="py-2 text-xs md:text-base text-gray-600">
                          {f.body}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/30" />
          </div>
        </div>
            <img src="logo.jpg" alt="" class="block mx-auto mt-20 h-44 md:h-96 w-auto" />
      </div>
    </section>
  );
}
