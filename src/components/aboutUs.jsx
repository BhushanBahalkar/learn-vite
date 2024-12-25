import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-pink-100 py-16 px-8">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-8">
          Pioneers in Ed-Tech Industry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">A Societal Vision</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              To transform aspiring learners into skilled tech leaders who innovate,
              inspire, and shape the future through coding. To transform aspiring learners into skilled tech leaders who innovate,
              inspire, and shape the future through coding.To transform aspiring learners into skilled tech leaders who innovate,
              inspire, and shape the future through coding.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=400&auto=format&fit=crop&q=60"
                alt="Vision"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
              {/* Image Attribution */}
              <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-500 bg-white bg-opacity-70 py-1">
                <span>Image by Unsplash</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop&q=60"
                alt="Mission"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
              {/* Image Attribution */}
              <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-500 bg-white bg-opacity-70 py-1">
                <span>Image by Unsplash</span>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Mission</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              To nurture the next generation of tech leaders through practical,
              cutting-edge coding training that inspires innovation, creativity,
              and problem-solving. To transform aspiring learners into skilled tech leaders who innovate,
              inspire, and shape the future through coding.To transform aspiring learners into skilled tech leaders who innovate,
              inspire, and shape the future through coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
