import React from "react"

// import images content
import LoginContent from "../assets/loginContent.png"
import PortalStatus from "../assets/portalStatus.png"
import PrototypeLogin from "../assets/prototypeLogin.png"
import Soon from "../assets/soon.png"

const Experiance = () => {
  return (
    <div name='experience' className='w-full text-gray-400 md:h-screen'>
      <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-medium inline border-b-4 border-[#00D8FF] '>Experience</p>
          <p className='py-5'>Beberapa project yang saya bengun/kembangkan</p>
        </div>
        {/*  */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
          <div className='shadow-md shadow-[#00D8FF] rounded-lg'>
            <img src={Soon} alt='carkonten' className='rounded-md hover:scale-105 duration-200' />
            <div className='flex justify-center items-center'>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Preview</button>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Source Code</button>
            </div>
          </div>
          <div className='shadow-md shadow-[#00D8FF] rounded-lg'>
            <img src={LoginContent} alt='carkonten' className='rounded-md hover:scale-105 duration-200' />
            <div className='flex justify-center items-center'>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Preview</button>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Source Code</button>
            </div>
          </div>
          <div className='shadow-md shadow-[#00D8FF] rounded-lg'>
            <img src={PortalStatus} alt='carkonten' className='rounded-md hover:scale-105 duration-200' />
            <div className='flex justify-center items-center'>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Preview</button>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Source Code</button>
            </div>
          </div>
          <div className='shadow-md shadow-[#00D8FF] rounded-lg'>
            <img src={PrototypeLogin} alt='carkonten' className='rounded-md hover:scale-105 duration-200' />
            <div className='flex justify-center items-center'>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Preview</button>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Source Code</button>
            </div>
          </div>
          <div className='shadow-md shadow-[#00D8FF] rounded-lg'>
            <img src={Soon} alt='carkonten' className='rounded-md hover:scale-105 duration-200' />
            <div className='flex justify-center items-center'>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Preview</button>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Source Code</button>
            </div>
          </div>
          <div className='shadow-md shadow-[#00D8FF] rounded-lg'>
            <img src={Soon} alt='carkonten' className='rounded-md hover:scale-105 duration-200' />
            <div className='flex justify-center items-center'>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Preview</button>
              <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Source Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiance
