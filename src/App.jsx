import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import TrendingCourses from "./components/trendingCourses";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <TrendingCourses/>
    </div>
  );
};

export default App;
