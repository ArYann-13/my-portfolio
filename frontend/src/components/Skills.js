import React from "react";
import { RiReactjsLine, RiNodejsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiMysql, SiPython } from "react-icons/si";

const frontendSkills = [
  { id: 1, name: "React.js", icon: <RiReactjsLine />, color: "text-blue-500" },
  { id: 2, name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
  { id: 3, name: "Tailwind CSS", icon: <RiTailwindCssLine />, color: "text-cyan-500" },
  { id: 4, name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
  { id: 5, name: "CSS", icon: <SiCss3 />, color: "text-blue-400" },
];

const backendSkills = [
  { id: 6, name: "Node.js", icon: <RiNodejsLine />, color: "text-green-500" },
  { id: 7, name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
  { id: 8, name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
  { id: 9, name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
  { id: 10, name: "Python", icon: <SiPython />, color: "text-yellow-400" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mt-12 px-6 py-10 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      
      {/* Section Title */}
      <h2 className="text-3xl sm:text-[40px] font-bold text-center text-[#1788ae] border-b-2 border-[#1788ae] pb-2 w-max mx-auto">
        What I Know <br />
        <span className="text-[17px] text-indigo-400">(Skills)</span>
      </h2>

      {/* Skills Grid */}
      <div className="max-w-screen-lg mx-auto mt-10 flex flex-col sm:flex-row gap-12">

        {/* Frontend Skills */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-semibold text-[#0ea5e9] mb-4 text-center sm:text-left">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
            {frontendSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={`bg-gray-200 dark:bg-gray-800 p-4 w-32 h-32 flex flex-col items-center justify-center rounded-md shadow-lg
                  transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_rgba(23,136,171,0.6)]`}
              >
                <div className={`text-4xl ${skill.color} mb-2`}>{skill.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-semibold text-[#14b8a6] mb-4 text-center sm:text-left">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
            {backendSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={`bg-gray-200 dark:bg-gray-800 p-4 w-32 h-32 flex flex-col items-center justify-center rounded-md shadow-lg
                  transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_rgba(23,136,171,0.6)]`}
              >
                <div className={`text-4xl ${skill.color} mb-2`}>{skill.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>

      
      <hr className='mt-16 border-t-2 border-[#700c86] w-3/4 md:w-full mx-auto' />
    </section>
  );
};

export default Skills;
