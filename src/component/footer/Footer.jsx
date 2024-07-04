import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/media/logolight.png'

const Footer = () => {
  return (
    <footer className="bg-[#050165]  py-8">
    <section>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-white">
        <div className="flex flex-col">
          <img src={logo} alt="Logo" className="mb-4 w-40"/>
          <p>1234 Street Name,<br/>City, State, Zip Code</p>
          <p><a href="mailto:support@example.com" className="text-white">support@example.com</a></p>
        </div>
        <div>
        
          <ul>
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/success" className="hover:underline">Success Page</a></li>
            <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>
        <div>
        
          <ul>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/scheduling" className="hover:underline">Scheduling</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/patient-portal" className="hover:underline">Patient Portal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <ul className="flex space-x-4">
  <li>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      <FaFacebook />
    </a>
  </li>
  <li>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      <FaInstagram />
    </a>
  </li>
  <li>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      <FaLinkedin />
    </a>
  </li>
  <li>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      <FaYoutube />
    </a>
  </li>
  

</ul>
<div className=" mt-8 text-white ">
        <p>&copy; @docplus {new Date().getFullYear()} </p>
      </div>

 </div>



      </div>
     
    </section>
    </footer>
  );
};

export default Footer;
