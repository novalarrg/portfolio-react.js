import React from "react"

import { HiOutlineChevronDoubleRight, HiOutlineChevronDoubleLeft } from "react-icons/hi"

// import images icon skill
import HTML from "../assets/html.png"
import Css from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import REACT from "../assets/react.png"
import GITHUB from "../assets/github.png"
import TAILWIND from "../assets/tailwind.png"

const Technology = () => {
  return (
    <div name='technology' className='w-full h-screen text-gray-400 '>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-medium inline border-b-4 border-[#00D8FF]'>Technology</p>
          <p className='py-5'>Teknologi yang sering saya gunakan saat ini.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#E44F26] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4' src={HTML} alt='ICON HTML' />
            <p className='my-4 font-bold flex justify-center items-center'>
              <HiOutlineChevronDoubleRight /> HTML <HiOutlineChevronDoubleLeft />
            </p>
          </div>
          <div className='shadow-md shadow-[#1572B6] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4' src={Css} alt='ICON HTML' />
            <p className='my-4 font-bold flex justify-center items-center'>
              <HiOutlineChevronDoubleRight /> CSS <HiOutlineChevronDoubleLeft />
            </p>
          </div>
          <div className='shadow-md shadow-[#F7DF1E] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4' src={JavaScript} alt='ICON HTML' />
            <p className='my-4 font-bold flex justify-center items-center'>
              <HiOutlineChevronDoubleRight /> JavaScript <HiOutlineChevronDoubleLeft />
            </p>
          </div>
          <div className='shadow-md shadow-[#00D8FF] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4' src={REACT} alt='ICON HTML' />
            <p className='my-4 font-bold flex justify-center items-center'>
              <HiOutlineChevronDoubleRight /> React.js <HiOutlineChevronDoubleLeft />
            </p>
          </div>
          <div className='shadow-md shadow-[#FFFFFF] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4' src={GITHUB} alt='ICON HTML' />
            <p className='my-4 font-bold flex justify-center items-center'>
              <HiOutlineChevronDoubleRight /> GitHub <HiOutlineChevronDoubleLeft />
            </p>
          </div>
          <div className='shadow-md shadow-[#2298BD] hover:scale-105 duration-300'>
            <img className='w-20 mx-auto my-4' src={TAILWIND} alt='ICON HTML' />
            <p className='my-4 font-bold flex justify-center items-center'>
              <HiOutlineChevronDoubleRight /> Tailwind Css <HiOutlineChevronDoubleLeft />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
