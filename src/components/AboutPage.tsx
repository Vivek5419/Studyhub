import React from 'react';
import { GraduationCap, Users, Target, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-indigo-600">EduHub</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Empowering students with comprehensive educational resources and personalized learning experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-indigo-600">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              To make quality education accessible to every student through innovative learning solutions and comprehensive study materials.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto">
                  <GraduationCap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Quality Education</h3>
                <p className="mt-2 text-base text-gray-500">
                  Providing high-quality educational resources aligned with curriculum standards.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Student Community</h3>
                <p className="mt-2 text-base text-gray-500">
                  Building a supportive community of learners and educators.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto">
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Targeted Learning</h3>
                <p className="mt-2 text-base text-gray-500">
                  Offering subject-specific resources for focused academic growth.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mx-auto">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Excellence</h3>
                <p className="mt-2 text-base text-gray-500">
                  Striving for academic excellence through comprehensive study materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Dedicated educators and professionals committed to student success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Academic Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
              },
              {
                name: 'Prof. Michael Chen',
                role: 'Lead Mathematics Educator',
                image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
              },
              {
                name: 'Dr. Emily Williams',
                role: 'Science Department Head',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
              },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={person.image}
                    alt={person.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900">{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;