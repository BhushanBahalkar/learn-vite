import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import TrendingCourses from "./components/trendingCourses";
import SpecialProgram from "./components/specialPrograme";
import FeaturedCourses from "./components/featuredCourses";
import BlogsSection from "./components/blogs";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import FeaturesSection from "./components/featuredSection";
import Testimonial from "./components/testimonial";
import ContactUs from "./components/contactUs";
import UpcomingBatchModal from "./components/upcomingBatchModal";

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Automatically show the modal after a delay (e.g., 10 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <Navbar />
      <Home />


      {/* Notification Trigger Button */}
      <button
        onClick={openModal}
        className="fixed bottom-5 right-5 bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 z-50"
      >
        View Upcoming Batches
      </button>


      {/* Modal Component */}
      {isModalVisible && <UpcomingBatchModal onClose={closeModal} />}

      {/* Main Sections */}
      <TrendingCourses />
      <SpecialProgram />
      <FeaturedCourses />
      <BlogsSection />
      <Testimonial />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
