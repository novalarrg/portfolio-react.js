import React, { useState } from "react"
import { Link } from "react-scroll"

// icons from react
import { FaBars, FaGithub, FaInstagram, FaTimes } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
// import { BsFillPersonLinesFill } from "react-icons/bs"

import Logo from "../assets/logo.png"
import About from "./About"

const Navbar = () => {
  const [Nav, setNav] = useState(false)
  const handleClick = () => setNav(!Nav)

  // const
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000300] text-gray-300  z-10'>
      {/* Logo */}
      <div className='md:pl-20'>
        <img src={Logo} alt='Logo' style={{ width: "80px" }} />
      </div>

      {/* Menu */}
      <div className='hidden md:flex pr-20 text-gray-400'>
        <ul className='flex text-1xl'>
          <li className='li'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='li'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='li'>
            <Link to='experience' smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className='li'>
            <Link to='technology' smooth={true} duration={500}>
              Technology
            </Link>
          </li>
          <li className='li'>
            <Link to='contact' smooth={true} duration={500}>
              Co ntact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!Nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
      </div>

      {/* Mobile menu */}
      {Nav && (
        <div className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center list-none text-gray-400'>
          <li className='li py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='li py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='li py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className='li py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='technology' smooth={true} duration={500}>
              Technology
            </Link>
          </li>
          <li className='li py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </div>
      )}

      {/* Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-7px] duration-300 bg-gray-500 p-3'>
            <a className='flex justify-between items-center w-full text-[#00D8FF]' href='https://www.instagram.com/novalarrg/' target='__blank'>
              Instagram <FaInstagram className='text-3xl' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-7px] duration-300 bg-gray-500 p-3'>
            <a className='flex justify-between items-center w-full text-[#00D8FF]' href='https://github.com/novalarrg' target='__blank'>
              Github <FaGithub className='text-3xl' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gray-500 p-3'>
            <a className='flex justify-between items-center w-full text-[#00D8FF]' href='https://mail.google.com/novaljr197@gmail.com' target='__blank'>
              Email <HiOutlineMail className='text-3xl' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
