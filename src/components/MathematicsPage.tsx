import React from 'react';
import BackButton from './BackButton';
import { BookOpen, Calculator, Brain, Clock } from 'lucide-react';

interface MathematicsPageProps {
  onNavigate: (page: string, subject?: string, classNum?: string, topic?: string) => void;
}

const MathematicsPage: React.FC<MathematicsPageProps> = ({ onNavigate }) => {
  const topics = [
    {
      title: 'Calculus',
      icon: <Calculator className="w-6 h-6" />,
      subtopics: ['Limits', 'Derivatives', 'Integration', 'Applications']
    },
    {
      title: 'Algebra',
      icon: <BookOpen className="w-6 h-6" />,
      subtopics: ['Polynomials', 'Matrices', 'Complex Numbers', 'Vectors']
    },
    {
      title: 'Trigonometry',
      icon: <Brain className="w-6 h-6" />,
      subtopics: ['Basic Concepts', 'Identities', 'Heights & Distances', 'Applications']
    }
  ];

  const quickLinks = [
    'Practice Problems',
    'Video Lectures',
    'Formula Sheets',
    'Mock Tests'
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 mt-4">Mathematics</h1>
          <p className="text-gray-400 text-lg">Master mathematics with comprehensive study materials and practice resources</p>
        </div>

        {/* Quick Access Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all text-center"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Main Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topics.map((topic, index) => (
            <div key={index} className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center mb-4 text-white">
                {topic.icon}
                <h2 className="text-xl font-semibold ml-3">{topic.title}</h2>
              </div>
              <ul className="space-y-3">
                {topic.subtopics.map((subtopic, idx) => (
                  <li 
                    key={idx}
                    className="text-gray-400 hover:text-white cursor-pointer transition-colors flex items-center"
                    onClick={() => onNavigate('topic', 'mathematics', undefined, subtopic.toLowerCase())}
                  >
                    • {subtopic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recent Updates Section */}
        <div className="rounded-lg bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Recent Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'New Calculus Practice Set Added',
              'Updated Trigonometry Formula Sheet',
              'Vector Algebra Video Lecture Series'
            ].map((update, index) => (
              <div key={index} className="p-4 rounded bg-white/5 text-gray-300 hover:text-white cursor-pointer">
                {update}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathematicsPage;