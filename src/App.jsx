import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import TrendingCourses from "./components/trendingCourses";
import SpecialProgram from "./components/specialPrograme";
import FeaturedCourses from "./components/featuredCourses";
import BlogsSection from "./components/blogs";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <TrendingCourses/>
      <SpecialProgram/>
      <FeaturedCourses/>
      <BlogsSection/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default App;
