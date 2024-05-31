import React from 'react';
import StatsImage from './images/stats-image.png'
import mobileImage from './images/mobile.jpeg'

const Statisticdata = () => {
  return (
 <>
    <div className='relative lg:w-[1280px] mx-auto'>
      <p className='text-center rounded-sm border-auto border-slate-700'>Features</p>
      <h1 className='lg:text-4xl font-bold text-center text-2xl p=2'>Cutting-edge features for advanced analytics</h1>
      <p className='text-center mt-3 mb-4 text-base p-2'>Powerful, self-serve product and growth analytics to help you convert, engage, <br/> and retain more users. Trusted by over 4,000 startups.</p>
  <div className="hidden lg:flex w-full h-full justify-center  items-center bg-white py-10">
    <img 
      src={StatsImage} 
      alt="Chat" 
      className="w-2/3 shadow-lg border-4 border-black"
      style={{ zIndex: 0 }}
    />
  </div>

  <div className='absolute bottom-0 left-[100px] hidden lg:block'>
    <img 
      src={mobileImage} 
      alt="Mobile" 
      className="shadow-lg w-[245px] h-[500px]"
      style={{ zIndex: 1 }}
    />
  </div>
  <img 
    src={mobileImage} 
    alt="Mobile" 
    className="lg:hidden sm:block shadow-lg w-[245px] h-[500px] mx-auto"
    style={{ zIndex: 1 }}
  />
  
</div>


<section class="text-gray-600 body-font max-w-[1280px] mx-auto">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 justify-center">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg flex flex-col items-center">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base text-center">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg flex flex-col items-center">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base text-center">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg flex flex-col items-center">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
          <p class="leading-relaxed text-base text-center">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
</>
  )
}

export default Statisticdata