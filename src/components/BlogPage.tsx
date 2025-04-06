import React from 'react';
import BackButton from './BackButton';
import { Calendar, User, Clock, Tag, ChevronRight } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const blogPosts = [
    {
      title: 'How to Prepare for Board Exams: A Complete Guide',
      excerpt: 'Comprehensive strategies and tips to help you ace your board examinations...',
      author: 'Dr. Sarah Johnson',
      date: 'December 15, 2025',
      readTime: '8 min read',
      tags: ['Study Tips', 'Board Exams', 'Preparation'],
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1946&q=80'
    },
    {
      title: 'Understanding Complex Mathematics: Breaking it Down',
      excerpt: 'Learn how to approach and solve complex mathematical problems with ease...',
      author: 'Prof. Michael Chen',
      date: 'December 12, 2025',
      readTime: '6 min read',
      tags: ['Mathematics', 'Learning', 'Problem Solving'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'The Future of Education: Digital Learning Trends',
      excerpt: 'Exploring how technology is reshaping the educational landscape...',
      author: 'Emma Williams',
      date: 'December 10, 2025',
      readTime: '5 min read',
      tags: ['EdTech', 'Digital Learning', 'Future'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    }
  ];

  const categories = [
    'Study Tips',
    'Academic Success',
    'Test Preparation',
    'Student Life',
    'Career Guidance'
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 mt-4">Blog</h1>
          <p className="text-gray-400 text-lg">Latest insights, tips, and updates from our education experts</p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title}
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-300 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex gap-2">
                {blogPosts[0].tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 text-center text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer transition-all"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;