import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1534458246008-80a1ce3028cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwZXJzb24lMjBzdGFuZGluZyUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D/500"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
            <p className="text-gray-600 text-lg mb-6">
              At Learning Granth, we are dedicated to empowering learners worldwide with top-quality resources and programs. Our mission is to provide accessible, affordable, and impactful learning solutions that help individuals reach their full potential.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li className="mb-2">Highly curated courses designed by experts.</li>
              <li className="mb-2">Interactive learning experiences with real-world applications.</li>
              <li className="mb-2">Supportive community to guide your journey.</li>
            </ul>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;