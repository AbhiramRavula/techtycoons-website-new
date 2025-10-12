"use client";

import Link from "next/link";

// Blog tags list
const blogTags = [
  "Programming",
  "Block Chain",
  "Web Dev",
  "JavaScript",
  "Python",
  "Hackathons",
  "Competitive Programming",
  "C++",
  "HTML",
  "Web3 vs Web2",
  "Software Engineering",
  "ML",
  "AI",
  "Technology",
  "Coding",
  "Robotics",
];

// Blog posts data
const blogPosts = [
  {
    title: "Pricing Table Examples With 3 Choices Using HTML & CSS",
    author: "Aneesh Malapaka",
    date: "more than a month ago",
    tags: ["Programming", "Web Dev"],
    link: "https://www.codewithrandom.com/2022/11/19/pricing-table-html-css/",
    readTime: "5 min read",
  },
  {
    title: "Industrial Revolution: What Caused it?",
    author: "Shanmukh Adithya",
    date: "1 day ago",
    tags: ["Programming", "Web3"],
    link: "https://shanmukh3003.blogspot.com/2022/12/due-tothe-development-in-5g-era-were-in.html",
    readTime: "5 min read",
  },
  // Add more sample blog posts here
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fa]">
      {/* Hero Section */}
      <section className="relative bg-[#0b0d23] text-white py-20 px-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d23]/90 to-[#0b0d23]/70">
          <img 
            src="/Images/anime/blogPicAdi.jpg" 
            alt="Blog Background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            The Tech Tycoon&apos;s Blog
          </h1>
          <p 
            className="text-xl text-gray-300"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Here&apos;s a collection of some of the most insightful blogs made by tech tycoons
          </p>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {blogTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium hover:bg-blue-200 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src="/Images/anime/mission.png"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 mb-2">
                  {post.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
