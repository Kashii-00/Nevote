import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';
import { initAnimations } from './utils/animations';

// Force HMR reference
function App() {
  useEffect(() => {
    // Initialize animations and smooth scroll
    // We pass the wrapper ID to the init function if needed, 
    // or let it find it. providing specific element is better for React refs 
    // but the script classes are built around document selectors.
    // For now, we'll keep it simple and let the script find #smooth-scroll-wrapper

    // We need to ensure the wrapper exists before init
    const cleanup = initAnimations();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      {/* 
        This wrapper is targeted by SmoothScroll. 
        It effectively replaces the 'body' relative scroll.
      */}
      <div id="smooth-scroll-wrapper">
        <Hero />
        <SecondPage />
        <Footer />
      </div>

      {/* Cursor Glow Container if needed, or handled by script automatically appending */}
      <div id="cursorGlow" className="cursor-glow"></div>
    </div>
  );
}

export default App;
