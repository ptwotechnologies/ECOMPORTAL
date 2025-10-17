import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Sidebar from "./Sidebar";

export default function RightHero() {
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [showMoreExperience, setShowMoreExperience] = useState(false);

  return (
    <div className="md:flex">
    <Sidebar></Sidebar>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-[98%] mx-auto">
          {/* Header */}
          <div className="hidden md:flex bg-white border border-gray-400 shadow-md rounded-lg px-10 mb-4 justify-between items-center">
            <h1 className="text-md font-semibold text-gray-800">
              Welcome, Startup India Pvt. Ltd.
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors">
              <FaUser
                className="text-gray-600 border border-gray-600 p-1 rounded-full"
                size={24}
              />
              <span className="font-semibold text-gray-800">
                Switch to professional
              </span>
            </button>
          </div>

          {/* Profile Card */}
          <div className="bg-white border border-gray-400 shadow-md rounded-lg mb-4">
            {/* Top section with profile pic and Startup title */}
            <div className="p-6 px-10 pb-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Startup
                </h2>
              </div>
            </div>

            {/* Bottom section with details */}
            <div className="p-10 flex justify-between items-start border-t border-gray-100 pt-6 relative">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Akshay Dogra
                </h3>
                <div className="flex flex-col text-sm">
                  <p>Grow Your Business by Partnering with</p>
                  <p>India's Fastest-Growing Startup</p>
                  <p>Ecosystem</p>
                  <p>New Delhi, Delhi, India</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 mx-6 mt-10">
                <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-xs">🏛️</span>
                </div>
                <span className="text-sm text-gray-800 font-semibold whitespace-nowrap">
                  Dharanam Foundation
                </span>
              </div>
              <button className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiEdit2 className="w-5 h-5 text-gray-800 font-semibold" />
              </button>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white border border-gray-400 rounded-lg shadow-md mb-4 p-6 px-10 relative">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">About</h3>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiEdit2 className="w-5 h-5 text-gray-800" />
              </button>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed mb-4">
              An experienced entrepreneur and business professional who
              consistently delivers high-quality and result-focused marketing
              campaign, customer experience and design valuable content for
              go-to-market, launch, start-up, brand building, event and
              community engagement. Dedicated results and omni channel product
              marketing, brand and community development. Visionary,
              self-driven, motivated, who can take ownership and have the zeal
              to build something global. Skilled in operations management,
              operational Planning, Business Strategies and Employee Training.{" "}
              <span className="font-semibold">See more...</span>
            </p>

            <div className="flex items-center gap-4 border border-gray-300 rounded-md shadow-md px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors mb-4">
              <span className="text-sm font-semibold text-gray-900">
                Top Skills
              </span>
              <div>
                <span className="text-sm text-gray-700">
                  Strategic Planning • Marketing Strategy • Customer Service •
                  Pricing Strategy • Training
                  <button
                    onClick={() => setShowMoreSkills(!showMoreSkills)}
                    className="font-semibold ml-1 hover:underline"
                  >
                    See more...
                  </button>
                </span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white border border-gray-400 rounded-lg shadow-md mb-4 p-6 px-10 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Services</h3>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiEdit2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <p className="text-sm text-gray-700">
              Strategic Planning • Marketing Strategy • Customer Service •
              Pricing Strategy • Training • Team Building • Research Skills •
              Market Research
              <button
                onClick={() => setShowMoreServices(!showMoreServices)}
                className="font-semibold ml-1 hover:underline"
              >
                See more...
              </button>
            </p>
          </div>

          {/* Experience Section */}
          <div className="bg-white border border-gray-400 rounded-lg shadow-md p-6 px-10 relative">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Experience
              </h3>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiEdit2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600">🏛️</span>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-4">Founder</h4>
                <p className="text-sm text-gray-700 mb-1">
                  Dharanam Foundation · Full-time
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Oct 2024 - Present · 1 yr
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  Noida, Uttar Pradesh, India · Hybrid
                </p>

                <ul className="text-sm text-gray-700 space-y-1 mt-6 list-disc list-inside">
                  <li>
                    Designing customized revenue-generation strategies to
                    enhance financial independence
                  </li>
                  <li>
                    Assisting NGOs with technology, legal, and marketing support
                    at zero cost to enhance their growth and impact.
                    <button
                      onClick={() => setShowMoreExperience(!showMoreExperience)}
                      className="font-semibold ml-1 hover:underline"
                    >
                      See more...
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* portfolio section  */}
          <div className="bg-white border border-gray-400 mt-4 rounded-lg shadow-md p-6 px-10 relative">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Portfolio
            </h3>

            <div className="max-w-full mx-auto">
              <div className="flex gap-4 overflow-x-auto flex-nowrap md:flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div
                    key={item}
                    className="flex-shrink-0 w-60 md:w-[calc(25%-1rem)]"
                  >
                    <div className="border border-gray-300 rounded-lg aspect-square flex items-center justify-center shadow-md">
                      {/* Card content */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* social media secction  */}
          <div className="bg-white border border-gray-400 my-4 rounded-lg shadow-md p-6 px-10 relative">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Social Media
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <a
                href="#"
                className="py-2 px-6 border border-gray-300 shadow-md rounded-lg"
              >
                Linkedin Profile
              </a>
              <a
                href="#"
                className="py-2 px-6 border border-gray-300 shadow-md rounded-lg"
              >
                Instagram Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
