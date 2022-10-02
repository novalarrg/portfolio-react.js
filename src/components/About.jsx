import React from "react"

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-400'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-medium inline border-b-4 border-[#00D8FF]'>About Me</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-5'>
          <div className='sm:text-right text-4xl font-bold '>
            <p className='text-justify indent-8 pb-5'>I'm noval abdurojak front end developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div>
            <p className='text-justify '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quis consequuntur repellat accusamus, corrupti quo aspernatur pariatur nostrum necessitatibus aliquam, ea, voluptate velit tempore perferendis quidem totam
              iure! Ullam, doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quis consequuntur repellat accusamus, corrupti quo aspernatur pariatur nostrum necessitatibus aliquam, ea, voluptate velit tempore
              perferendis quidem totam iure! Ullam, doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
