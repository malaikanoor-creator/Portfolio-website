import { motion } from "framer-motion";
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkModeFirst, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Designs", link: "#designs" },
    { name: "Education", link: "#education" },  
    { name: "Contact", link: "#contact" },
  ];

  const colors = darkModeFirst
    ? {
        navBg: "bg-gradient-to-br from-gray-700 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textActive: "text-orange-400",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
      }
    : {
        navBg: "bg-gradient-to-br from-orange-200 to-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-800",
        textActive: "text-orange-600",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
      };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between ${colors.navBg} backdrop-blur-lg rounded-2xl px-6 py-2 shadow-lg w-[90%]`}
      >
        {/* LOGO */}
        <motion.a href="#home" whileHover={{ scale: 1.05 }}>
          <span className={`text-xl font-bold ${colors.textPrimary}`}>
            Portfolio <span className="text-orange-500">.</span>
          </span>
        </motion.a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setActiveSection(item.name.toLowerCase())}
              className="relative"
            >
              <motion.span
                className={`font-medium ${
                  activeSection === item.name.toLowerCase()
                    ? colors.textActive
                    : `${colors.textSecondary} hover:text-orange-500`
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.span>

              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="indicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r ${colors.indicator}`}
                />
              )}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-3">

          {/* DARK MODE */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkModeFirst ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {darkModeFirst ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>

          {/* HIRE ME */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className={`hidden lg:block px-5 py-2 rounded-full bg-linear-to-r ${colors.button} text-white`}
          >
            Hire Me
          </motion.a>

          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-20 w-[90%] ${colors.navBg} backdrop-blur-lg rounded-xl shadow-lg lg:hidden`}
        >
          <div className="p-4 space-y-3">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => {
                  setActiveSection(item.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className={`p-3 rounded-lg text-center ${
                    activeSection === item.name.toLowerCase()
                      ? darkModeFirst
                        ? "bg-gray-800"
                        : "bg-orange-50"
                      : ""
                  }`}
                >
                  <span
                    className={`${
                      activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : colors.textSecondary
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.div>
              </a>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
              className={`block p-3 text-center rounded-lg bg-linear-to-r ${colors.button} text-white`}
            >
              Hire Me
            </motion.a>

          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;