import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { CgMail } from 'react-icons/cg';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const socialLinks = [
  {  icon: FaGithub,    href: 'https://github.com/ArYann-13',   hoverColor: 'hover:text-zinc-700 dark:hover:text-violet-400',   label: 'GitHub'     },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/aryan-verma-a68580232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',        hoverColor: 'hover:text-[#0077b5]', label: 'LinkedIn'  },
  { icon: CgMail,      href: 'mailto:raman809075@gmail.com',    hoverColor: 'hover:text-rose-400',  label: 'Email'     },
  { icon: FaInstagram,   href: 'https://instagram.com/xt_aaryan',hoverColor: 'hover:text-red-500',   label: 'Instagram'   },
];

const Footer = () => (
  <footer className="relative mt-8 px-4 py-10 border-t border-light-border dark:border-dark-border
    bg-light-bg_two/60 dark:bg-dark-nav_bg/80 backdrop-blur-md">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6">

      {/* Logo + back-to-top */}
      <div onClick={() => scroll.scrollToTop({ duration: 600 })} className="cursor-pointer group">
        <motion.img
          src="assets/bg.svg"
          alt="Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain
            drop-shadow-[0_0_16px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_20px_rgba(167,139,250,0.4)]
            transition-transform duration-300 group-hover:scale-110"
          whileHover={{ rotate: 10 }}
        />
      </div>

      {/* Name */}
      <p className="font-grotesk font-black text-xl sm:text-2xl gradient-text tracking-wide">
        Aryan Verma
      </p>

      <p className="font-grotesk text-xs sm:text-sm text-light-text_sec dark:text-dark-text_sec text-center max-w-xs">
        Building digital experiences that are fast, beautiful, and scalable.
      </p>

      {/* Social icons */}
      <ul className="flex items-center gap-5 sm:gap-7">
        {socialLinks.map(({ icon: Icon, href, hoverColor, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`block text-light-text_sec dark:text-dark-text_sec ${hoverColor}
                transition-all duration-200 hover:scale-125 hover:drop-shadow-[0_0_8px_currentColor]`}
            >
              <Icon size={22} />
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="font-grotesk text-xs text-light-text_sec dark:text-dark-text_sec opacity-60">
        © {new Date().getFullYear()} Aryan Verma 
      </p>
    </div>
  </footer>
);

export default Footer;
