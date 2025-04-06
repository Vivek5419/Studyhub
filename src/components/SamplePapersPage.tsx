import React from 'react';
import BackButton from './BackButton';
import { FileText, Download } from 'lucide-react';

interface SamplePapersPageProps {
  onNavigate: (page: string, subject?: string, classNum?: string, topic?: string) => void;
}

const SamplePapersPage: React.FC<SamplePapersPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton onClick={() => onNavigate('home')} />
        
        <h1 className="text-4xl font-bold text-white mb-8 mt-4">Sample Papers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Board Exams Section */}
          <div className="col-span-full mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Board Exams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['CBSE', 'ICSE', 'State Board'].map((board) => (
                <div key={board} className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="w-6 h-6 text-white" />
                    <span className="text-sm text-gray-400">10+ Papers</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{board}</h3>
                  <p className="text-gray-400 text-sm mb-4">Latest sample papers with solutions</p>
                  <button className="w-full py-2 px-4 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Papers
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Subject-wise Papers */}
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Mathematics</h2>
            <ul className="space-y-3">
              {['Class 12', 'Class 11', 'Class 10'].map((className) => (
                <li key={className} className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer group">
                  <span>{className}</span>
                  <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Science</h2>
            <ul className="space-y-3">
              {['Physics', 'Chemistry', 'Biology'].map((subject) => (
                <li key={subject} className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer group">
                  <span>{subject}</span>
                  <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-xl font-semibold text-white mb-4">Languages</h2>
            <ul className="space-y-3">
              {['English', 'Hindi', 'Sanskrit'].map((language) => (
                <li key={language} className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer group">
                  <span>{language}</span>
                  <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePapersPage;