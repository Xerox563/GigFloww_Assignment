import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-[#9590f0] to-[#654ea3] shadow-lg fixed w-full top-0 z-50 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center relative ">
              <img
                src="https://i.postimg.cc/pV99fSVj/Oryr-Hbjkta-OUd8-PEXD4-UZGo-IU1-H1725371017229-200x200-removebg-preview.png"
                alt="GigFloww Logo"
                className=" w-[76px] sm:w-[78px] md:w-[86px] lg:w-[96px] h-auto object-contain transition-all duration-300"
                style={{
                  marginTop: "-2px",
                  maxWidth: "100%",
                }}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-8"
            >
              <motion.a
                href="/"
                className="text-gray-700 hover:text-purple-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.a>

              {/* Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={toggleDropdown}
                  className="text-gray-700 hover:text-purple-600 transition duration-300 flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                  <motion.svg
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1" role="menu">
                      {[
                        "Freelance Gigs",
                        "Project Marketplace",
                        "Consulting",
                      ].map((item, index) => (
                        <motion.a
                          key={item}
                          href={`/${item.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                          whileHover={{ backgroundColor: "#FAF5FF", x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.a
                href="/about"
                className="text-gray-700 hover:text-purple-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>

              <motion.a
                href="/contact"
                className="text-gray-700 hover:text-purple-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden flex items-center"
          >
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
            >
              <motion.svg
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-r from-[#711ce0] to-[#b1b0b6]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "Services", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
