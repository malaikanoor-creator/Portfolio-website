import React from "react";

// import lsth from "../assets/lsth.png";
import cps from "../assets/cps.png";
import freelance from "../assets/freelance.png";

const DesignWork = ({ darkModeFirst }) => {

  const designs = [
    // {
    //   id: 1,
    //   title: "LSTH Institute Flex",
    //   desc: "Professional flex design for Little Spectrum Therapy Hub Institute.",
    //   image: lsth,
    //   type: "Print Design"
    // },
    {
      id: 2,
      title: "CPS Social Media Posts",
      desc: "Creative social media posts for CPS campaigns.",
      image: cps,
      type: "Social Media"
    },
    {
      id: 3,
      title: "Freelance Client Posts",
      desc: "Instagram posts designed for freelance clients.",
      image: freelance,
      type: "Branding"
    }
  ];

  return (
    <section
      id="designs"
      className="py-24"
      style={{
        backgroundColor: darkModeFirst ? "#0f172a" : "#f8fafc",
      }}
    >
      <div className="container mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: darkModeFirst ? "white" : "#1f2937" }}
          >
            Graphic{" "}
            <span className="text-orange-500">Design Work</span>
          </h2>

          <p style={{ color: darkModeFirst ? "#cbd5e1" : "#6b7280" }}>
            My creative designs, branding & freelance work
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {designs.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden border hover:scale-105 transition duration-300"
              style={{
                background: darkModeFirst
                  ? "#1f2937"
                  : "white",
              }}
            >

              <img
                src={item.image}
                className="w-full h-48 object-cover"
                alt={item.title}
              />

              <div className="p-4">

                <h3
                  className="text-lg font-bold"
                  style={{ color: darkModeFirst ? "white" : "#111" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm mt-2"
                  style={{
                    color: darkModeFirst ? "#cbd5e1" : "#6b7280",
                  }}
                >
                  {item.desc}
                </p>

                <span className="inline-block mt-3 text-xs px-3 py-1 bg-orange-500 text-white rounded-full">
                  {item.type}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DesignWork;