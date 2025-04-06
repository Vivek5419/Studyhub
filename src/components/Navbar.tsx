import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed w-full z-50 px-4 py-3 rounded-[32px]">
      <div className="max-w-6xl mx-auto">
        <nav className={`rounded-[32px] transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-sm border-2 border-white/20 shadow-lg' : 'bg-transparent'
        }`}>
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center">
                <a 
                  href="#" 
                  className="text-2xl font-bold text-white hover:opacity-80 transition-opacity duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('home');
                  }}
                >
                  StudyHub
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5">
                  Courses
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5">
                  Resources
                </a>
                <a 
                  href="#" 
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('contact');
                  }}
                >
                  Contact
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5">
                  About
                </a>
                <button className="p-2 rounded-full hover:bg-white/5 transition-all duration-300 ml-2 transform hover:rotate-12">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full hover:bg-white/5 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-6 h-6 flex flex-col items-end justify-center">
                    {/* Animated menu icon with lines aligned to the right */}
                    <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3 right-0' : 'top-1.5 right-0'}`}></span>
                    <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'} top-3 right-0`}></span>
                    <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3 right-0' : 'top-4.5 right-0'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[300px] opacity-100 transform translate-y-0' 
              : 'max-h-0 opacity-0 transform -translate-y-4'
          }`}>
            <div className="px-4 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm mt-2 border-2 border-white/20 rounded-[32px]">
              <a href="#" className="block px-4 py-2 text-base text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:translate-x-1">
                Courses
              </a>
              <a href="#" className="block px-4 py-2 text-base text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:translate-x-1">
                Resources
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-base text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:translate-x-1"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('contact');
                }}
              >
                Contact
              </a>
              <a href="#" className="block px-4 py-2 text-base text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300 transform hover:translate-x-1">
                About
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;