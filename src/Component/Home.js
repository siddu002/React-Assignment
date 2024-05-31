import React from "react";
import "tailwindcss/tailwind.css";
import StatsImage from "./images/stats-image.png"
import oneimg from "./images/1.png";
import twoimg from "./images/2.png";
import threeimg from "./images/3.png";
import fourimg from "./images/5.png";
import fiveimg from "./images/7.png";
import siximg from "./images/10.png";
const Home = () => {
  return (
    <div className="container mx-auto p-6 text-center overflow-hidden">
      <header className="mb-12">
      <div className="mb-4 text-purple-700  inline-flex items-center border border-purple-700 rounded-full">
  <span className="inline-block bg-purple-100 px-3 py-1 rounded-full text-[8px] md:text-sm">New feature</span>
  <a href="#" className="ml-2 text-purple-700 no-underline mr-2 text-center text-xs md:text-sm">Check out the team dashboard →  </a>
</div>


        <h1 className="text-4xl font-bold mb-4">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div>
          <button className="bg-white border border-purple-500 text-purple-500 px-4 py-2 rounded-full mr-4">
            Demo
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
            Sign up
          </button>
        </div>
      </header>

  
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden mx-auto border-4  border-black lg:w-[1280px]">
        <img
          src={StatsImage}
          alt="Stats for Olivia Rhye"
          className="w-full z-0"
        />

        
       
      </div>

        <div className="absolute lg:bottom-[-478px] left-0 w-full bg-white h-[250px]">
  <div className="mx-auto lg:w-[1280px]">
    <p className="mt-5 mb-3">Join 4,000+ companies already growing</p>
  <div className="flex flex-wrap justify-center lg:justify-between items-center mx-auto">
    <img src={oneimg} alt="Logo 1" className="w-[127px] h-[36px] lg:w-[170px] lg:h-[48px] m-2" />
    <img src={twoimg} alt="Logo 2" className="w-[127px] h-[36px] lg:w-[170px] lg:h-[48px] m-2" />
    <img src={threeimg} alt="Logo 3" className="w-[127px] h-[36px] lg:w-[170px] lg:h-[48px] m-2" />
    <img src={fourimg} alt="Logo 4" className="w-[127px] h-[36px] lg:w-[170px] lg:h-[48px] m-2" />
    <img src={fiveimg} alt="Logo 5" className="w-[127px] h-[36px] lg:w-[170px] lg:h-[48px] m-2" />
    <img src={siximg} alt="Logo 6" className="w-[127px] h-[36px] lg:w-[170px] lg:h-[48px] m-2" />
</div>

  </div>
</div>

    </div>
    
  );
};

export default Home;
