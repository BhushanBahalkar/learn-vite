import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Abhishek Lohar",
    feedback:
      "Incredible CRM solutions, streamlined our processes effortlessly. User-friendly interface, boosted productivity. A game-changer for our business operations. Highly recommend!",
    stars: 5,
  },
  {
    id: 2,
    name: "Prerna Bhole",
    feedback:
      "Exceptional web developer—transformed our vision into a sleek, user-friendly site. Professional, skilled, and a pleasure to work with!",
    stars: 5,
  },
  {
    id: 3,
    name: "Ketan Ghatkar",
    feedback:
      "Outstanding web design service—captured our brand essence with creativity and precision. A seamless and visually impressive user experience. Highly recommend!",
    stars: 4,
  },
  {
    id: 4,
    name: "Nik Jonas",
    feedback:
      "Brilliant technical support! Resolved our issues quickly with expert guidance. A trusted partner for tech solutions.",
    stars: 5,
  },
  {
    id: 5,
    name: "Meera Joshi",
    feedback:
      "Their expertise in mobile app development is top-notch. Delivered a smooth, user-friendly app that exceeded our expectations!",
    stars: 5,
  },
  {
    id: 6,
    name: "Raj Malhotra",
    feedback:
      "SEO services helped us rank higher and reach a broader audience. Effective strategies and a dedicated team. Highly recommend!",
    stars: 4,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;

  const totalDots = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalDots); 
    }, 2500); // Auto-cycle every 2.5 seconds
    return () => clearInterval(interval);
  }, [totalDots]);

  // Handle manual dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Get testimonials for the current group
  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    currentIndex * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <div className="bg-[#DFF2EB] py-16 px-5">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-8">
        <span className="text-[#FFA24C]">Testimonial</span>
        <br />
        <span>Our Client Saying!</span>
      </h2>
      {/* Testimonials */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
        {currentTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-green-50 rounded-lg shadow-md p-6 w-full sm:w-80 transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-orange-600">{testimonial.name}</h3>
            <div className="flex items-center mt-2 mb-4 text-blue-600">
              {Array(testimonial.stars)
                .fill()
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-700 text-sm">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
      {/* Sliding Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              currentIndex === index ? "bg-[#FFA24C]" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
