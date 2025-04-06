import React from 'react';
import { BookOpen } from 'lucide-react';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive selection of courses designed to help you excel in your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Cards */}
          {[
            {
              title: "Mathematics",
              description: "Master mathematical concepts from basic arithmetic to advanced calculus",
              image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Science",
              description: "Explore the wonders of physics, chemistry, and biology",
              image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Computer Science",
              description: "Learn programming, algorithms, and computer fundamentals",
              image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=800",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;