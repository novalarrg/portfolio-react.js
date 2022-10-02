import React from "react"

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen text-gray-400'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-5'>
          <p className='text-4xl font-medium inline border-b-4 border-[#00D8FF]'>Contact</p>
          <p className='py-5'>Kirim pesan kritik/saran tentang web portfolio ini guys</p>
        </div>
        <div className=''>
          <form action='https://getform.io/f/81b688c4-dc6f-45aa-bdb5-4c69a677d2d8' method='POST' className='flex flex-col w-full'>
            <input type='text' name='nama' placeholder='Masukkan nama' className='p-2 bg-transparent border-2 rounded-md text-gray-400 border-[#00D8FF] focus:outline-none my-2' />
            <input type='text' name='email' placeholder='Masukkan email' className='p-2 bg-transparent border-2 rounded-md text-gray-400 border-[#00D8FF] focus:outline-none my-2' />
            <textarea name='message' rows='10' placeholder='Masukkan text' className='p-2 bg-transparent border-2 rounded-md text-gray-400 border-[#00D8FF] focus:outline-none my-2'></textarea>
            <button className='flex items-center h-5 px-6 py-6 bg-gradient-to-r from-[#0066FF] to-[#00D8FF] text-black rounded-md font-medium mx-auto'>Kirim</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
