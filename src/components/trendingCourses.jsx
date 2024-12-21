import React, { useState } from "react";

const courses = [
  { id: 1, title: "Web Development", description: "Learn to build modern web applications with us at learning granth.", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Data Science", description: "Master data analysis and visualization with us at learning granth.", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Graphic Design", description: "Create stunning designs and visuals with us at learning granth.", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Digital Marketing", description: "Become an expert in online marketing with us at learning granth.", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Machine Learning", description: "Dive into AI and machine learning concepts with us at learning granth.", image: "https://via.placeholder.com/150" },
];

const TrendingCourses = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handlePrev = () => {
    setVisibleIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setVisibleIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Courses</h2>

      <div className="flex items-center justify-center space-x-4">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {courses.slice(visibleIndex, visibleIndex + 3).map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrendingCourses;
