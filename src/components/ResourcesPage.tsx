import React from 'react';
import { BookOpen } from 'lucide-react';

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <BookOpen className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight">Educational Resources</h1>
          <p className="mt-2 text-lg text-gray-600">Access our comprehensive collection of learning materials</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Resource Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Materials</h3>
              <p className="text-gray-600">Access comprehensive notes, textbooks, and reference materials.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice Tests</h3>
              <p className="text-gray-600">Prepare with our collection of practice questions and mock tests.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Lectures</h3>
              <p className="text-gray-600">Watch expert-led video tutorials on key topics.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Need help finding specific resources? Contact our support team.</p>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;