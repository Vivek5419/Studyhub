import React from 'react';
import BackButton from './BackButton';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <BackButton />
        </div>
        
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-xl mb-16">Last updated: June 27, 2025</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold mb-6">1. Introduction</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to StudyHub ("we," "our," or "us"). We are committed to protecting your privacy and 
              ensuring you have a positive experience on our website. This privacy policy outlines how we collect, 
              use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-4xl font-bold mb-6">2. Information We Collect</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-lg space-y-2">
              <li>Create an account or profile</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our support team</li>
              <li>Participate in surveys or contests</li>
              <li>Use our educational resources</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-4xl font-bold mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 text-lg space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Personalize your experience on our platform</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;