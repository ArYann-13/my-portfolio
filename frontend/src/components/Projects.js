import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';


const projectList = [
  {
    title: "IoT Devices Management System",
    subtitle: "Management System for IoT devices and Automation",
    description:
      "ESP32, DHT22, LDR sensors, and relays. Track temperature, humidity, and light intensity in real time via a React dashboard. Supports auto/manual control for fans and lights, graph visualisations with Recharts, historical data logging, and custom automation thresholds via a Node.js + MongoDB backend.",
    imageUrl: "/assets/projectSS/IoT.png",
    projectLink: "https://github.com/ArYann-13/Iot-Device-Mangament-System",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    accentLight: "from-zinc-600 to-zinc-400",
    accentDark: "dark:from-violet-600 dark:to-cyan-500",
  },
  {
    title: "WebText To PDF Extension",
    subtitle: "Convert any selected webpage text into a downloadable PDF — instantly",
    description:
      "A lightweight Chrome extension that converts selected webpage text into downloadable PDFs with one click. Node.js + PDFKit backend dynamically generates PDFs; an EJS interface manages all generated files. Built for productivity with clean client-server architecture.",
    imageUrl: "/assets/projectSS/texttoPDF.png",
    projectLink: "https://github.com/ArYann-13/WEBText-To-PDF-Extension",
    tags: ["Tailwind CSS", "Node.js", "Express", "PDFKit", "EJS"],
    accentLight: "from-zinc-700 to-zinc-500",
    accentDark: "dark:from-violet-600 dark:to-amber-500",
  },
  {
    title: "Weather App",
    subtitle: "Current weather & 5-day forecast",
    description:
      "A clean, responsive weather app providing real-time updates based on user location or searched cities. Displays temperature, humidity, wind speed, and weather conditions. Built for speed and accuracy using the OpenWeather API.",
    imageUrl: "/assets/projectSS/weather-app-ss.png",
    projectLink: "https://github.com/ArYann-13/weather-app",
    liveDemoLink: "https://weather-app-aryanverma-13.vercel.app/",
    tags: ["React.js", "OpenWeather API", "Tailwind CSS", "JavaScript"],
    accentLight: "from-zinc-600 to-zinc-500",
    accentDark: "dark:from-violet-500 dark:to-sky-400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative px-4 sm:px-8 py-20 sm:py-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">Projects</h2>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className="block relative group w-full max-w-md"
                >
                  {/* Glow behind image */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.accentLight} ${project.accentDark} opacity-15 dark:opacity-25 blur-2xl scale-105 group-hover:opacity-25 dark:group-hover:opacity-40 transition-opacity duration-500`} />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="relative z-10 w-full rounded-2xl object-cover shadow-2xl
                      ring-1 ring-zinc-200 dark:ring-violet-400/20
                      transition-all duration-500 group-hover:shadow-glow-lg"
                  />
                  <div className="absolute inset-0 z-20 rounded-2xl bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-white/20 backdrop-blur-sm text-white font-grotesk font-bold px-4 py-2 rounded-xl text-sm">
                      Live Demo ↗
                    </span>
                  </div>
                </motion.a>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="glass-card p-6 sm:p-8 h-full">
                  <span className={`inline-block text-xs font-grotesk font-bold uppercase tracking-widest
                    bg-gradient-to-r ${project.accentLight} ${project.accentDark} bg-clip-text text-transparent mb-2`}>
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-grotesk font-extrabold text-xl sm:text-2xl text-light-text dark:text-dark-text mt-1 mb-1">
                    {project.title}
                  </h3>
                  <p className={`font-grotesk font-semibold text-sm bg-gradient-to-r ${project.accentLight} ${project.accentDark} bg-clip-text text-transparent mb-3`}>
                    {project.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-light-text_sec dark:text-dark-text_sec font-grotesk leading-relaxed text-justify">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="theme-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn-glow text-sm px-5 py-2"
                    >
                      <FaGithub size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
