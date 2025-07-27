import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaXTwitter, FaGithub, FaYoutube, FaCodepen } from "react-icons/fa6";
import { SaktrixLogo } from './Logo';

export const Footer = () => {
  return (
    <footer className=" bg-white/60 border-t dark:border-black border-black/10 bg-gradient-to-br  dark:from-black dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-white px-6 py-12 flex flex-col gap-10 transition-colors duration-500">

      {/* Call to Action */}
      <div className="text-center flex flex-col items-center gap-4">

        {/* Tagline */}
        <p className="text-indigo-600 dark:text-indigo-300 text-lg font-semibold tracking-wide">
          Power Up with&nbsp;Saktrix&nbsp;
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500">
          Design once.<br />Ship everywhere.
        </h2>

        {/* Sub-copy */}
        <p className="max-w-2xl text-gray-600 dark:text-gray-400">
          Craft lightning-fast, accessible interfaces with our animated, dark-mode-ready React&nbsp;+&nbsp;Tailwind components.&nbsp;
          <span className="font-medium text-gray-800 dark:text-white">From startup MVPs to enterprise dashboards—Saktrix&nbsp; scales with you.</span>
        </p>

        {/* CTA button */}
        <button
          className="mt-4 px-7 py-3 rounded-md font-semibold
                     bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white
                     hover:from-indigo-600 hover:to-rose-500 transition-colors
                     dark:shadow-[0_0_12px_0_rgba(236,72,153,0.35)] cursor-pointer">
          <Link to="/contact"> Getstarted</Link>
        </button>
      </div>

      {/* Navigation Links and Social Media */}
      <div className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <div className=' ml-12'><SaktrixLogo/></div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 justify-center text-gray-700 dark:text-white">
          <li><NavLink to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">About</NavLink></li>
          <li><NavLink to="/project" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Project</NavLink></li>
          <li><NavLink to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Services</NavLink></li>
          <li><NavLink to="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Blog</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all">Contact</NavLink></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-2xl text-gray-600 dark:text-white">
          <a href="https://www.instagram.com/_saktrix_?igsh=OGg1NnV4eWhsOXVt" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-all"><FaXTwitter /></a>
          <a href="https://github.com/Mr-Code-Rajesh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300 transition-all"><FaGithub /></a>
          <a href="https://www.youtube.com/@saktrix" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all"><FaYoutube /></a>
          <a href="https://www.naukri.com/code360/profile/f622777c-7d19-4848-9b24-9dbe5ee07f08" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-all"><FaCodepen /></a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} <span className="text-pink-500 dark:text-pink-400 font-semibold">Saktrix</span>. All rights reserved.
      </div>

    </footer>
  );
};
