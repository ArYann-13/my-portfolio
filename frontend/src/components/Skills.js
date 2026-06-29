import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiNodejsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiMysql, SiPython } from "react-icons/si";

const frontendSkills = [
  { id: 1, name: "React.js",     icon: <RiReactjsLine />,      color: "text-cyan-400",    glow: "rgba(34,211,238,0.4)"  },
  { id: 2, name: "JavaScript",   icon: <SiJavascript />,       color: "text-yellow-400",  glow: "rgba(250,204,21,0.4)"  },
  { id: 3, name: "Tailwind CSS", icon: <RiTailwindCssLine />,  color: "text-sky-400",     glow: "rgba(56,189,248,0.4)"  },
  { id: 4, name: "HTML5",        icon: <SiHtml5 />,            color: "text-orange-400",  glow: "rgba(251,146,60,0.4)"  },
  { id: 5, name: "CSS3",         icon: <SiCss3 />,             color: "text-blue-400",    glow: "rgba(96,165,250,0.4)"  },
];

const backendSkills = [
  { id: 6, name: "Node.js",     icon: <RiNodejsLine />, color: "text-green-400",   glow: "rgba(74,222,128,0.4)"  },
  { id: 7, name: "Express.js",  icon: <SiExpress />,    color: "text-gray-300",    glow: "rgba(203,213,225,0.3)" },
  { id: 8, name: "MongoDB",     icon: <SiMongodb />,    color: "text-emerald-400", glow: "rgba(52,211,153,0.4)"  },
  { id: 9, name: "MySQL",       icon: <SiMysql />,      color: "text-blue-500",    glow: "rgba(99,102,241,0.4)"  },
  { id: 10, name: "Python",     icon: <SiPython />,     color: "text-yellow-300",  glow: "rgba(253,224,71,0.4)"  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

const SkillCard = ({ skill }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.1, y: -5 }}
    className="glass-card p-4 w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center cursor-default"
    style={{ '--glow': skill.glow }}
  >
    <div className={`text-4xl sm:text-5xl ${skill.color} mb-2 transition-all duration-300`}
      style={{ filter: `drop-shadow(0 0 8px ${skill.glow})` }}>
      {skill.icon}
    </div>
    <h3 className="text-xs sm:text-sm font-grotesk font-semibold text-center text-light-text dark:text-dark-text">
      {skill.name}
    </h3>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative px-4 sm:px-8 py-20 sm:py-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">What I Know</h2>
          <p className="mt-4 text-light-text_sec dark:text-dark-text_sec font-grotesk text-sm sm:text-base">
            Technologies I work with regularly
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 justify-center">

          {/* Frontend */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-center sm:text-left mb-6 gradient-text-teal">
              ⚡ Frontend
            </h3>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {frontendSkills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
            </div>
          </motion.div>

          {/* Divider (desktop vertical) */}
          <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-violet-500/25 to-transparent self-stretch" />

          {/* Backend */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-center sm:text-left mb-6 gradient-text">
              🔧 Backend
            </h3>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {backendSkills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Divider */}
      <hr className="mt-20 theme-divider max-w-screen-xl mx-auto" />
    </section>
  );
};

export default Skills;
