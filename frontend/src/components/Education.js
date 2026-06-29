import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const timelineEvents = [
    {
      year: "2018–19",
      title: "High School",
      img: "assets/g3-1.jpg",
      name: "Baba Gurukul Academy",
      link: "https://babagurukul.com/",
      marks: "Marks:",
      numb: "459 / 500",
      side: "left",
     
    },
    {
      year: "2019–20",
      title: "Intermediate",
      img: "assets/LPS.jpg",
      name: "Lucknow Public School",
      link: "https://lpsgomtinagar.in/",
      marks: "Marks:",
      numb: "466 / 500",
      side: "right",
      
    },
    {
      year: "2021–25",
      title: "Graduation (B.Tech)",
      img: "assets/BIET.jpg",
      name: "BIET Jhansi",
      link: "https://bietjhs.ac.in/",
      marks: "CGPA:",
      numb: "7.96",
      side: "left",
     
    },
  ];

  return (
    <section id="education" className="relative px-4 sm:px-8 py-20 sm:py-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">My Education</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5
            bg-gradient-to-b from-zinc-300/0 via-zinc-400/40 dark:from-violet-500/0 dark:via-violet-500/50 dark:to-violet-500/0
            -translate-x-1/2" />

          <div className="space-y-14">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center w-full
                  ${event.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Connector line (desktop) */}
                <div className={`hidden md:block absolute top-1/2 h-0.5 w-5/12
                  bg-gradient-to-r from-zinc-400/40 to-zinc-500/40 dark:from-violet-500/50 dark:to-amber-400/50
                  ${event.side === 'left' ? 'right-1/2' : 'left-1/2 rotate-180'}`} />

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                  w-5 h-5 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-600 dark:from-violet-500 dark:to-amber-400
                  shadow-glow items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white dark:bg-dark-background" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={`glass-card w-full md:w-5/12 p-5 sm:p-6
                    ${event.side === 'left' ? 'md:mr-[8.33%]' : 'md:ml-[8.33%]'}`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-1">
                    
                    <span className="theme-tag text-sm !px-2 !py-0.5">
                      {event.year}
                    </span>
                  </div>

                  <h3 className="font-grotesk font-bold text-lg text-light-text dark:text-dark-text mt-1">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-light-text_sec dark:text-dark-secondary font-semibold mb-3">
                    {event.marks} {event.numb}
                  </p>

                  {/* Image */}
                  <div className="relative group rounded-xl overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-36 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                        opacity-0 group-hover:opacity-100 flex items-end justify-center pb-4
                        text-white font-grotesk font-semibold text-sm transition-opacity duration-300"
                    >
                      Visit Website 🔗
                    </a>
                  </div>

                  <p className="mt-3 font-grotesk font-semibold text-center text-sm sm:text-base
                    text-light-text_sec dark:text-dark-text_sec">
                    {event.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-20 theme-divider max-w-screen-xl mx-auto" />
    </section>
  );
};

export default Education;
