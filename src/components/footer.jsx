import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:flex md:justify-between md:gap-8">
        {/* About Section */}
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h2 className="text-2xl font-bold">Learning Granth</h2>
          <p className="mt-4 text-gray-400">
            Empowering students with skills to excel in the modern workplace.
            Join us and build a bright future!
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/courses" className="hover:text-blue-400">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest updates on courses and events!
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500">
          &copy; 2024 Learning Granth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
