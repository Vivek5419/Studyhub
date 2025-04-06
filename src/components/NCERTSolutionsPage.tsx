import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const NCERTSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          NCERT Solutions
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Access comprehensive solutions to NCERT textbook questions, carefully crafted to help you master your subjects and excel in your studies.
        </p>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{subject.description}</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                View Solutions
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our NCERT Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const subjects = [
  {
    name: "Mathematics",
    description: "Step-by-step solutions to all mathematics problems with detailed explanations."
  },
  {
    name: "Science",
    description: "Comprehensive solutions covering Physics, Chemistry, and Biology concepts."
  },
  {
    name: "English",
    description: "Detailed answers to literature and grammar questions with proper explanations."
  },
  {
    name: "Social Science",
    description: "In-depth solutions for History, Geography, Civics, and Economics."
  },
  {
    name: "Hindi",
    description: "Complete solutions with proper explanations in both Hindi and English."
  },
  {
    name: "Sanskrit",
    description: "Detailed solutions with translations and grammatical explanations."
  }
];

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Expert Solutions",
    description: "Solutions prepared by experienced teachers and subject matter experts."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Step-by-Step Approach",
    description: "Detailed explanations with step-by-step problem-solving methods."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Regular Updates",
    description: "Solutions updated regularly to match the latest NCERT curriculum."
  }
];

export default NCERTSolutionsPage;