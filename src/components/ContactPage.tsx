import React from 'react';
import BackButton from './BackButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <BackButton />
        </div>
        
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 text-xl mb-16">Get in touch with our team</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-900 border-2 border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-900 border-2 border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-gray-900 border-2 border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 flex items-center justify-center group transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 text-gray-300" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-400">support@studyhub.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 text-gray-300" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-gray-300" />
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-400">
                    123 Education Street<br />
                    Learning City, ED 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;