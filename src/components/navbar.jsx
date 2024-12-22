import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleScroll = debounce(() => {
    setIsTransparent(window.scrollY < window.innerHeight);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full text-white transition-colors duration-280 z-50 ${
        isTransparent ? "bg-transparent" : "bg-[#FFA24C]"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold">Learning Book</div>

        <ul className="hidden md:flex space-x-7">
          {["Home", "About", "Services", "Special Programs", "Contact Us"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={`hover:text-[#FEEC37] ${
                    isTransparent ? "text-gray-200" : "text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 ${
              isTransparent ? "text-gray-200" : "text-white"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <ul className="space-y-4 px-4 py-4">
            {["Home", "About", "Services", "Special Programs", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="block hover:text-[#FEEC37]"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
