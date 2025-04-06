import React from 'react';
import { Code2, Database, Globe, Terminal, Cpu, Lock } from 'lucide-react';
import BackButton from './BackButton';

interface ComputerSciencePageProps {
  onNavigate: (page: string, subject?: string, classNum?: string, topic?: string) => void;
}

const ComputerSciencePage: React.FC<ComputerSciencePageProps> = ({ onNavigate }) => {
  const topics = [
    {
      title: 'Programming Fundamentals',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Learn the basics of programming including variables, loops, and functions',
      subtopics: ['Python', 'Java', 'C++']
    },
    {
      title: 'Data Structures',
      icon: <Database className="w-6 h-6" />,
      description: 'Master essential data structures like arrays, linked lists, and trees',
      subtopics: ['Arrays', 'Linked Lists', 'Trees & Graphs']
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      description: 'Build modern websites using HTML, CSS, and JavaScript',
      subtopics: ['HTML/CSS', 'JavaScript', 'React']
    },
    {
      title: 'Operating Systems',
      icon: <Terminal className="w-6 h-6" />,
      description: 'Understand how computers work at the system level',
      subtopics: ['Process Management', 'Memory Management', 'File Systems']
    },
    {
      title: 'Computer Architecture',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Learn about computer hardware and organization',
      subtopics: ['CPU Architecture', 'Memory Hierarchy', 'I/O Systems']
    },
    {
      title: 'Cybersecurity',
      icon: <Lock className="w-6 h-6" />,
      description: 'Explore computer security principles and practices',
      subtopics: ['Network Security', 'Cryptography', 'Web Security']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <BackButton onNavigate={() => onNavigate('home')} />
        
        <h1 className="text-4xl font-bold text-white mb-8 mt-8">Computer Science</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border-2 border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              onClick={() => onNavigate('topic', 'computer-science', undefined, topic.title.toLowerCase())}
            >
              <div className="flex items-center mb-4">
                {topic.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{topic.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{topic.description}</p>
              <div className="space-y-2">
                {topic.subtopics.map((subtopic, idx) => (
                  <div key={idx} className="text-sm text-gray-300">• {subtopic}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerSciencePage;