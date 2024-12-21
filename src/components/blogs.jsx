import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding React Basics",
    location: "Yeola, Nashik",
    excerpt: "A comprehensive guide to understanding the basics of React.",
    avatar: "https://cdn-icons-png.freepik.com/256/4140/4140048.png?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid", // Placeholder avatar
    link: "#",
  },
  {
    id: 2,
    title: "CSS Flexbox Made Simple",
    location: "Kothrud, Pune",
    excerpt: "Learn how to use Flexbox to build modern layouts efficiently.",
    avatar: "https://cdn-icons-png.freepik.com/256/4140/4140057.png?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid",
    link: "#",
  },
  {
    id: 3,
    title: "The Power of JavaScript ES6",
    location: "Indore, MP",
    excerpt: "Explore the new features of JavaScript ES6 with examples.",
    avatar: "https://cdn-icons-png.freepik.com/256/4140/4140037.png?ga=GA1.1.1639690396.1734718578&semt=ais_hybrid",
    link: "#",
  },
];

const BlogsSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Latest Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Reduced gap */}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white max-w-xs mx-auto min-h-[350px] rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 p-6"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <img
                  src={blog.avatar}
                  alt={blog.title}
                  className="w-20 h-20 rounded-full border-4 border-blue-100 shadow"
                />
              </div>

              {/* Name & Location */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
                <p className="text-gray-500 text-sm">{blog.location}</p>
              </div>

              {/* Excerpt */}
              <p className="text-center text-gray-600 mt-4">{blog.excerpt}</p>

              {/* Read More Link */}
              <div className="text-center mt-6">
                <a
                  href={blog.link}
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
