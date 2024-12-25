import React from "react";

const SpecialProgram = () => {
  return (
    <div className="bg-pink-100 py-16">
      <div className="container mx-auto">
        {/* Title Section */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-8">
          Join Our Special Program
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-1xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Our exclusive program is designed to provide in-depth learning,
          personalized mentorship, and hands-on projects to help you excel in
          your career.
        </p>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-0">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/people-with-high-technology-device-isometric-illustration_1284-31054.jpg?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid/400x250"
              alt="Special Program"
              className="rounded-lg shadow-lg w-full sm:w-3/4 md:w-full lg:w-4/5"
            />
          </div>

          {/* Text Section */}
          <div className="text-left">
            <ul className="list-disc list-inside text-sm sm:text-lg md:text-xl lg:text-1xl text-gray-700 space-y-3 mb-8">
              <li>Interactive live sessions with industry experts</li>
              <li>Exclusive access to premium resources</li>
              <li>Certificate of completion for outstanding participants</li>
              <li>Hands-on projects to build practical skills</li>
              <li>Personalized mentorship from experienced professionals</li>
            </ul>
            <div className="text-center sm:text-left">
              <button
                className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Image Attribution */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <span>Image by Freepik</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialProgram;
