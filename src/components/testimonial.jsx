import React from "react";

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
];

const Testimonial = () => {
  return (
    <div className="bg-[#DFF2EB] py-16 px-5">
      <h2 className="text-center text-4xl font-bold mb-5">
        <span className="text-[#FFA24C]">Testimonial</span>
        <br />
        <span>Our Client Saying!</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {testimonials.map((testimonial) => (
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
    </div>
  );
};

export default Testimonial;
