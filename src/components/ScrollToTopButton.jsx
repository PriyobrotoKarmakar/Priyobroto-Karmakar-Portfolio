import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Function to calculate scroll progress
  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
    
    // Show button when user scrolls down 300px from the top
    setIsVisible(scrollTop > 300);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollProgress);
    
    // Initial calculation
    calculateScrollProgress();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  // Calculate the stroke dash offset for the circular progress
  const circumference = 2 * Math.PI * 18; // 2πr where r is 18 (slightly smaller than the circle)
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-tertiary rounded-full cursor-pointer shadow-lg hover:bg-[#383838] transition-colors duration-300"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Circular progress indicator */}
          <svg className="absolute w-12 h-12" viewBox="0 0 44 44">
            <circle
              className="text-gray-700"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="18"
              cx="22"
              cy="22"
              opacity="0.3"
            />
            <circle
              className="text-violet-500"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="18"
              cx="22"
              cy="22"
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
          </svg>
          
          {/* Arrow icon */}
          <svg 
            className="w-5 h-5 text-white relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
