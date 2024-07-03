import React from 'react'
import logo from '../../assets/media/logodark.png'
function Navbar() {
  return (
    <header className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <img src={logo} alt="" className='w-[124px]'/>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#about" className="text-white">About</a></li>
          <li><a href="#services" className="text-white">Services</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Navbar
