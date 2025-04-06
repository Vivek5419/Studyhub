import React from 'react';
import BackButton from './BackButton';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <BackButton />
        </div>
        
        <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-400 text-xl mb-16">Last updated: June 27, 2025</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              By accessing or using StudyHub, you agree to be bound by these Terms of Service. If you do not agree to 
              these terms, please do not use our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-4xl font-bold mb-6">2. User Accounts</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              When you create an account with us, you must provide accurate and complete information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-lg space-y-2">
              <li>Maintaining the confidentiality of your account password</li>
              <li>Restricting access to your account</li>
              <li>All activities that occur under your account</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-4xl font-bold mb-6">3. Educational Content</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our platform provides educational resources and materials for students. These materials are for personal, 
              non-commercial use only. You may not reproduce, distribute, modify, or create derivative works without our 
              explicit permission.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;