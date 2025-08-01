// src/componets/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
       {/* space for sticky navbar */}
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
