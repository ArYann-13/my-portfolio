import React from 'react'

const Education = () => {
  const timelineEvents = [
    {
      year: "2018-19",
      title: "High School",
      img: "assets/g3-1.jpg",
      link: "https://babagurukul.com/",
      marks:"Marks:",
      numb:"459/500",
      side: "left"
    },
    {
      year: "2019-20",
      title: "Intermediate",
      img: "assets/LPS.jpg",
      link: "https://lpsgomtinagar.in/",
      numb:"466/500",
      marks:"Marks:",
      side: "right"
    },
    {
      year: "2021-25",
      title: "Graduation",
      img: "assets/BIET.jpg",
      link: "https://bietjhs.ac.in/",
      marks:"YGPA:",
      numb:"",
      side: "left"
    },
  ];

  return (
    <section id='education' className='relative  text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background'>
      <p className="text-center text-3xl text-[#1788ae] m-[30px] font-bold">My Education</p>

      <div className="min-h-screen flex items-center justify-center p-6">
      <div className="relative w-full max-w-3xl">
        
        
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-600 transform -translate-x-1/2"></div>

        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full flex-col md:flex-row ${
                event.side === "left" ? "md:justify-start" : "md:justify-end"
              }`}
            >
 
              <div
                className={`hidden md:block absolute top-1/2 h-1 w-5/12 bg-gray-500 ${
                  event.side === "left" ? "right-1/2" : "left-1/2"
                }`}
              ></div>

              <div className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>

              {/* Timeline Card */}
              <div
                className={`w-full md:w-5/12 p-5 relative bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                  event.side === "left" ? "md:text-right md:right-16" : "md:text-left md:left-16"
                }`}
              >
             
                <h3 className="text-lg font-bold flex justify-between">
                  <span>{event.marks} {event.numb}</span>
                  <span className="text-blue-500">{event.year}</span>
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${event.side==="left"?"text-right" :"text-right"}`}>{event.title}</p>

                <div className="relative group mt-3">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-lg mx-auto transition-transform transform group-hover:scale-105"
                  />
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm font-semibold text-white rounded-lg transition-opacity"
                  >
                    Visit 🔗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <hr className='mt-16  border-t-2 border-[#700c86] w-3/4 md:w-full mx-auto' />

    </section>

  );
}

export default Education
