//'rafce' to generate our functional component
import React from 'react';

const AboutMe = () => {
  return (
    <div name='about-me' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#52eedf]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Angela Jaume, nice to meet you!</p>
            </div>
            <div>
              <p>I am creative, motivated and highly ambitious. 
                What fascinates me the most about programming is that it allows me to build anything my mind is able to imagine and make it become a reality. 
                I love connecting with people and I want to use technology to help make this world a better place for the future generations to come.Help me help you!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutMe;