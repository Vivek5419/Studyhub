import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  text?: string;
  href?: string;
}

const BackButton = ({ text = "Back to Home", href = "/" }: BackButtonProps) => {
  return (
    <a 
      href={href}
      className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#333333] text-[#888888] hover:text-white hover:border-white transition-all duration-300 group text-sm"
    >
      <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
      {text}
    </a>
  );
};

export default BackButton;