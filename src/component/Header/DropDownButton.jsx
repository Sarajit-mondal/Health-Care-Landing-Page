import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
         <IoMenu />
        </button>
      </div>
      {isOpen && (
        <div
          onClick={toggleDropdown}
          className="origin-top-right absolute right-0 mt-2 w-auto rounded-md z-50 shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
        <div>
        <ul className="flex flex-col space-y-5 space-x-4 z-50 p-5 items-left">
      
         
          <li><a href="#home" className="text-blue-400">Home</a></li>
          <li><a href="#services" className="text-blue-400">Services</a></li>
          <li><a href="#about" className="text-blue-400">Blog</a></li>
          <li><a href="#contact" className="text-blue-400">About Us</a></li>
          <button className='flex mx-auto items-center gap-1 font-semibold border px-3 py-2 bg-[#D9EFFA] rounded-xl'>Appoinment <GoArrowUpRight className='text-xl font-semibold'/></button>
        </ul>
      
    
        </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;