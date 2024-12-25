import React from "react";

const UpcomingBatchModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Upcoming Batch</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 shadow-sm">
            <img
              src="https://cdn-icons-png.freepik.com/256/919/919854.png?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid"
              alt="Java Logo"
              className="h-12 w-12 mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Java & Java 8</h3>
            <p className="text-sm text-gray-600 mb-3">
              Unlock the Power of Java 8 with Coding Granth. Our Java training
              program is designed to equip learners with the in-depth knowledge
              and practical skills needed to build robust, scalable
              applications using Java 8 features.
            </p>
            <p className="text-sm font-medium">
              📅 <strong>7th January 2025</strong>
            </p>
            <p className="text-sm font-medium">🌐 Online | Offline</p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
              alt="Spring Boot Logo"
              className="h-12 w-12 mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">Spring Boot</h3>
            <p className="text-sm text-gray-600 mb-3">
              Our Spring Boot training program empowers learners with
              comprehensive knowledge and hands-on expertise to develop robust,
              scalable applications. Dive deep into Java 8 features and build
              modern, enterprise-grade applications with Spring Boot.
            </p>
            <p className="text-sm font-medium">
              📅 <strong>7th January 2025</strong>
            </p>
            <p className="text-sm font-medium">🌐 Online | Offline</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              alert("Redirecting to Contact Us...");
              onClose();
            }}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Book a seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBatchModal;
