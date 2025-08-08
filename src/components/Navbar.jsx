import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

// ✅ Theme toggle
const [darkMode, setDarkMode] = useState(() => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') === 'light' ? false : true;
  }
  return true;
});

// ✅ Scroll direction detection
const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

const toggleMenu = () => setMenuOpen(!menuOpen);

// ✅ Apply theme
useEffect(() => {
  const html = document.documentElement;
  if (darkMode) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

// ✅ Scroll behavior
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setShowNavbar(false); // scroll down
    } else {
      setShowNavbar(true); // scroll up
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

return (
  <nav
    className={`fixed top-0 w-full z-50 bg-white dark:bg-background-dark shadow-none transition-transform duration-300 ${
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    }`}
  >
    <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-screen-md lg:max-w-[85%] xl:max-w-[1300px] 2xl:max-w-[2300px] mx-auto px-2 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="text-3xl pl-4 text-black dark:text-white" style={{ fontFamily: 'Augustina'}}>
        <span
          className="text-4xl align-middle text-gray-500"
          style={{ fontFamily: 'monospace' }}
        >
          &lt;
        </span>
        Prakadeesh
        <span
          className="text-4xl align-middle text-gray-500"
          style={{ fontFamily: 'monospace' }}
        >
          /&gt;
        </span>
      </div>

      {/* Nav Items - Hidden on Mobile */}
      <div className="hidden md:flex gap-6 items-center text-black dark:text-white text-base lg:text-xl font-medium font-poppins">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#achievements" className="hover:text-blue-500">Achievements</a>
        <a href="#cv-section" className="hover:text-blue-500">Resume</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>

        <div className="ml-2 mt-1.5">
          <label className="relative inline-flex items-center cursor-pointer scale-125">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-500 dark:peer-focus:ring-violet-400 rounded-full peer dark:bg-gray-600 
              peer-checked:after:translate-x-full 
              after:content-['🌞'] dark:after:content-['🌜'] 
              after:absolute after:top-[0px] after:left-0
              after:bg-white after:border-gray-300 after:border 
              after:rounded-full after:h-5 after:w-5 
              after:flex after:items-center after:justify-center 
              after:text-[16px] after:transition-all 
              dark:border-gray-500">
            </div>
          </label>
        </div>
      </div>

      {/* Hamburger Menu - Visible on Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-black dark:text-white">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
    <div className="md:hidden px-6 py-4 bg-white dark:bg-background-dark shadow-md space-y-4 text-lg font-poppins">
      <a href="#about" onClick={() => setMenuOpen(false)} className="block text-black dark:text-white">About</a>
      <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-black dark:text-white">Skills</a>
      <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-black dark:text-white">Projects</a>
      <a href="#achievements" onClick={() => setMenuOpen(false)} className="block text-black dark:text-white">Achievements</a>
      <a href="#cv-section" onClick={() => setMenuOpen(false)} className="block text-black dark:text-white">Resume</a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-black dark:text-white">Contact</a>

      <div className="ml-2 mt-1.5">
        <label className="relative inline-flex items-center cursor-pointer scale-125">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-500 dark:peer-focus:ring-violet-400 rounded-full peer dark:bg-gray-600 
            peer-checked:after:translate-x-full 
            after:content-['🌞'] dark:after:content-['🌜'] 
            after:absolute after:top-[0px] after:left-0
            after:bg-white after:border-gray-300 after:border 
            after:rounded-full after:h-5 after:w-5 
            after:flex after:items-center after:justify-center 
            after:text-[16px] after:transition-all 
            dark:border-gray-500">
          </div>
        </label>
      </div>
    </div>
  )}
  </nav>
);
};

export default Navbar;