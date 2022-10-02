import React from "react"
import HeroImage from "../assets/nopel.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import BackgroundVideo from "../assets/0929.mp4"

const Home = () => {
  return (
    <>
      <div name='home' className='main'>
        <video src={BackgroundVideo} autoPlay loop muted></video>
      </div>
      <div className='overlay'></div>
      <div className='content h-screen w-full justify-center'>
        <div className='max-w-screen-lg mx-auto flex flex-col text-white justify-center items-center h-full px-5 md:flex-row absolute'>
          <div className='flex flex-col justify-center h-full '>
            <h2 className='text-4xl sm:text-7xl font-medium'>
              I'm a <span className='text-[#00D8FF]'> Front End </span>Developer
            </h2>
            <p className='text-gray-500 py-4 md:pr-5 mx-w-md'>saya seorang mahasiswa yang memiliki minat bakat membangun dan mendesain website, saya suka bekerja pada aplikasi web menggunakan teknologi React js</p>
            <div>
              <button className='flex justify-between items-center h-10 px-6 py-6 hover:bg-gradient-to-b hover:from-black hover:to-black hover:text-[#00D8FF] border-2 hover:border-[#00D8FF] border-black bg-gradient-to-r from-[#0066FF] to-[#00D8FF] text-black rounded-md font-medium'>
                Portfolio <HiOutlineArrowNarrowRight className='ml-2 text-2xl' />
              </button>
            </div>
          </div>
          <div className='card img'>
            <img style={{ width: "400px" }} src={HeroImage} alt='nopel' className='hidden md:flex rounded-2xl mx-auto md:flex-row shadow-lg shadow-black bg-black' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
