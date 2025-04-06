import React from 'react';
import { ChevronLeft, FlaskRound as Flask, Dna, Atom } from 'lucide-react';

interface SciencePageProps {
  onNavigate: (page: string) => void;
}

const SciencePage: React.FC<SciencePageProps> = ({ onNavigate }) => {
  const topics = [
    {
      title: 'Physics',
      icon: <Atom className="w-6 h-6" />,
      description: 'Learn mechanics, electricity, waves, and more',
      subtopics: ['Mechanics', 'Electricity', 'Waves', 'Thermodynamics']
    },
    {
      title: 'Chemistry',
      icon: <Flask className="w-6 h-6" />,
      description: 'Explore atoms, reactions, and chemical processes',
      subtopics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry']
    },
    {
      title: 'Biology',
      icon: <Dna className="w-6 h-6" />,
      description: 'Study life processes, organisms, and ecosystems',
      subtopics: ['Cell Biology', 'Genetics', 'Ecology', 'Human Physiology']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-blue-500 hover:text-blue-400 mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">Science</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-500 mr-3">{topic.icon}</div>
                <h2 className="text-xl font-semibold text-white">{topic.title}</h2>
              </div>
              <p className="text-gray-400 mb-4">{topic.description}</p>
              <div className="space-y-2">
                {topic.subtopics.map((subtopic, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200"
                    onClick={() => onNavigate('topic', 'science', undefined, subtopic.toLowerCase())}
                  >
                    • {subtopic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 rounded-xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Why Study Science?</h2>
          <p className="text-gray-400 mb-6">
            Science helps us understand the world around us. From the smallest atoms to the vast cosmos,
            scientific knowledge enables us to solve problems, develop new technologies, and make
            informed decisions about our future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Critical Thinking</h3>
              <p className="text-gray-400">Develop analytical and problem-solving skills</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">Learn to create and develop new solutions</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Career Opportunities</h3>
              <p className="text-gray-400">Open doors to diverse and rewarding careers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SciencePage;