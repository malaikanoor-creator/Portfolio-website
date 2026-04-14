import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import heroImg from "../assets/hero.png";
import hi from '../assets/hi.png'
import CV from "../assets/CV.pdf";
import { Download, Mail } from "lucide-react";

const Hero = ({ darkModeFirst }) => {
  const socialIcons = [
    { icon: instagram, alt: "Instagram", link: "#" },
    { icon: youtube, alt: "Youtube", link: "#" },
    { icon: linkedin, alt: "Linkedin", link: "#" },
    { icon: github, alt: "Github", link: "#" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
  };

  const theme = darkModeFirst ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section id="home" data-aos="fade-up" data-aos-delay="250" className="z-10">
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-24 flex-col lg:flex-row items-center justify-between mt-10">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12">

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mb-6">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                  className="transform hover:scale-110 transition duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${
                      darkModeFirst ? "" : "brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* TEXT */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm <span className="text-orange-500">Malaika</span>
            </h1>

            <p
              className={`mb-6 max-w-md ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Creative Developer & Graphic Designer building modern and
              interactive web experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Hire Me */}
              <a
                href="#contact"
                className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                Hire Me
              </a>

              {/* View Work */}
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition"
              >
                View Work
              </a>
            </div>

            {/* EXTRA BUTTONS */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {/* Download CV */}
              <a href={CV} download className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 py-3 px-6 rounded-full text-base font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgb(225,165,0,0.7)] transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </button>
              </a>

              {/* Contact Me */}
              <a href="#contact" className="w-full sm:w-auto">
  <button
    className={`w-full sm:w-auto inline-flex items-center  justify-center border-2 border-orange-500  bg-transparent py-3 px-6 rounded-full text-base font-semibold hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-[0_0_40px_rgb(225,165,0,0.7)] transition-all duration-300`}
  >
    <Mail className="w-4 h-4 sm:h-5 mr-2" />
    Contact Me
  </button>
</a>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={heroImg}
                  alt="Hero"
                  loading="lazy"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <img src={hi} alt="Hi icon" 
              className="absolute top-4 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 object-contain animate-bounce opacity-90 z-10"/> 
            </div>
          </div>
        </div>
        <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}>

        </div>
      </section>
    </div>
  );
};

export default Hero;