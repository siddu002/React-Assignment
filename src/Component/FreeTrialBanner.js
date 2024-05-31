import React from 'react';

const FreeTrialBanner = () => {
  return (
    <div className="flex items-center justify-center bg-white py-10">
      <div className="p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Start your free trial</h1>
        <p className="text-gray-500 mb-6">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-purple-500 border border-purple-500 py-2 px-4 rounded-lg hover:bg-purple-100">
            Learn more
          </button>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialBanner;
