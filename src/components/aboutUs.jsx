import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#F6EACB] py-16 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1534458246008-80a1ce3028cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwZXJzb24lMjBzdGFuZGluZyUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D/300"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold text-center mb-5">About Us</h2>
            <p className="text-gray-600 text-lg mb-6">
              At Learning Granth, we are dedicated to empowering learners worldwide with top-quality resources and programs. Our mission is to provide accessible, affordable, and impactful learning solutions that help individuals reach their full potential.
              At Learning Granth, we are dedicated to empowering learners worldwide with top-quality resources and programs. Our mission is to provide accessible, affordable, and impactful learning solutions that help individuals reach their full potential.
              At Learning Granth, we are dedicated to empowering learners worldwide with top-quality resources and programs. Our mission is to provide accessible, affordable, and impactful learning solutions that help individuals reach their full potential.
             At Learning Granth, we are dedicated to empowering learners worldwide with top-quality resources and programs. Our mission is to provide accessible, affordable, and impactful learning solutions that help individuals reach their full potential.
              At Learning Granth, we are dedicated to empowering learners worldwide with top-quality resources and programs. Our mission is to provide accessible, affordable, and impactful learning solutions that help individuals reach their full potential.
              At Learning Granth, we are dedicated to empowering learners worldwide with top-quality resources and programs. Our mission is to provide accessible, affordable, and impactful learning solutions that help individuals reach their full potential.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li className="mb-2">Highly curated courses designed by experts.</li>
              <li className="mb-2">Interactive learning experiences with real-world applications.</li>
              <li className="mb-2">Supportive community to guide your journey.</li>
            </ul>
            <button
              className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;