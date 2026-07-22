import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-bg">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
