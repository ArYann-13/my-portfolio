import React from 'react';
import { motion } from 'framer-motion';
const AboutMe = () => {
    return (
        <motion.section id="about-me" className="max-w-screen-xl min-h-screen mx-auto px-6 py-12  flex flex-col items-center bg-light-background dark:bg-dark-background"
        initial={{ opacity: 0, y: 50 }}  // Start hidden
        animate={{ opacity: 1, y: 0 }}   // Animate into view
        transition={{ duration: 1.8, ease: "easeOut" }} // Smooth transition
        >
            
          
            <h2 className="text-[32px] sm:text-[40px] border-b-2 border-[#1788ae] font-bold text-[#1788ab] text-center mb-8">
                About Me
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">

              
                <div className="flex justify-center items-center">
                    <img 
                        src="assets/3426526.jpg" 
                        className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        alt="Profile"
                    />
                </div>

                {/* Text Content */}
                <div className="text-left md:text-left max-w-[700px]">
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-light-text dark:text-dark-text font-[Spartan] leading-relaxed">
                        Hi, I'm <span className="text-[#700c86] text-[22px] italic font-semibold">Aryan Verma</span>,<br />
                        a passionate <span className="text-[#700c86] text-[22px] italic font-semibold">MERN Stack Developer</span> with expertise in 
                        React, Node.js, MongoDB, and Express. I enjoy turning ideas into interactive, user-friendly web applications.
                        <br /><br />
                        I'm currently diving deeper into the MERN stack to build full-stack applications and enhance my backend development skills. 
                        Additionally, I'm sharpening my problem-solving skills through <em><b>DSA</b></em> .
                        <br /><br />
                        I love tackling coding challenges, optimizing solutions, and writing efficient, scalable code.  
                        I'm always excited to learn new technologies, take on challenging projects, and collaborate with other developers.  
                        If you have an exciting project or want to connect, feel free to reach out!
                    </p>
                </div>

            </div>

            
            <hr className='mt-16  border-t-2 border-[#700c86] w-3/4 md:w-full mx-auto' />
            </motion.section>
    );
};

export default AboutMe;
