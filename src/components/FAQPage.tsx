import React, { useState } from 'react';
import BackButton from './BackButton';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      question: "How do I access study materials?",
      answer: "You can access study materials by navigating to the specific subject or topic page. All materials are organized by class, subject, and topic for easy access. Simply click on the desired resource to start learning.",
      category: "general"
    },
    {
      question: "Are the NCERT solutions up to date?",
      answer: "Yes, all our NCERT solutions are regularly updated to match the latest curriculum and textbook editions. Our team of educators ensures that the content remains current and accurate.",
      category: "content"
    },
    {
      question: "Can I download materials for offline study?",
      answer: "Yes, most study materials are available for download in PDF format. Look for the download icon next to the resource you want to save for offline access.",
      category: "features"
    },
    {
      question: "How often is new content added?",
      answer: "We add new content weekly, including practice questions, video lectures, and study notes. Our content team works continuously to expand our resource library.",
      category: "content"
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our mobile app is available for both iOS and Android devices. You can download it from the respective app stores to access study materials on the go.",
      category: "features"
    },
    {
      question: "How can I track my progress?",
      answer: "Each topic has a progress tracking feature that shows your completion status, quiz scores, and time spent studying. You can view detailed analytics in your dashboard.",
      category: "features"
    },
    {
      question: "Are the practice tests timed?",
      answer: "Yes, practice tests can be taken in both timed and untimed modes. Timed tests help simulate exam conditions, while untimed tests are great for thorough practice.",
      category: "content"
    },
    {
      question: "How can I get help if I'm stuck?",
      answer: "You can use our doubt-solving feature to get help from our expert educators. Simply post your question, and you'll receive a detailed explanation within 24 hours.",
      category: "support"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'content', name: 'Content' },
    { id: 'features', name: 'Features' },
    { id: 'support', name: 'Support' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <BackButton onClick={() => onNavigate('home')} />
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 mt-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg">Find answers to common questions about our platform and services</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'py-4 max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 p-6 rounded-lg bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-2">Still have questions?</h2>
          <p className="text-gray-400 mb-4">
            If you cannot find answer to your question in our FAQ, you can always contact us.
            We will answer to you shortly!
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;