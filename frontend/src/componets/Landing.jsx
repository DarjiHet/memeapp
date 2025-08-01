// src/pages/Landing.jsx
import React from "react";
import { Link } from 'react-router-dom';

const images = [
  { src: '/images/wallpaper 1.jpg', height: 'h-70'},
  { src: '/images/wallpaper 2.jpg', height: 'h-70'},
  { src: '/images/windows spotlight wallpaper.jpg', height: 'h-60'},
  { src: '/images/wallpaper 4.jpg', height: 'h-30'},
  { src: '/images/wallpaper 5.jpg', height: 'h-50'},
  { src: '/images/wallpaper 6.jpg', height: 'h-45'},
  { src: '/images/wallpaper 7.jpg', height: 'h-53'},
  { src: '/images/wallpaper 8.jpg', height: 'h-40'},
  { src: '/images/wallpaper 2.jpg', height: 'h-60'},
  { src: '/images/wallpaper 5.jpg', height: 'h-20'},
  { src: '/images/wallpaper 7.jpg', height: 'h-60'},
];

const Landing = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto p-6 py-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#a2d2ff] leading-tight">
            Welcome to MemeZone
          </h1>
          <p className="text-lg">
            Discover and share the funniest memes on the internet. Powered by
            modern design and good vibes.
          </p>
          {/* <button className="bg-[#ffafcc] hover:bg-[#ffa3c2] text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer"> */}
            <Link to='/images' className="bg-[#ffafcc] hover:bg-[#ffa3c2] text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer">
            Get Started
            </Link>
          {/* </button> */}
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/images/wallpaper 2.jpg"
            alt="Hero"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center text-[#a2d2ff] mb-8">
          Explore Trending Memes
        </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="w-full break-inside-avoid">
            <img
              src={`${img.src}`}
              alt={`img-${i}`}
              className={`w-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ${img.height}`}
            />
          </div>
        ))}
      </div>
      </section> 
    </div>
  );
};

export default Landing;
