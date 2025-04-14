import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import ConnectSection from './components/ConnectSection'
import { ThemeProvider } from './components/ThemeContext'



const App = () => {
  const [showConnect, setShowConnect] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-dark-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
        <p className="mt-4 text-xl font-semibold text-indigo-600 dark:text-indigo-400">Loading...</p>
      </div>

    );
  }

  return (
    <ThemeProvider>
      <div className='text-light-text dark:text-dark-text flex flex-col justify-between h-screen'>
        <Navbar />
        <MainSection onOpen={() => setShowConnect(true)} />
        {showConnect && <ConnectSection onClose={() => setShowConnect(false)} />}
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
