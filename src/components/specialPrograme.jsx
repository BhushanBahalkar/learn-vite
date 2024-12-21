import React from "react";

const SpecialProgram = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Special Program</h2>
        <p className="text-lg md:text-xl mb-8">
          Our exclusive program is designed to provide in-depth learning, personalized mentorship, and hands-on projects to help you excel in your career.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Special Program"
            className="rounded-lg shadow-md w-1/2 md:w-1/3"
          />
          <div className="text-left w-1/2">
            <ul className="list-disc list-inside text-lg mb-6">
              <li>Interactive live sessions with industry experts</li>
              <li>Exclusive access to premium resources</li>
              <li>Certificate of completion for outstanding participants</li>
            </ul>
            <button
              className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProgram;
