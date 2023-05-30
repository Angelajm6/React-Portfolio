import React from 'react';
import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className ='bg-[#1f1f29] py-8'>
            <div className ='text-[#52eedf] flex justify-center gap-6 my-4 fa-2x'>
                <a href='https://www.linkedin.com/in/angela-jaume/'>
                    <FaLinkedin size={30} />
                </a>
                <a href='https://github.com/Angelajm6'>
                    <FaGithub size={30} />
                </a>
                <a href='mailto:angelajaume.m@gmail.com'>
                    <HiOutlineMail size={30} />
                </a>
                <a href=''>
                    <BsFillPersonLinesFill size={30} />
                </a>
            </div>
        </div>
    )
}

export default Footer;