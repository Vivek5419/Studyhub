import React from 'react';
import { BookCheck, ScrollText, BrainCircuit, Code2, Layout, Atom } from 'lucide-react';
import SubjectCard from './SubjectCard';

interface AllSubjectsPageProps {
  onNavigate: (page: string, subject?: string) => void;
}

const AllSubjectsPage: React.FC<AllSubjectsPageProps> = ({ onNavigate }) => {
  const subjects = [
    {
      title: 'NCERT Solutions',
      icon: <BookCheck className="w-6 h-6" />,
      description: 'Complete chapter-wise solutions for all subjects',
      topics: ['Class 6-12', 'All Subjects', 'Step-by-step Solutions'],
      path: 'ncert-solutions'
    },
    {
      title: 'Previous Year Papers',
      icon: <ScrollText className="w-6 h-6" />,
      description: 'Practice with past exam papers and solutions',
      topics: ['Board Exams', 'Competitive Exams', 'Sample Papers'],
      path: 'previous-year-papers'
    },
    {
      title: 'Important Questions',
      icon: <BrainCircuit className="w-6 h-6" />,
      description: 'Curated questions for exam preparation',
      topics: ['Chapter-wise', 'Topic-wise', 'Quick Revision'],
      path: 'important-questions'
    },
    {
      title: 'Computer Science',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Learn programming and computer fundamentals',
      topics: ['Programming', 'Data Structures', 'Web Development'],
      path: 'computer-science'
    },
    {
      title: 'Mathematics',
      icon: <Layout className="w-6 h-6" />,
      description: 'Master mathematics with detailed explanations',
      topics: ['Calculus', 'Algebra', 'Trigonometry'],
      path: 'mathematics'
    },
    {
      title: 'Science',
      icon: <Atom className="w-6 h-6" />,
      description: 'Explore physics, chemistry, and biology concepts',
      topics: ['Physics', 'Chemistry', 'Biology'],
      path: 'science'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-white">All Subjects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard 
              key={index} 
              {...subject} 
              onClick={() => onNavigate('subject', subject.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSubjectsPage;