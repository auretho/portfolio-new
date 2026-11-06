import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors bg-[#181616] dark:bg-[#181616] bg-[#F7F4EF] text-[#EAE4DD] dark:text-[#EAE4DD] text-[#2C2523] flex flex-col font-sans selection:bg-[#D4704B] selection:text-white scroll-smooth">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Projects />
          <Skills />
          <About />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
}