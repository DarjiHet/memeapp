// src/componets/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";
import { useSelector } from "react-redux"
import { CgProfile } from "react-icons/cg";
import { MdSpaceDashboard } from "react-icons/md";

const Navbar = () => {

  const user = useSelector((store) => store.user)

  return (
    <nav className="sticky top-0 bg-[#a2d2ff] shadow-md z-50 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Right logo */}
          <div className="text-xl font-bold text-white">
           <Link to='/'> MyApp<span className="text-[#ffafcc]">Logo</span> </Link>
          </div>

          {/* Left links */}
          <div className="flex space-x-6">
            {
              !user && <Link
              to="/login"
              className="text-white font-semibold hover:text-[#ffafcc] transition"
            >
              <IoLogIn className='text-3xl'/>
            </Link>
            }

            {
              user && <Link
              to="/profile"
              className="text-white font-semibold hover:text-[#ffafcc] transition"
            >
              <CgProfile className='text-3xl'/>
            </Link>
            }

            {
              user?.role === "admin" && <Link
              to="/admindas"
              className="text-white font-semibold hover:text-[#ffafcc] transition"
            >
              <MdSpaceDashboard className='text-3xl'/>
            </Link>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
