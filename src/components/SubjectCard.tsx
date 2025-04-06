import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  topics: string[];
}

const SubjectCard = ({ title, icon, description, topics }: SubjectCardProps) => {
  return (
    <div className="p-6 rounded-2xl border-2 border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer group transform hover:-translate-y-2">
      <div className="mb-4 text-white transform transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {topics.map((topic, index) => (
          <li key={index} className="text-gray-400 transform transition-all duration-300 hover:translate-x-1">• {topic}</li>
        ))}
      </ul>
      
      {/* Single thicker horizontal line that extends to the edges, positioned closer to Learn more */}
      <div className="border-t-2 border-white/20 -mx-6 mb-4"></div>
      
      <div 
        onClick={(e) => {
          e.stopPropagation();
          console.log(`Learn more about ${title}`);
          // Add navigation or modal logic here
        }}
        className="py-3 px-6 -mx-6 hover:bg-white/5 cursor-pointer transition-all duration-300"
      >
        <button className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
          Learn more
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;