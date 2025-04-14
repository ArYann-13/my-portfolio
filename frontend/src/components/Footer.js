import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="flex flex-col text-light-text dark:text-dark-text bg-light-bg_two items-center pb-10 dark:bg-slate-950">
      <p className="text-xs mt-6 ">Aryan Verma</p>

      <div className="black-logo">
        <Link to="top" smooth={true}>
          <img
            src="assets/bg.png"
            alt="Logo"
            className="w-[100px] h-[100px] cursor-pointer"
          />
        </Link>
      </div>

      <ul className="mx-auto flex items-center justify-center gap-6 text-light-text dark:text-[#b0b2c3]">
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 hover:text-[#0077b5] transition duration-200" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ArYann-13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-7 h-7 hover:text-[#333] transition duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="w-8 h-8 hover:text-[#FF0000] transition duration-200" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter className="w-8 h-8 hover:text-[#1DA1F2] transition duration-200" />
          </a>
        </li>
        <li>
          <a href="mailto:raman809075@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <CgMail className="w-8 h-8 hover:text-[#D44638] transition duration-200" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
