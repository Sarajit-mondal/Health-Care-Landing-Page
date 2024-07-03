import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Social Media
          {isOpen ? (
            <RiArrowDropDownLine className="text-xl" />
          ) : (
            <RiArrowDropUpLine className="text-xl" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          onClick={toggleDropdown}
          className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
        <div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white">Home</a></li>
         
          <li><a href="#services" className="text-white">Services</a></li>
          <li><a href="#about" className="text-white">Blog</a></li>
          <li><a href="#contact" className="text-white">About Us</a></li>
          <button className='flex items-center gap-1 font-semibold border px-3 py-2 bg-[#D9EFFA] rounded-xl'>Appoinment <GoArrowUpRight className='text-xl font-semibold'/></button>
        </ul>
      
    
        </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;