import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTheme } from './ThemeContext';

const NAV_LINKS = [
  { to: 'about-me',  label: 'About Me',  duration: 500  },
  { to: 'skills',    label: 'Skills',    duration: 600  },
  { to: 'projects',  label: 'Projects',  duration: 800  },
  { to: 'education', label: 'Education', duration: 900  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        id="top"
        className={`sticky top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? 'backdrop-blur-md bg-white/85 dark:bg-dark-nav_bg shadow-lg shadow-black/5 dark:shadow-violet-500/10'
            : 'bg-light-bg_two/50 dark:bg-dark-nav_bg/60 backdrop-blur-sm'
          } border-b border-light-border dark:border-dark-border`}
      >
        <div className="flex justify-between items-center px-4 sm:px-8 py-3 max-w-screen-xl mx-auto">
          <div onClick={() => scroll.scrollToTop({ duration: 400 })} className="cursor-pointer flex items-center gap-2 group">
            <img
              src="assets/bg.svg"
              className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-110"
              alt="Logo"
            />
            <span className="font-grotesk font-bold text-base sm:text-lg hidden xs:inline gradient-text">
              Aryan
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-grotesk font-medium text-light-text_sec dark:text-dark-text_sec">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={link.duration}
                className="cursor-pointer relative group py-1 hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-violet-400 dark:to-amber-300 rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-light-bg_two dark:bg-dark-bg_two hover:bg-zinc-200 dark:hover:bg-violet-900/30 transition-all duration-200 hover:scale-110"
            >
              {theme === 'dark'
                ? <MdLightMode className="text-dark-gold" size={22} />
                : <MdDarkMode  className="text-light-primary" size={22} />}
            </button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-violet-900/30 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {menuOpen
                ? <MdClose  size={26} className="text-light-text dark:text-dark-text" />
                : <MdMenu   size={26} className="text-light-text dark:text-dark-text" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full z-50
          bg-white/92 dark:bg-dark-bg_two/95 backdrop-blur-xl
          shadow-2xl border-l border-light-border dark:border-dark-border
          transform transition-transform duration-300
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-violet-900/30 transition"
          onClick={() => setMenuOpen(false)}
        >
          <MdClose size={26} className="text-light-text dark:text-dark-text" />
        </button>

        <nav className="flex flex-col items-center gap-8 mt-24 font-grotesk font-semibold text-lg text-light-text dark:text-dark-text">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={link.duration}
              className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
