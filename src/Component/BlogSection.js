import React from 'react'
import alce from './images/alce.png'
import water from './images/water.png'
import steel from './images/steel.png'
import person from './images/person.png'

const BlogSection = () => {
  return (
    <div>
        <section class="text-gray-600 body-font max-w-[1280px] mx-auto">
          
  <div class="container px-5 py-24 mx-auto">
    <p className="mb-3"> Our blog</p>
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Latest blog posts</h1>
        <div class="hidden md:block">
        <button class="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">View All posts</button>
        </div>
    </div>
    <p className='mb-5'>Tool and strategies modern teams need to help their companies grow.</p>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-64 md:h-48 w-full object-cover object-center" src={water} alt="blog"/>
    <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        <div class="flex flex-col"> 
    <div class="flex items-center mb-2">
        <img src={alce} class="w-10 h-10 rounded-full mr-2" alt="user-avatar"/> 
        <span class="text-gray-500 text-xs -mt-3">John Doe</span>
    </div>
    <span class="text-gray-500 text-xs ml-[45px] -mt-5">June 1, 2024</span> 
</div>

    </div>
</div>
      </div>
     <div class="p-4 md:w-1/3">
     <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-64 md:h-48 w-full object-cover object-center" src={person} alt="blog"/>
    <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        <div class="flex flex-col"> 
    <div class="flex items-center mb-2">
        <img src={alce} class="w-10 h-10 rounded-full mr-2" alt="user-avatar"/> 
        <span class="text-gray-500 text-xs -mt-3">John Doe</span>
    </div>
    <span class="text-gray-500 text-xs ml-[45px] -mt-5">June 1, 2024</span> 
</div>

    </div>
</div>





        </div>
      <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-64 md:h-48 w-full object-cover object-center" src={steel} alt="blog"/>
    <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        <div class="flex flex-col"> 
    <div class="flex items-center mb-2">
        <img src={alce} class="w-10 h-10 rounded-full mr-2" alt="user-avatar"/> 
        <span class="text-gray-500 text-xs -mt-3">John Doe</span>
    </div>
    <span class="text-gray-500 text-xs ml-[45px] -mt-5">June 1, 2024</span> 
</div>

    </div>
</div>
      </div>
      <div class="mt-6 md:hidden w-full p-2">
        <button class="w-full px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">View All posts</button>
    </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default BlogSection