import React, { useState } from 'react';
import oliva from './images/oliva.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="container text-gray-600 body-font border-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between lg:w-[1280px] md:w-[1280px]">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Untitled UI</span>
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none md:hidden ml-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className="md:mr-auto md:flex hidden flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Products</a>
          <a className="mr-5 hover:text-gray-900">Resources</a>
          <a className="mr-5 hover:text-gray-900">Pricing</a>
        </nav>
        <div className="hidden md:flex items-center">
          <img
            src={oliva}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        {isMenuOpen && (
          <div className="md:hidden w-full mt-2">
            <nav className="flex flex-col items-center">
              <a className="mb-2 hover:text-gray-900">First Link</a>
              <a className="mb-2 hover:text-gray-900">Second Link</a>
              <a className="mb-2 hover:text-gray-900">Third Link</a>
              <a className="mb-2 hover:text-gray-900">Fourth Link</a>
              <img
                src="path/to/avatar.jpg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full mt-2"
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
