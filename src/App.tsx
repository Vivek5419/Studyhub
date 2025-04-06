import React, { useState } from 'react';
import { Code2, BookOpen, GraduationCap, Layout, BrainCircuit, Atom, ScrollText, BookCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubjectCard from './components/SubjectCard';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import ResourcesPage from './components/ResourcesPage';
import SubjectPage from './components/SubjectPage';
import NCERTSolutionsPage from './components/NCERTSolutionsPage';
import PreviousYearPapersPage from './components/PreviousYearPapersPage';
import ImportantQuestionsPage from './components/ImportantQuestionsPage';
import SamplePapersPage from './components/SamplePapersPage';
import MathematicsPage from './components/MathematicsPage';
import SciencePage from './components/SciencePage';
import ComputerSciencePage from './components/ComputerSciencePage';
import AllSubjectsPage from './components/AllSubjectsPage';
import ClassPage from './components/ClassPage';
import TopicPage from './components/TopicPage';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSubject, setCurrentSubject] = useState('');
  const [currentClass, setCurrentClass] = useState('');
  const [currentTopic, setCurrentTopic] = useState('');

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

  // Navigation handler
  const navigateTo = (page: string, subject?: string, classNum?: string, topic?: string) => {
    setCurrentPage(page);
    if (subject) setCurrentSubject(subject);
    if (classNum) setCurrentClass(classNum);
    if (topic) setCurrentTopic(topic);
    window.scrollTo(0, 0);
  };

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onNavigate={navigateTo} />;
      case 'terms':
        return <TermsOfService onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'courses':
        return <CoursesPage onNavigate={navigateTo} />;
      case 'resources':
        return <ResourcesPage onNavigate={navigateTo} />;
      case 'subject':
        return <SubjectPage subject={currentSubject} onNavigate={navigateTo} />;
      case 'ncert-solutions':
        return <NCERTSolutionsPage onNavigate={navigateTo} />;
      case 'previous-year-papers':
        return <PreviousYearPapersPage onNavigate={navigateTo} />;
      case 'important-questions':
        return <ImportantQuestionsPage onNavigate={navigateTo} />;
      case 'sample-papers':
        return <SamplePapersPage onNavigate={navigateTo} />;
      case 'mathematics':
        return <MathematicsPage onNavigate={navigateTo} />;
      case 'science':
        return <SciencePage onNavigate={navigateTo} />;
      case 'computer-science':
        return <ComputerSciencePage onNavigate={navigateTo} />;
      case 'all-subjects':
        return <AllSubjectsPage onNavigate={navigateTo} />;
      case 'class':
        return <ClassPage classNum={currentClass} onNavigate={navigateTo} />;
      case 'topic':
        return <TopicPage subject={currentSubject} topic={currentTopic} onNavigate={navigateTo} />;
      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;
      case 'faq':
        return <FAQPage onNavigate={navigateTo} />;
      default:
        return (
          <>
            <Navbar onNavigate={navigateTo} />
            <Hero />
            
            <main className="max-w-7xl mx-auto px-4 py-16">
              <section className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-white">Study Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <SubjectCard 
                      key={index} 
                      {...subject} 
                      onClick={() => navigateTo('subject', subject.path)}
                    />
                  ))}
                </div>
              </section>

              <section className="mb-20">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">Why Choose StudyHub?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="p-6 rounded-2xl border-2 border-white/20 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2">
                      <BookOpen className="w-8 h-8 mb-4 mx-auto text-white transform transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-semibold mb-2 text-white">Comprehensive Content</h3>
                      <p className="text-gray-400">Access NCERT solutions, previous year papers, and important questions</p>
                    </div>
                    <div className="p-6 rounded-2xl border-2 border-white/20 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2">
                      <GraduationCap className="w-8 h-8 mb-4 mx-auto text-white transform transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-semibold mb-2 text-white">Expert Teachers</h3>
                      <p className="text-gray-400">Learn from experienced educators with proven track records</p>
                    </div>
                    <div className="p-6 rounded-2xl border-2 border-white/20 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2">
                      <BrainCircuit className="w-8 h-8 mb-4 mx-auto text-white transform transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-semibold mb-2 text-white">Smart Learning</h3>
                      <p className="text-gray-400">Personalized study paths and adaptive learning</p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            
            <Footer onNavigate={navigateTo} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {renderPage()}
    </div>
  );
}

export default App;