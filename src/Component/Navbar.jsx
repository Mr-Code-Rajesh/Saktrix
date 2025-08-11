import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsSun, BsMoon } from 'react-icons/bs';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // hamburger menu icons
import { AnimatePresence ,motion } from 'framer-motion';
import { BsMoonStarsFill } from "react-icons/bs";
import { SaktrixLogo } from './Logo';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const html = document.documentElement;
    if (!darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  const menuItems = (
    <>
      <li className="relative group">
        <NavLink to="/"   className={({ isActive }) =>
         isActive
         ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full shadow-md nav-active px-4 py-1 transition-all"
      : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent  rounded-full bg-black/5 hover:font-bold transition-all duration-150 ease-in px-4 py-1"}>
        Home
        </NavLink>
      </li>

      <li className="relative group">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => setAboutDropDown(!aboutDropDown)}>
          <NavLink to="/about" className={({ isActive }) =>
     isActive
      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white  rounded-full shadow-md nav-active px-4 py-1"
      : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent  rounded-full bg-black/5 hover:font-bold transition-all duration-150 ease-in px-4 py-1"}>
           About
          </NavLink>
          {aboutDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {aboutDropDown && (
          <div className="absolute lg:top-12 top-4 lg:left-0 left-20 z-50 bg-white text-black w-44 rounded-lg shadow-lg flex flex-col p-3 dark:bg-gray-900 dark:text-white">
            <button onClick={() => navigate('/about/skills')} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-2 text-left">
            About me</button>

            <button onClick={() => navigate('/about/team')} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-2 text-left">
            Tech Visionaries</button>
          </div>
        )}
      </li>

      <li className="relative group">
        <NavLink to="/project" className={({ isActive }) =>
     isActive
      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white  rounded-full shadow-md nav-active px-4 py-1"
      : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent  rounded-full bg-black/5 hover:font-bold transition-all duration-150 ease-in px-4 py-1"}>
        Project
        </NavLink>
      </li>

      <li className="relative group">
        <NavLink to="/services" className={({ isActive }) =>
     isActive
      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full shadow-md nav-active px-4 py-1"
      : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent  rounded-full bg-black/5 hover:font-bold transition-all duration-150 ease-in px-4 py-1"}>
        Services
        </NavLink>
      </li>

      <li className="relative group">
        <NavLink to="/blog" className={({ isActive }) =>
     isActive
      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full shadow-md nav-active px-4 py-1"
      : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent  rounded-full bg-black/5 hover:font-bold transition-all duration-150 ease-in px-4 py-1"}>
        Blog
        </NavLink>
      </li>

      <li className="relative group">
          <NavLink to="/contact" className={({ isActive }) =>
     isActive
      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white  rounded-full shadow-md nav-active px-4 py-1"
      : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent  rounded-full bg-black/5 hover:font-bold transition-all duration-150 ease-in px-4 py-1"}>
          Contact
          </NavLink>
          {/* {isContactDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
       

        {/* {isContactDropdownOpen && (
          <div className="absolute top-12 bg-white text-black w-44 rounded-lg shadow-lg flex flex-col p-3 dark:bg-gray-900 dark:text-white">
            <button onClick={() => navigate('/contact/info')} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-2 text-left">Contact Info</button>
            <button onClick={() => navigate('/contact/form')} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-2 text-left">Contact Form</button>
          </div>
        )} */}

      </li>
    </>
  );

  return (
    <header className="w-full  font-roboto fixed z-50 backdrop-blur bg-transparent shadow  dark:text-white/80">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <SaktrixLogo/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 items-center  text-lg bg-white/10 py-1.5 px-5 rounded-full shadow-sm dark:bg-white/10  dark:border-white/20 border border-white/10">
          {menuItems}
        </ul>

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:inline-block ml-4 text-xl shadow-sm dark:bg-white/10 dark:border-white/5 bg-white/90 p-2 rounded-full cursor-pointer text-center"
        >
          {darkMode ? <BsMoonStarsFill /> : <span className="text-pink-500"><BsSun /></span>}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <BsMoonStarsFill /> : <span className="text-yellow-400"><BsSun /></span>}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-3xl">
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
    {mobileMenuOpen && (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-22 left-4 right-4 z-50 md:hidden list-none bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-xl px-6 py-8 flex flex-col gap-5 font-semibold text-base text-gray-800 dark:text-white"
    >
      {menuItems}
    </motion.div>
  </AnimatePresence>
)}

    </header>
  );
};
