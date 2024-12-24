import React from "react";
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

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <FeaturesSection/>
      <TrendingCourses/>
      <SpecialProgram/>
      <FeaturedCourses/>
      <BlogsSection/>
      <Testimonial/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default App;
