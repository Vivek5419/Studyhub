import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const handleNavigation = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-black border-t-2 border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Study Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">NCERT Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">Previous Year Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">Important Questions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">Sample Papers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Subjects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">Mathematics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">Computer Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">All Subjects</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block">About Us</a></li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block"
                  onClick={(e) => handleNavigation('contact', e)}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block"
                  onClick={(e) => handleNavigation('privacy', e)}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block"
                  onClick={(e) => handleNavigation('terms', e)}
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t-2 border-white/20">
          <p className="text-center text-gray-300">&copy; {new Date().getFullYear()} StudyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;