import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const AboutMe = () => {
  return (
    <motion.section
      id="about-me"
      className="relative max-w-screen-xl mx-auto px-4 sm:px-8 py-20 sm:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* ── Heading ───────────────────────────────────── */}
      <motion.div variants={fadeUp} className="flex justify-center mb-14">
        <h2 className="section-heading gradient-text">About Me</h2>
      </motion.div>

      {/* ── Content ───────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">

        {/* Profile image */}
        <motion.div variants={fadeUp} className="flex justify-center items-center flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-400 via-zinc-500 to-zinc-600 dark:from-violet-600 dark:via-purple-500 dark:to-amber-400 blur-xl opacity-30 dark:opacity-35 scale-110" />
            <img
              src="assets/3426526.jpg"
              className="relative z-10 w-[220px] sm:w-[270px] h-[220px] sm:h-[270px] rounded-full object-cover
                ring-4 ring-zinc-300/50 dark:ring-violet-400/35
                shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_60px_rgba(139,92,246,0.28)]
                transition-transform duration-500 hover:scale-105"
              alt="Aryan Verma"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div variants={fadeUp} className="max-w-2xl">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-base sm:text-lg text-light-text dark:text-dark-text font-grotesk leading-relaxed">
              Hi, I'm{' '}
              <span className="gradient-text font-bold text-xl">Aryan Verma</span>,<br />a passionate{' '}
              <span className="gradient-text font-semibold">MERN Stack Developer</span>{' '}
              with expertise in React, Node.js, MongoDB, and Express. I enjoy turning
              ideas into interactive, user-friendly web applications.
            </p>
            <p className="mt-4 text-base sm:text-lg text-light-text_sec dark:text-dark-text_sec font-grotesk leading-relaxed">
              I'm currently diving deeper into the MERN stack to build full-stack
              applications and enhance my backend skills — while sharpening my
              problem-solving through{' '}
              <em className="font-bold text-light-primary dark:text-dark-primary not-italic">DSA</em>.
            </p>
            <p className="mt-4 text-base sm:text-lg text-light-text_sec dark:text-dark-text_sec font-grotesk leading-relaxed">
              I love tackling coding challenges, optimizing solutions, and writing
              efficient, scalable code. Always excited to learn new tech and
              collaborate — feel free to reach out!
            </p>

          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.hr
        variants={fadeUp}
        className="mt-20 theme-divider"
      />
    </motion.section>
  );
};

export default AboutMe;
