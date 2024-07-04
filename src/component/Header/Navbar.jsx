import React from 'react'
import logo from '../../assets/media/logodark.png'
import { GoArrowUpRight } from "react-icons/go";
import DropdownButton from './DropDownButton';
function Navbar() {
  return (
    <header className="bg-blue-500 p-4 mt-5">
    <div className="container mx-auto flex justify-between items-center">
      <img src={logo} alt="" className='w-[124px]'/>
      <nav className='hidden md:flex'>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white">Home</a></li>
         
          <li><a href="#services" className="text-white">Services</a></li>
          <li><a href="#about" className="text-white">Blog</a></li>
          <li><a href="#contact" className="text-white">About Us</a></li>
        </ul>
      </nav>
      <button className='md:flex items-center gap-1 font-semibold border px-3 py-2 bg-[#D9EFFA] rounded-xl hidden'>Appoinment <GoArrowUpRight className='text-xl font-semibold'/></button>

      {/* menubar */}
      <div className='md:hidden flex'>
      <DropdownButton />

      </div>
    </div>
  </header>
  )
}

export default Navbar
