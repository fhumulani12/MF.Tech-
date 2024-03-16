import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='sticky top-0 z-50 '>
      <div className='bg-white p-4 w-full'>
        <div className='flex justify-between mt-5'>
          <h1 className=' md:ml-10 font-bold text-3xl cursor-pointer' onClick={scrollToTop}>MF<span className='text-[#4267B2]'>.Tech</span></h1>
          <div className='flex items-center'>
            <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <ul className={`md:flex ${showMenu ? 'block' : 'hidden'} md:ml-10 md:mr-10 md:mt-0 md:bg-transparent md:flex-1 md:justify-end md:items-center hidden cursor-pointer`}>
              <li className='pl-6 font-medium'>
                <Link to="Home" smooth={true} duration={1000} offset={-170} className="hover:text-[#4267B2]">
                  Home
                </Link>
              </li>
              <li className='pl-6 font-medium'>
                <Link to="Aboutpage" smooth={true} duration={1000} offset={-100} className="hover:text-[#4267B2]">
                  About
                </Link>
              </li>
              <li className='pl-6 font-medium'>
                <Link to="Project" smooth={true} duration={1000} offset={-100} className="hover:text-[#4267B2]">
                  Project
                </Link>
              </li>
              <li className='pl-6 font-medium'>
                <Link to="Contact" smooth={true} duration={1000} offset={-50} className='hover:text-[#4267B2] rounded-md '>
                  Contact 👋
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Side menu */}
      <div className={`md:hidden fixed top-0 left-0 w-[50%] h-full bg-[#4267b2] border-r border-r-gray-500 ${showMenu ? 'block' : 'hidden'}`}>
        <div className='flex justify-end p-4'>
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
          <h1 className='ml-5 font-black text-3xl cursor-pointer text-white' onClick={scrollToTop}>MF.</h1>
        </div>
        <ul className='flex flex-col cursor-pointer mt-20 text-white uppercase p-4'>
          <li className='font-bold p-4 border-b border-zinc-200'>
            <Link onClick={toggleMenu} to="Home" smooth={true} duration={1000} offset={-170} className="hover:text-[#4267B2]">
              Home
            </Link>
          </li>
          <li className='font-bold p-4 border-b border-zinc-200'>
            <Link onClick={toggleMenu} to="Aboutpage" smooth={true} duration={1000} offset={-100} className="hover:text-[#4267B2]">
              About
            </Link>
          </li>
          <li className='font-bold p-4 border-b border-zinc-200'>
            <Link onClick={toggleMenu} to="Project" smooth={true} duration={1000} offset={-100} className="hover:text-[#4267B2]">
              Project
            </Link>
          </li>
          <li className='font-bold p-4 border-b border-zinc-200'>
            <Link onClick={toggleMenu} to="Contact" smooth={true} duration={1000} offset={-50} className='hover:text-[#4267B2]'>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;