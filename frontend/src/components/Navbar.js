import React, { useState} from 'react';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";
import { Link } from 'react-scroll';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const {theme,toggleTheme}=useTheme();

    return (
        <section id="top" className='top-0 w-full  bg-light-bg_two dark:bg-dark-nav_bg text-light-text shadow-md z-50'>
            <header className='flex justify-between items-center px-6 py-4  max-w-screen-xl mx-auto'>
                {/* Logo */}
                <img src="assets/bg.png" className='w-16 h-16' alt="Logo" />

                {/* Desktop Navigation */}
                <nav className='hidden md:flex text-gray-800 dark:text-gray-400 gap-5 ml-auto mr-4'>
                    <Link to="about-me" smooth={true} duration={500} className="cursor-pointer hover:text-[#8151f1] transition-all">
                        About Me
                    </Link>
                    <Link to='projects' smooth={true} duration={1000} className='cursor-pointer hover:text-[#8151f1] transition-all'>
                        Projects
                    </Link>
                    <Link to="education" smooth={true} duration={1000} className="cursor-pointer hover:text-[#8151f1] transition-all">
                        Education
                    </Link>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-[#8151f1] transition-all">
                        Skills
                    </Link>
                </nav>

                {/* Dark Mode & Hamburger Menu */}
                <div className="flex items-center gap-4">
                    {/* Dark Mode Toggle */}
                    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
                        {theme === "dark" ? <MdLightMode className="text-yellow-400" size={24} /> : <MdDarkMode className="text-gray-900" size={24} />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <MdClose size={28} className="text-gray-800 dark:text-white" /> : <MdMenu size={28} className="text-gray-800 dark:text-white" />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 ${menuOpen ? "block" : "hidden"}`} onClick={() => setMenuOpen(false)}></div>

            <div className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
                <nav className="flex flex-col items-center mt-20 gap-6 text-gray-800 dark:text-gray-400">
                    <Link to="about-me" smooth={true} duration={500} className="cursor-pointer hover:text-[#8151f1] transition-all" onClick={() => setMenuOpen(false)}>
                        About Me
                    </Link>
                    <Link to='projects' smooth={true} duration={300} className='cursor-pointer hover:text-[#8151f1] transition-all' onClick={() => setMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-[#8151f1] transition-all" onClick={() => setMenuOpen(false)}>
                        Education
                    </Link>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-[#8151f1] transition-all" onClick={() => setMenuOpen(false)}>
                        Skills
                    </Link>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
