import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          >
            <div className="relative flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 rounded-full border-t-2 border-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card glass-card text-3xl font-bold text-white shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                <span className="gradient-text">DG</span>
              </div>
            </div>
            <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-card">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Timeline />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
