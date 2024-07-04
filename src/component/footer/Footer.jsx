import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-400  py-8">
    <section>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-white">
        <div className="flex flex-col">
          <img src="/path/to/logo.png" alt="Logo" className="mb-4"/>
          <p>1234 Street Name,<br/>City, State, Zip Code</p>
          <p><a href="mailto:support@example.com" className="text-white">support@example.com</a></p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul>
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/success" className="hover:underline">Success Page</a></li>
            <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Services</h4>
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
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </section>
    </footer>
  );
};

export default Footer;
