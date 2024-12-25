import React, { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern web applications with us at Learning Granth.",
    image: "https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg",
    duration: "6 weeks",
    mode: "Online/Offline",
    time: "120 mins",
    sessions: "5 sessions/week",
    attribution: "Image by Freepik"
  },
  {
    id: 2,
    title: "Data Science",
    description: "Master data analysis and visualization with us at Learning Granth.",
    image: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg",
    duration: "6 weeks",
    mode: "Online/Offline",
    time: "120 mins",
    sessions: "5 sessions/week",
    attribution: "Image by Freepik"
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Create stunning designs and visuals with us at Learning Granth.",
    image: "https://img.freepik.com/free-photo/ideas-design-draft-creative-sketch-objective-concept_53876-121105.jpg",
    duration: "8 weeks",
    mode: "Online",
    time: "90 mins",
    sessions: "4 sessions/week",
    attribution: "Image by Freepik"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Become an expert in online marketing with us at Learning Granth.",
    image: "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg",
    duration: "5 weeks",
    mode: "Offline",
    time: "100 mins",
    sessions: "3 sessions/week",
    attribution: "Image by Freepik"
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "Dive into AI and machine learning concepts with us at Learning Granth.",
    image: "https://img.freepik.com/free-vector/artificial-intelligence-template-landing-page_23-2148331041.jpg",
    duration: "12 weeks",
    mode: "Online",
    time: "150 mins",
    sessions: "6 sessions/week",
    attribution: "Image by Freepik"
  },
];

const TrendingCourses = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handlePrev = () => {
    setVisibleIndex((prevIndex) => (prevIndex === 0 ? courses.length - 3 : prevIndex - 3));
  };

  const handleNext = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 3 >= courses.length ? 0 : prevIndex + 3));
  };

  return (
    <div className="relative py-10 bg-[#DFF2EB]">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-8">Trending Courses</h2>

      <div className="flex items-center justify-center space-x-4">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 text-xs sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
          {courses.slice(visibleIndex, visibleIndex + 3).map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">{course.description}</p>

                <div className="grid grid-cols-2 gap-2 text-gray-600 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <span>📅</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>💻</span>
                    <span>{course.mode}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⏱️</span>
                    <span>{course.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📚</span>
                    <span>{course.sessions}</span>
                  </div>
                </div>
              </div>

              {/* Image Attribution */}
              <div className="p-2 text-xs text-gray-500">
                <span>{course.attribution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 text-xs sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrendingCourses;
