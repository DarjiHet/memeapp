import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#a2d2ff] text-white py-8 mt-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Brand */}
        <div>
          <img src="/logo.png" alt="logo" className="w-30 h-15 object-cover rounded-4xl"/>
          <p className="text-sm mt-2 text-white/80 font-bold">
            Capturing moments. Sharing memories.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" target="_blank" className="hover:text-[#ffafcc]"><FaInstagram size={22} /></a>
            <a href="#" target="_blank" className="hover:text-[#ffafcc]"><FaGithub size={22} /></a>
            <a href="#" target="_blank" className="hover:text-[#ffafcc]"><FaLinkedin size={22} /></a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t-2 border-white text-center text-sm pt-4 text-white font-bold">
        © {new Date().getFullYear()} SnapFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;