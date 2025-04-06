import React from 'react';
import BackButton from './BackButton';

interface SubjectPageProps {
  subject: string;
  onNavigate: (page: string, subject?: string, classNum?: string, topic?: string) => void;
}

const SubjectPage: React.FC<SubjectPageProps> = ({ subject, onNavigate }) => {
  const getSubjectTitle = () => {
    return subject.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <h1 className="text-4xl font-bold text-white mb-8 mt-4">{getSubjectTitle()}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Study Materials</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('class', subject, '12')}>
                Class 12
              </li>
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('class', subject, '11')}>
                Class 11
              </li>
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('class', subject, '10')}>
                Class 10
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Practice Resources</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('sample-papers')}>
                Sample Papers
              </li>
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('previous-year-papers')}>
                Previous Year Papers
              </li>
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('important-questions')}>
                Important Questions
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Additional Resources</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('topic', subject, '', 'formulas')}>
                Important Formulas
              </li>
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('topic', subject, '', 'notes')}>
                Chapter Notes
              </li>
              <li className="cursor-pointer hover:text-white transition-colors" 
                  onClick={() => onNavigate('topic', subject, '', 'tips')}>
                Study Tips
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;