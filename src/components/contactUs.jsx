import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    countryCode: "+91",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! Thank you for contacting us.");
  };

  return (
    <div className="bg-[#DFF2EB] py-16 px-5">
      {/* Title Section */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
      <p className="text-center text-gray-600 text-lg mb-8">
        Hello there! Got questions or just want to say hi? Drop us a message,
        and we'll get back to you as soon as possible. Let’s stay connected!
      </p>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        {/* Left Section */}
        <div className="flex-2 bg-blue-50 p-10 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-5">Get In Touch</h1>
          <p className="text-gray-600 mb-4">
            Reach us at the following address, phone, or email. We're here to help!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                alt="Location"
                className="w-6 h-6 mr-2"
              />
              Office No. 69, 7th floor, C wing, Shreenath Plaza, FC Road, Pune – 411005
            </li>
            <li className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/16341/16341536.png"
                alt="Phone"
                className="w-6 h-6 mr-2"
              />
              +91 1234567890 / +91 1234567890
            </li>
            <li className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/712/712040.png"
                alt="Email"
                className="w-6 h-6 mr-2"
              />
              learningbook@gmail.com
            </li>
          </ul>
          {/* Social Media */}
          <div className="mt-6 flex gap-4">
            <a href="https://www.facebook.com/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a href="https://www.linkedin.com/company/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3669/3669739.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-5">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
            />
            <div className="flex gap-4">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-20 p-3 border border-gray-300 rounded-lg focus:outline-none"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
            />
            <button
              type="submit"
              className="block w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.057435338558!2d73.83992867523696!3d18.52630648256835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f85464493%3A0x4415f79dee1766d8!2sShreenath%20Plaza%2C%20Sud%20Nagar%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra%20411005!5e0!3m2!1sen!2sin!4v1734015644532!5m2!1sen!2sin"
          className="w-full h-64 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
