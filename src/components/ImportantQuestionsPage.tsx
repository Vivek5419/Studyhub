import React from 'react';
import BackButton from './BackButton';

interface ImportantQuestionsPageProps {
  onNavigate: (page: string, subject?: string, classNum?: string, topic?: string) => void;
}

const ImportantQuestionsPage: React.FC<ImportantQuestionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <h1 className="text-4xl font-bold text-white mb-8 mt-4">Important Questions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample content structure */}
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Class 12</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Mathematics</li>
              <li className="hover:text-white cursor-pointer">Physics</li>
              <li className="hover:text-white cursor-pointer">Chemistry</li>
              <li className="hover:text-white cursor-pointer">Biology</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Class 11</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Mathematics</li>
              <li className="hover:text-white cursor-pointer">Physics</li>
              <li className="hover:text-white cursor-pointer">Chemistry</li>
              <li className="hover:text-white cursor-pointer">Biology</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Class 10</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Mathematics</li>
              <li className="hover:text-white cursor-pointer">Science</li>
              <li className="hover:text-white cursor-pointer">Social Science</li>
              <li className="hover:text-white cursor-pointer">English</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantQuestionsPage;