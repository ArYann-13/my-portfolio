import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import ConnectSection from './components/ConnectSection'
import ParticleBackground from './components/ParticleBackground'
import { ThemeProvider } from './components/ThemeContext'

const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-background">
    <div className="relative flex items-center justify-center mb-8">
      <div className="absolute w-24 h-24 rounded-full border-2 border-dark-secondary/30 animate-ping" />
      {/* Spinning glow ring */}
      <div className="w-20 h-20 spin-glow" />
      {/* Inner logo */}
      <img src="assets/bg.svg" alt="Logo" className="absolute w-15 h-15 object-contain" />
    </div>
    <p className="text-dark-text font-grotesk text-lg font-semibold tracking-widest uppercase opacity-80">
      Loading<span className="animate-pulse">...</span>
    </p>
    <p className="gradient-text font-grotesk text-sm mt-2 tracking-wide">Aryan Verma • Portfolio</p>
  </div>
);

const App = () => {
  const [showConnect, setShowConnect] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <ThemeProvider>
      {/* Animated particle canvas — sits behind everything */}
      <ParticleBackground />

      <div className="relative z-10 text-light-text dark:text-dark-text flex flex-col min-h-screen">
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
