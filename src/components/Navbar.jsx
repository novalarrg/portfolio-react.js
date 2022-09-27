import React, { useState } from "react"

// icons from react
import { FaGithub, FaHamburger, FaInstagram, FaTimes, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

import Logo from "../assets/logo.png"

const Navbar = () => {
  const [Nav, setNav] = useState(false)
  const handleClick = () => setNav(!Nav)

  // const
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* Logo */}
      <div className='md:pl-20'>
        <img src={Logo} alt='Logo' style={{ width: "80px" }} />
      </div>

      {/* Menu */}
      <div className='hidden md:flex pr-20 '>
        <ul className='flex text-1xl'>
          <li className='li'>
            <a href='#'>Home</a>
          </li>
          <li className='li'>
            <a href='#'>About</a>
          </li>
          <li className='li'>
            <a href='#'>Portfolio</a>
          </li>
          <li className='li'>
            <a href='#'> Experiance</a>
          </li>
          <li className='li'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!Nav ? <FaHamburger className='text-2xl' /> : <FaTimes className='text-2xl' />}
      </div>

      {/* Mobile menu */}
      <div className={!Nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center list-none"}>
        <li className='li py-6 text-4xl cursor-pointer'>Home</li>
        <li className='li py-6 text-4xl cursor-pointer'>About</li>
        <li className='li py-6 text-4xl cursor-pointer'>Portfolio</li>
        <li className='li py-6 text-4xl cursor-pointer'>Experiance</li>
        <li className='li py-6 text-4xl cursor-pointer'>Contact</li>
      </div>

      {/* Icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#F93130] p-3'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.instagram.com/novalarrg/' target='__blank'>
              Instagram <FaInstagram className='text-3xl' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#131212] p-3'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.instagram.com/novalarrg/' target='__blank'>
              Github <FaGithub className='text-3xl' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#4FCE5D] p-3'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.instagram.com/novalarrg/' target='__blank'>
              Whatsapp <FaWhatsapp className='text-3xl' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
