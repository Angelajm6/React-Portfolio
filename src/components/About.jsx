import React from 'react';
import Emoji from '../assets/MY-EMOJI.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1f1f29] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-8 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-2 text-gray-300 border-[#52eedf]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-4xl font-bold'>
              <p>Hi. I'm </p> <p className='text-6xl text-[#52eedf]'>Angela Jaume.</p>
              <p>Nice to meet you!</p>
            </div>
            <div  className='sm:text-left float-left'>
              <p>I am creative, motivated and highly ambitious. 
                What fascinates me the most about programming is that it allows me to build anything my mind is able to imagine and make it become a reality. 
                I love connecting with people and I want to use technology to help make this world a better place for the future generations to come. Help me help you!</p>  
            </div>
            <div>
              <img className='w-60 w-full hover:scale-150 duration-500' src={Emoji} alt="My personalized emoji icon" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
