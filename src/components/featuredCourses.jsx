import React from "react";

const featuredCourses = [
  { id: 1, title: "Full Stack Development", description: "Become proficient in front-end and back-end technologies.", image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901769.jpg?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid/150" },
  { id: 2, title: "Cloud Computing", description: "Understand cloud platforms and services.", image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399284.jpg?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid/150" },
  { id: 3, title: "Cybersecurity", description: "Learn how to secure systems and protect data.", image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148543851.jpg?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid/150" },
  { id: 4, title: "UI/UX Design", description: "Design user-friendly and visually appealing interfaces.", image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid/150" },
  { id: 5, title: "Artificial Intelligence", description: "Explore AI concepts and their applications.", image: "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid/150" },
  { id: 6, title: "Blockchain Technology", description: "Dive into decentralized technologies and their uses.", image: "https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-social-media-post_53876-112176.jpg?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid/150" },
];

const FeaturedCourses = () => {
  return (
    <div className="bg-[#DFF2EB] py-16 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-5">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 hover:bg-gray-100"
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
      </div>
    </div>
  );
};

export default FeaturedCourses;
