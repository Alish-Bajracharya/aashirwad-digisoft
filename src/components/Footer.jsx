import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#071C1F] text-white font-serif">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl mb-4">About Us</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Duis vitae nulla at nisl finibus pharetra<br />
            Nunc porttitor sapien quis euismod.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl mb-4">Contact</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Pokhara-Lakeside<br />
            Nepal<br />
            info@Hotel-aashirwad.com<br />
            +977-9824071911
          </p>
        </div>

        {/* Links (2-column split inside this section) */}
        <div>
          <h3 className="text-xl mb-4">Links</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <ul className="space-y-2">
              <li><a href="#">About Hotel</a></li>
              <li><a href="#">Our Rooms</a></li>
              <li><a href="#">Restaurant & Bar</a></li>
              <li><a href="#">Spa & Wellness</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Get Directions</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Sign Up */}
        <div>
          <h3 className="text-xl mb-4">Newsletter Sign Up</h3>
          <p className="text-sm text-gray-300 mb-4">Sign up for our news, deals and special offers.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border border-gray-400 text-white px-4 py-2 text-sm placeholder-gray-400 focus:outline-none"
            />
            <FaArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-6 bg-[#041012] text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">Copyright © 2025 by Hotel Aashirwad</div>
          <div className="text-center">
            <h1 className="text-lg tracking-wide font-semibold">Hotel Aashirwad</h1>
            <span className="text-xs tracking-widest text-gray-400">LUXURY HOTEL</span>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
