import React from 'react';

const projectList = [
  {
    title: "Iot Devices Management System",
    subtitle: "Management System for IoT devices and Automation",
    description: "ESP32, DHT22, LDR sensors, and relays. Users can track temperature, humidity, and light intensity in real time via a React dashboard. The system supports auto/manual control for fans and lights and includes graph visualizations with Recharts, historical data logging, and custom automation thresholds via a Node.js backend and MongoDB.",
    imageUrl: "/assets/projectSS/IoT.png",
    projectLink: "https://github.com/ArYann-13/Iot-Device-Management-System",
    tags: ["#react.js","#Tailwind CSS", "#Node.js","#expressJS","#cors","#axioms", "#MongoDB"]
  },
  {
    title: "WebText To PDF Chrome extension",
    subtitle: "Easily convert selected text on any webpage into a downloadable PDF with a simple right-click",
    description: "A lightweight and intuitive Chrome extension that allows users to convert selected webpage text into downloadable PDF files with just one click. It includes a Node.js backend using PDFKit to dynamically generate PDFs, and an elegant EJS interface to manage and view all generated files. Built for productivity, the extension runs client-side while leveraging a server to handle PDF generation and hosting.",
    imageUrl: "/assets/projectSS/texttoPDF.png",
    projectLink: "https://github.com/ArYann-13/WEBText-To-PDF-Extension",
    tags: ["#Tailwind CSS", "#Node.js","#expressJS","#PDFkit", "#EJS (Embedded JavaScript Templates)"]
  },
  {
    title: "Weather APP",
    subtitle: "(Current weather and Forecast)",
    description: "A clean and responsive weather application that provides real-time weather updates based on user location or searched cities. It displays key information like temperature, humidity, wind speed, and weather conditions using a user-friendly interface. Built for speed and accuracy, the app ensures users always stay updated with the latest weather forecasts.",
    imageUrl: "/assets/projectSS/weather-app-ss.png",
    projectLink: "https://github.com/ArYann-13/weather-app",
    tags: ["#react.js", "#openWeatherAPI", "#Tailwind CSS", "#javascript"]
  },
  
];

const Projects = () => {
  return (
    <section id='projects' className="max-w-screen-xl mx-auto px-4 relative text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background pb-8 sm:pb-16 mt-10">
      <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] border-b-2 border-[#1788ae]">
        Projects
      </h2>

      {projectList.map((project, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 dark:bg-[#111] light:bg-slate-200 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

          <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="flex w-full relative justify-center sm:justify-start">
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[300px] w-full ml-6 mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
              {project.title}
            </h3>
            <span className="text-[#459bd5] text-base md:text-lg">
              {project.subtitle}
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, tagIndex) => (
                <li
                  key={tagIndex}
                  className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
