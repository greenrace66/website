import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "My Journey into Computational Biology",
      excerpt: "Exploring the fascinating intersection of computer science and biology...",
      date: "March 15, 2024",
      readTime: "5 min read",
      link: "https://your-blog-url.com/journey-computational-biology"
    },
    {
      title: "Understanding Protein Design Through ML",
      excerpt: "Deep diving into how machine learning is revolutionizing protein design...",
      date: "March 10, 2024",
      readTime: "7 min read",
      link: "https://your-blog-url.com/protein-design-ml"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Blog</h2>
          <a
            href="https://your-blog-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View all posts
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-blue-600">
                Read more
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;