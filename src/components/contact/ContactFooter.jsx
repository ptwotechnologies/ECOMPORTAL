import React from "react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi2";
import artestor from "../../assets/artestor.png";

export default function ContactFooter() {
  const faqItems = [
    { question: "What is Artestor?", side: "left" },
    {
      question: "Is there a trial? If someone supports my app can they use it?",
      side: "right",
    },
    {
      question: "Is this a half? someone explain to me just how crazy it is!",
      side: "left",
    },
    { question: "Why is Artestor this addictive?", side: "right" },
    { question: "Define 5 terms", side: "left" },
    { question: "Getting 3 terms", side: "right" },
    { question: "Expert Panel edition", side: "left" },
    { question: "Expert Council edition", side: "right" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex bg-[#FCF5E5] items-center justify-center px-6 py-16">
        <div className="bg-gradient-to-b from-[#cbd5ed] to-[#0a1628] w-[98%] md:w-[92%] mx-auto p-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-[#001426] px-8 py-12 md:p-12 text-center relative overflow-hidden w-[95%] mx-auto">
              <div className="relative z-10">
                <h1 className="text-white text-2xl md:text-4xl font-semibold mb-8 leading-relaxed md:leading-[52px]">
                  Before you close this tab
                  <br />
                  picture next Monday
                </h1>

                <div className="space-y-4 mb-8 text-gray-200 text-[16px] leading-relaxed">
                  <p className="leading-[40px] text-[14px] md:text-[16px]">
                    A designer finally polishes the landing page you’ve been
                    delaying. That legal fix you’ve <br /> been avoiding? It’s
                    sorted now. <br /> And you are finally able to connect with
                    a real audience without spending lakhs on ads and <br />{" "}
                    expensive services.
                  </p>
                  <p className=" text-[12px] md:text-[14px] mt-6 text-gray-300">
                    If that’s the kind of Monday you want, go ahead and set it
                    up now.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#0a1628] px-10 py-3.5 rounded-md font-semibold text-base hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get In
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-20 max-w-[90%] mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-[#0a1628]"
        >
          FAQ
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.side === "left" ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between py-4 border-b border-gray-300 hover:border-[#0a1628] transition-colors">
                <span className="text-[#0a1628] text-base pr-4 group-hover:text-blue-900 transition-colors">
                  {item.question}
                </span>
                <HiChevronRight className="text-gray-400 text-xl flex-shrink-0 group-hover:text-[#0a1628] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logo Section */}
      <div className="w-[20%] mx-auto">
        <img src={artestor} alt="" className="w-full" />
      </div>
    </div>
  );
}
