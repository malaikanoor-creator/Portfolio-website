import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import contactImg from "../assets/contacts.png"; // ✅ your local image

const Contact = ({ darkModeFirst }) => {
  return (
    <section
      id="contact"
      className="py-24"
      style={{
        backgroundColor: darkModeFirst ? "#0b1220" : "#f8fafc",
      }}
    >
      <div className="container mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              color: darkModeFirst ? "white" : "#1f2937",
            }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="mt-2"
            style={{
              color: darkModeFirst ? "#cbd5e1" : "#6b7280",
            }}
          >
            Feel free to contact me for any project or collaboration
          </p>
        </div>

        {/* Main Box */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE IMAGE */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
          >
            <img
              src={contactImg}
              alt="contact"
              className="w-80 md:w-[420px] drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="p-8 rounded-2xl border shadow-lg"
            data-aos="fade-left"
            style={{
              background: darkModeFirst
                ? "linear-gradient(to bottom right, #1f2937, #111827)"
                : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
              borderColor: darkModeFirst ? "#374151" : "#e5e7eb",
            }}
          >

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg outline-none"
                style={{
                  backgroundColor: darkModeFirst ? "#111827" : "#fff",
                  color: darkModeFirst ? "white" : "#111827",
                  border: "1px solid #374151",
                }}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg outline-none"
                style={{
                  backgroundColor: darkModeFirst ? "#111827" : "#fff",
                  color: darkModeFirst ? "white" : "#111827",
                  border: "1px solid #374151",
                }}
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg outline-none"
                style={{
                  backgroundColor: darkModeFirst ? "#111827" : "#fff",
                  color: darkModeFirst ? "white" : "#111827",
                  border: "1px solid #374151",
                }}
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white transition hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(to right, #f97316, #f59e0b)",
                }}
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;