import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { ReactTyped } from "react-typed";

import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'


const MainSection = ({ onOpen }) => {
    
    return (
        <motion.section id='main-section'  className='bg-light-background dark:bg-dark-background
        '  initial={{ opacity: 0, y: 50 }}  // Start hidden
        animate={{ opacity: 1, y: 0 }}   // Animate into view
        transition={{ duration: 1.8, ease: "easeOut" }} // Smooth transition
        
        >
            <div className='flex  -mt-10 relative  '>

                <div className='w-full px-4 max-w-screen-xl mx-auto relative h-[80vh]'>


                    <img className='absolute  left-1/2 top-[120px]  -translate-x-1/2 
                     w-[340px] sm:w-[450px] md:w-[600px] md:h-[550px] md:top-[40px] ' src='assets/bg.png' />

                    <div className='relative ml-4 md:ml-16  translate-y-3/4 '>
                        <h1 className='text-[32px] sm:text-[48px] md:text-[64px] font-[Spartan] text-light-text dark:text-yellow-400 mr-12'>Aryan Verma
                        </h1>
                        <p className='mb-4'>
                            <ReactTyped className='font-[Merriweather] text-indigo-400  text-[14px] sm:text-[18px] md:text-[24px]  italic' strings={["Mern StacK Developer", "Web Developer"]}
                                typeSpeed={120}
                                backSpeed={80}
                                loop
                            />
                        </p>

                        <button className='bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500
                            py-2 px-5 rounded-md font-extrabold hover:scale-110 ease-in-out transition 1.3s'
                            onClick={onOpen}
                        >Let's Contect
                        </button>

                    </div>


                </div>
                <ul className=' ml-auto  space-y-6  translate-y-3/4 absolute right-6'>
                    <li className=''>
                        <a href="#" target='_blank' className=""><FaLinkedin className='w-8 h-8 hover:text-[#0077b5]   transition duration-300 hover:shadow-[0_0_15px_rgba(112,12,134,0.8)]' />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ArYann-13" target='_blank' className=""><FaGithub className='w-8 h-8 hover:text-[#333]   transition duration-300 hover:shadow-[0_0_15px_rgba(112,12,134,0.8)]' /></a>
                    </li>
                    <li>
                        <a href="mailto:raman809075@gmail.com" target='_blank' className=""><CgMail className='w-8 h-8 hover:text-[#D44638]   transition duration-300 hover:shadow-[0_0_15px_rgba(112,12,134,0.8)]' />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank' className=""><FaYoutube className='w-8 h-8 hover:text-[#FF0000]   transition duration-300 hover:shadow-[0_0_15px_rgba(112,12,134,0.8)]' /></a>
                    </li>
                    <li>
                        <a href="#" target='_blank' className=""><FaXTwitter className='w-8 h-8 hover:text-[#1DA1F2]   transition duration-300 hover:shadow-[0_0_15px_rgba(112,12,134,0.8)]' /></a>
                    </li>
                </ul>



            </div>
            <div className=' mt-6 relative  h-[100px]'>
                <div className='flex flex-col justify-center items-center group '>


                    <Link to="about-me" smooth={true} duration={500}>
                        <button className='bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500
                py-2 px-5  rounded-md font-extrabold hover:scale-110 ease-in-out transition 1.3s
                 mb-1 '>About Me</button>

                    </Link>

                    <FaArrowDownLong size={30} className='absolute bottom-5 group-hover:scale-110 ' />
                </div>
            </div>
        </motion.section>
    )
}

export default MainSection
