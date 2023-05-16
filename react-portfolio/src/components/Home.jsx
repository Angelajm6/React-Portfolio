import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1f1f29]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#52eedf]'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>ANGELA JAUME</h1>
        <h2 className='text-4xl sm:text-7xl text-[#52eedf]'>Full Stack Developer.</h2>
          
        <p className='text-[#ccd6f6] py-4 max-w-[700px]'>
        I’m a full-stack web developer with a very creative mind. I enjoy creating functional and accessible nice looking websites. Currently, I’m focused on
            building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#52eedf] hover:border-[#52eedf]'>
            View my Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
