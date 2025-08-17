import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PageLoader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          // Allow a small delay after reaching 100% before hiding the loader
          setTimeout(() => {
            setLoading(false);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-primary z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Loading...</h1>
        <div className="relative w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#915EFF]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="text-white font-medium">{Math.round(progress)}%</p>
        <div className="mt-8">
          <span className="canvas-loader"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;