import React from 'react';

export const metadata = {
  title: 'Features',
  description: 'Discover the powerful features that make EMBRION the trusted choice for healthcare technology solutions.',
};

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          EMBRION Features
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the powerful features that make EMBRION the trusted choice for healthcare technology solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">High Reliability</h3>
          <p className="text-gray-600">
            Built with healthcare-grade reliability and security standards.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
          <p className="text-gray-600">
            Advanced AI capabilities for intelligent healthcare solutions.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">User-Friendly</h3>
          <p className="text-gray-600">
            Intuitive interfaces designed for healthcare professionals.
          </p>
        </div>
      </div>
    </div>
  );
}
