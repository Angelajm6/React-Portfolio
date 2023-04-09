// "rafce" to generate a functional component
import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/My-logo.png';


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> 
      <div>
        <img src={Logo} alt="my logo image" style={{width: '50px'}}></img>
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
      </div>
      </div>
      
  )
}

export default Navbar;