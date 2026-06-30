import React from 'react';
import { FaGithub, FaLinkedin ,FaInstagram} from "react-icons/fa";

import { CgMail } from "react-icons/cg";
import { ReactTyped } from "react-typed";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/aryan-verma-a68580232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', hoverColor: 'hover:text-[#0077b5]', label: 'LinkedIn'  },
  { icon: FaGithub,    href: 'https://github.com/ArYann-13',   hoverColor: 'hover:text-zinc-700 dark:hover:text-violet-400',   label: 'GitHub'   },
  { icon: CgMail,      href: 'mailto:raman809075@gmail.com',   hoverColor: 'hover:text-rose-400',   label: 'Email'    },
  { icon: FaInstagram,   href: 'https://instagram.com/xt_aaryan',         hoverColor: 'hover:text-red-500',   label: 'Instagram'    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const MainSection = ({ onOpen }) => {
  return (
    <motion.section
      id="main-section"
      className="relative min-h-[calc(100vh-68px)] flex flex-col"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto w-full px-4 sm:px-8 pt-12 pb-6 flex-1 gap-10">

        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 flex-1">
          <motion.div variants={itemVariants} className="mb-3">
            <span className="theme-badge mb-4">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-grotesk font-black text-[40px] sm:text-[56px] md:text-[68px] leading-tight tracking-tight
              text-light-text dark:text-dark-text"
          >
            Aryan{' '}
            <span className="gradient-text">Verma</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-3 font-merriweather italic text-light-text_sec dark:text-dark-secondary text-lg sm:text-xl md:text-2xl min-h-[2rem]">
            <ReactTyped
              strings={['MERN Stack Developer', 'Web Developer' ]}
              typeSpeed={100}
              backSpeed={70}
              loop
            />
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-md text-sm sm:text-base text-light-text_sec dark:text-dark-text_sec leading-relaxed"
          >
            I build fast, beautiful, and scalable web apps — from pixel-perfect
            frontends to robust backends.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            <button
              className="btn-glow text-sm sm:text-base"
              onClick={onOpen}
            >
              Let&apos;s Connect 🚀
            </button>
            <a href="/assets/Aryan.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn-outline text-sm sm:text-base font-grotesk">
                Resume
              </button>
            </a>
          </motion.div>

          <motion.ul variants={itemVariants} className="flex gap-5 mt-8 justify-center md:justify-start">
            {socialLinks.map(({ icon: Icon, href, hoverColor, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`block text-light-text_sec dark:text-dark-text_sec ${hoverColor}
                    transition-all duration-200 hover:scale-125 hover:drop-shadow-[0_0_10px_currentColor]`}>
                  <Icon size={24} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center items-center relative"
        >

          <img
            src="assets/bg.svg"
            alt="Aryan Verma"
            className="relative z-10 w-[260px] sm:w-[340px] md:w-[420px] float-anim drop-shadow-[0_0_40px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_0_60px_rgba(167,139,250,0.4)]"
          />
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-2 pb-10"
      >
        <Link to="about-me" smooth duration={500}>
          <button className="btn-glow text-sm px-6 py-2 mb-1">About Me</button>
        </Link>
        <FaArrowDownLong
          size={22}
          className="text-light-text_sec dark:text-dark-accent animate-bounce mt-1"
        />
      </motion.div>
    </motion.section>
  );
};

export default MainSection;
