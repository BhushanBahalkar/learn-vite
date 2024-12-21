import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Education",
    excerpt: "Discover how artificial intelligence is transforming learning experiences around the globe.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    id: 2,
    title: "Top 10 Programming Languages to Learn",
    excerpt: "Stay ahead of the curve with the most in-demand programming languages of 2024.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    id: 3,
    title: "Cybersecurity Trends You Should Know",
    excerpt: "Explore the latest trends in cybersecurity to keep your data safe and secure.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
];

const BlogsSection = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  Read More
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
