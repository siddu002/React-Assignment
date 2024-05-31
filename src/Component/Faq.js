import React from "react";
import lady from './images/lady.png'
import oliva from './images/oliva.png'
import alce from './images/alce.png'
const Faq = () => {
  return (
    <>
    <div className="max-w-[1280px] mx-auto">
      <h1 className="lg:text-3xl font-bold text-center">Frequently asked questions</h1>
      <p className="text-base text-center mt-3">Everything you need to know about the product and billing.</p>
       <div className="lg:w-[768px] mx-auto px-4 py-8">
  <details className="border border-gray-200 rounded-lg">
    <summary className="flex justify-between items-center border-b border-gray-200 px-4 py-2 cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">Is there a free trial available?</h2>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </div>
  </details>
  <details className="border border-gray-200 rounded-lg">
    <summary className="flex justify-between items-center border-b border-gray-200 px-4 py-2 cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">Can I change my plan later</h2>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </div>
  </details>
  <details className="border border-gray-200 rounded-lg">
    <summary className="flex justify-between items-center border-b border-gray-200 px-4 py-2 cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">What is your cancelation policy?</h2>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </div>
  </details>
  <details className="border border-gray-200 rounded-lg">
    <summary className="flex justify-between items-center border-b border-gray-200 px-4 py-2 cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">Can other info be addedto an invoice?</h2>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </div>
  </details>
  <details className="border border-gray-200 rounded-lg">
    <summary className="flex justify-between items-center border-b border-gray-200 px-4 py-2 cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">How does billing work?</h2>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </div>
  </details>
  <details className="border border-gray-200 rounded-lg">
    <summary className="flex justify-between items-center border-b border-gray-200 px-4 py-2 cursor-pointer">
      <h2 className="text-lg font-medium text-gray-900">How do i change my account plan?</h2>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </summary>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </div>
  </details>
</div>
<div className="flex flex-col items-center p-6 bg-gray-50 border border-gray-200 rounded-md">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0"
          src={lady} 
          alt="Support"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white -ml-2"
          src={alce}
          alt="Support"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white -ml-2"
          src={oliva}
          alt="Support"
        />
      </div>
      <h2 className="text-xl font-semibold">Still have questions?</h2>
      <p className="text-center text-gray-600">
        Can't find the answer you're looking for? Please chat to our friendly team.
      </p>
      <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
        Get in touch
      </button>
    </div>

</div>
    </>
  );
};

export default Faq;
