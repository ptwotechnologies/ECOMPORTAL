export default function StartupConsult() {
  const items = [
    { name: "Legal paperwork, compliances, agreements" },
    { name: "Building an MVP or scaling tech without wasting months" },
    { name: "Branding that earns trust, not just looks good" },
    { name: "Marketing that brings in real users, not just traffic" },
    { name: "Understanding where your money’s going (and why it matters)" },
    {
      name: "Fundraising prep — how to talk to investors like you know your stuff",
    },
  ];

  return (
    <div className="w-full pt-12">
      {/* Top Section */}
      <section className="bg-gradient-to-b from-[#33425b] to-[#345259] text-white py-20">
        <div className="max-w-[98%] mx-auto px-4 md:px-10">
          <h2 className="text-3xl hidden md:block font-semibold mb-20">
            Consultations that move you forward
          </h2>
          <h2 className="text-3xl block md:hidden font-semibold mb-10">
            Why service providers choose this portal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 px-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border-l opacity-80 border-gray-300 pl-4 justify-center gap-2"
              >
                <h3 className="text-3xl font-semibold px-2">{index + 1}</h3>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="md:hidden px-8 py-16 flex flex-col gap-6 text-center">
        <p className="text-lg font-semibold">
          Sounds like a dream? <br /> Let’s make them reality for ya!
        </p>
        <button className="text-white bg-[#002a30] px-4 py-4 rounded-md w-1/2 mx-auto">
          Let's get started
        </button>
      </div>
      <hr className="block md:hidden h-px bg-gray-400 border-0 my-4 w-full" />

      <section className="py-10">
        <div className="max-w-[95%] mx-auto px-2 md:px-6">
          <h2 className="text-3xl md:text-4xl md:leading-loose font-bold text-[#001032] md:font-semibold my-10">
            Who is this platform for?
          </h2>

          {/* Card container (scrollable on all screens, shows 3.75 cards on desktop) */}
          <div className="flex w-full gap-6 overflow-x-auto scrollbar-hide">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between min-w-[85%] sm:min-w-[60%] md:min-w-[20%] border border-gray-600 md:border-gray-200 rounded-lg p-6 md:bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="text-sm text-gray-700 leading-[24px] ">
                    UI/UX designers and content creators who want clear briefs
                    and decision-ready clients
                  </p>
                  <div className="flex justify-between items-center mt-20">
                    <span className="font-semibold text-gray-800 text-[15px] ">
                      Design & Branding
                    </span>
                    <div className="w-[1px] bg-gray-400 h-16"></div>
                    <span className="w-16 h-16 flex-shrink-0 rounded-full bg-[#D9D9D9] md:bg-[#001F3F]"></span>
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom info text */}
          <div className="mt-10 flex justify-center">
            <p
              className="text-[16px] text-gray-900 px-3 md:px-8 py-2 rounded-full max-w-3xl md:max-w-[92%] leading-[30px] md:leading-relaxed font-extralight
        md:bg-gradient-to-r md:from-[#011032] md:via-[#061b4a] md:to-white md:text-white md:shadow-lg md:text-center md:text-[17px]"
            >
              If your work fits any of these lanes and you want a quieter, more
              direct way to find serious clients, this portal is for you.
            </p>
          </div>

          {/* Sub text */}
          <p className="mt-8 px-3 md:text-center font-medium text-gray-800 md:text-[18px] leading-[30px] md:leading-relaxed">
            And if you’ve worked with startups before? That’s even better!
          </p>
        </div>
      </section>
    </div>
  );
}
