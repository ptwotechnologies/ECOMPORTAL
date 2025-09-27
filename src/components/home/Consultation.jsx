export default function Consultation() {
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
    <div className="w-full">
      {/* Top Section */}
      <section className="bg-[#4E6C50] text-white py-20">
        <div className="max-w-[98%] mx-auto px-10">
          <h2 className="text-3xl font-semibold mb-12">
            Consultations that move you forward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-y-20 px-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border-l-2 border-white pl-4 justify-center gap-2"
              >
                <h3 className="text-3xl font-semibold px-2">{index + 1}</h3>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-12 px-6">
        <div className="max-w-[95%] mx-auto">
          <div className="flex gap-6 overflow-x-auto py-8 md:py-4">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[90%] md:w-[40%] bg-white border border-[#00103280] rounded-md flex flex-col md:flex-row overflow-hidden"
              >
                <p className="text-gray-600 md:mb-4 px-4 pt-6 md:py-20 md:w-2/3 leading-relaxed">
                  "Breaks down your numbers, shows you how long your runway
                  actually is, and where you’re bleeding cash. Breaks down your
                  numbers, shows you how long your runway actually is, and where
                  you’re bleeding cash"
                </p>

                <div className="px-2 pt-8 md:p-10 h-40 md:h-full flex flex-row-reverse md:flex-col items-start justify-center gap-2">
                  <img
                    src="/.jpg"
                    alt="Card Image"
                    className="w-full h-full rounded-md object-cover bg-gray-200 hidden md:block"
                  />
                  <div className="md:hidden w-[60px] h-[100px] md:w-1/3 bg-[#4E6C50] rounded-full md:h-32 ml-6 md:ml-0"></div>
                  <div>
                    <p className="text-sm text-gray-500 h-[100px] md:border-none border-r border-gray-500 pr-8 md:pr-0">
                      Vivek <br /> T Company Name <br /> Startup
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
