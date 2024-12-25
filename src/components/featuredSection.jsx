import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-10 min-h-screen bg-[#F6EACB] flex flex-col justify-center">
      <div className="text-center mb-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">Learn New Skills</h2>
        <p className="mt-5 text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlab
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {/* Feature 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="fas fa-pencil-alt text-gray-600 text-2xl sm:text-3xl"></i>
          </div>
          <h3 className="text-2xl sm:text-3xl text-gray-800">Learn Anything</h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consetetur sadi ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="fas fa-th text-gray-600 text-2xl sm:text-3xl"></i>
          </div>
          <h3 className="text-2xl sm:text-3xl text-gray-800">Large Collection</h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consetetur sadi ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="fas fa-certificate text-gray-600 text-2xl sm:text-3xl"></i>
          </div>
          <h3 className="text-2xl sm:text-3xl text-gray-800">Certified Instructors</h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consetetur sadi ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
