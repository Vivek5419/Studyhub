import React from 'react';
import BackButton from './BackButton';
import { BookOpen, Download } from 'lucide-react';

interface PreviousYearPapersPageProps {
  onNavigate: (page: string, subject?: string, classNum?: string, topic?: string) => void;
}

const PreviousYearPapersPage: React.FC<PreviousYearPapersPageProps> = ({ onNavigate }) => {
  const papers = [
    { year: '2023', subject: 'Mathematics', class: 'Class X', downloadUrl: '#' },
    { year: '2023', subject: 'Science', class: 'Class X', downloadUrl: '#' },
    { year: '2023', subject: 'Mathematics', class: 'Class XII', downloadUrl: '#' },
    { year: '2023', subject: 'Physics', class: 'Class XII', downloadUrl: '#' },
    { year: '2022', subject: 'Mathematics', class: 'Class X', downloadUrl: '#' },
    { year: '2022', subject: 'Science', class: 'Class X', downloadUrl: '#' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 mt-8">Previous Year Papers</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access a comprehensive collection of previous year question papers to enhance your exam preparation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="text-blue-400 w-6 h-6" />
                <span className="text-blue-400 font-semibold">{paper.year}</span>
              </div>
              
              <h3 className="text-white text-xl font-semibold mb-2">{paper.subject}</h3>
              <p className="text-gray-400 mb-4">{paper.class}</p>
              
              <button 
                onClick={() => window.open(paper.downloadUrl, '_blank')}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                Download Paper
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousYearPapersPage;