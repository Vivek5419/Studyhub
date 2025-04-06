import React from 'react';
import BackButton from './BackButton';
import { BookOpen, Video, FileText, CheckCircle, Clock, BrainCircuit } from 'lucide-react';

interface TopicPageProps {
  subject: string;
  topic: string;
  onNavigate: (page: string) => void;
}

const TopicPage: React.FC<TopicPageProps> = ({ subject, topic, onNavigate }) => {
  const formatTitle = (str: string) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const resources = [
    {
      title: 'Video Lectures',
      icon: <Video className="w-6 h-6" />,
      count: '12 videos'
    },
    {
      title: 'Study Notes',
      icon: <FileText className="w-6 h-6" />,
      count: '8 documents'
    },
    {
      title: 'Practice Problems',
      icon: <BrainCircuit className="w-6 h-6" />,
      count: '50+ questions'
    }
  ];

  const progress = [
    {
      title: 'Introduction to Topic',
      duration: '45 mins',
      completed: true
    },
    {
      title: 'Core Concepts',
      duration: '1.5 hours',
      completed: true
    },
    {
      title: 'Advanced Applications',
      duration: '2 hours',
      completed: false
    },
    {
      title: 'Practice Problems',
      duration: '1 hour',
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <div className="mb-12">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <span>{formatTitle(subject)}</span>
            <span>•</span>
            <span>{formatTitle(topic)}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{formatTitle(topic)}</h1>
          <p className="text-gray-400 text-lg">Master the fundamentals and advanced concepts of {formatTitle(topic)}</p>
        </div>

        {/* Learning Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="flex items-center mb-4 text-white">
                {resource.icon}
                <h2 className="text-xl font-semibold ml-3">{resource.title}</h2>
              </div>
              <p className="text-gray-400">{resource.count}</p>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Learning Path</h2>
          <div className="space-y-4">
            {progress.map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <span className="ml-3 text-white">{item.title}</span>
                  </div>
                  <span className="text-gray-400">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="rounded-lg bg-white/5 border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Download Notes',
              'Practice Tests',
              'Video Tutorials',
              'Ask Doubts',
              'Review Concepts',
              'Track Progress'
            ].map((link, index) => (
              <div 
                key={index}
                className="p-4 rounded bg-white/5 text-gray-300 hover:text-white cursor-pointer hover:bg-white/10 transition-all"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;