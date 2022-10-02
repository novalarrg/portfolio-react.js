import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Technology from './components/Technology';
import Experiance from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className='bg-gradient-to-b from-black to-gray-900'>
        <About />
        <Experiance />
        <Technology />
        <Contact />
      </div>
    </>
  );
}

export default App;
