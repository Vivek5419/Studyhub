import React from 'react';
import BackButton from './BackButton';
import { BookOpen, BrainCircuit, ScrollText, FileText } from 'lucide-react';

interface ClassPageProps {
  classNum: string;
  onNavigate: (page: string, subject?: string, classNum?: string, topic?: string) => void;
}

const ClassPage: React.FC<ClassPageProps> = ({ classNum, onNavigate }) => {
  const subjects = [
    {
      name: 'Mathematics',
      icon: <BookOpen className="w-6 h-6" />,
      topics: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus']
    },
    {
      name: 'Science',
      icon: <BrainCircuit className="w-6 h-6" />,
      topics: ['Physics', 'Chemistry', 'Biology']
    },
    {
      name: 'Computer Science',
      icon: <ScrollText className="w-6 h-6" />,
      topics: ['Programming', 'Data Structures', 'Web Development']
    }
  ];

  const resources = [
    'NCERT Solutions',
    'Important Questions',
    'Previous Year Papers',
    'Sample Papers',
    'Video Lectures',
    'Practice Tests'
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 mt-4">Class {classNum}</h1>
          <p className="text-gray-400 text-lg">Comprehensive study materials and resources for Class {classNum} students</p>
        </div>

        {/* Quick Access Resources */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {resources.map((resource, index) => (
            <button
              key={index}
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all text-center"
            >
              {resource}
            </button>
          ))}
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {subjects.map((subject, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              onClick={() => onNavigate('subject', subject.name.toLowerCase(), classNum)}
            >
              <div className="flex items-center mb-4 text-white">
                {subject.icon}
                <h2 className="text-xl font-semibold ml-3">{subject.name}</h2>
              </div>
              <ul className="space-y-3">
                {subject.topics.map((topic, idx) => (
                  <li 
                    key={idx}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('topic', subject.name.toLowerCase(), classNum, topic.toLowerCase());
                    }}
                  >
                    • {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Study Materials */}
        <div className="rounded-lg bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Study Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Chapter Notes',
              'Formula Sheets',
              'Mind Maps',
              'Practice Questions',
              'Mock Tests',
              'Video Tutorials'
            ].map((material, index) => (
              <div 
                key={index}
                className="p-4 rounded bg-white/5 text-gray-300 hover:text-white cursor-pointer hover:bg-white/10 transition-all"
              >
                {material}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;