import React, { useState } from "react";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1667058015143-d0d8e7fddd6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col px-4">
        {/* Centered Text */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          <span>Learning</span>
          <br />
          <span>Book</span>
        </h2>

        <div className="relative flex items-center w-full sm:w-3/4 md:w-1/2 mt-8">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search tutorials, articles, or topics..."
            onChange={handleInputChange}
            className={`transition-all duration-300 pl-10 pr-12 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
              isTyping ? "w-full" : "w-[calc(100%-50px)]"
            }`}
          />

          {/* Search Icon */}
          <div className="absolute right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19a9 9 0 100-18 9 9 0 000 18zM21 21l-4.35-4.35"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Attribution Text */}
      <div className="absolute bottom-4 left-4 text-xs sm:text-sm text-white">
        <p>
          Photo by{" "}
          <a
            href="https://unsplash.com/@alexanderpolous?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="underline text-yellow-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexander Polous
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com"
            className="underline text-yellow-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
  