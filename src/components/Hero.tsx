import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative z-10 py-24 md:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="px-4 py-2 rounded-full bg-white/5 text-white text-sm font-medium flex items-center transform hover:scale-105 transition-all duration-300">
                <BookOpen className="w-4 h-4 mr-2" />
                Access to 50,000+ Study Materials
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-300 animate-fade-in">
              Your Gateway to Academic Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Comprehensive NCERT solutions, previous year papers, and expert-curated study materials for all subjects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 flex items-center justify-center group transform hover:-translate-y-1 transition-all duration-300">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300">
                View Resources
              </button>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1946&q=80')] 
        opacity-[0.03] bg-cover bg-center"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
    </div>
  );
};

export default Hero;