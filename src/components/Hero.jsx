import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
// Import Spline with a dynamic import to avoid Three.js conflicts
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import { styles } from "../styles";

// Error boundary component to catch Spline errors
class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Spline error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[#915EFF] font-bold">3D Model could not be loaded</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Fallback loading component
const SplineLoading = () => (
  <div className="w-full h-full flex items-center justify-center">
    <p className="text-[#915EFF] font-bold">Loading 3D Model...</p>
  </div>
);

// Component with timeout for Spline
const SplineWithTimeout = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [timeoutOccurred, setTimeoutOccurred] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Set a timeout to prevent infinite loading
    timeoutRef.current = setTimeout(() => {
      if (loading) {
        setTimeoutOccurred(true);
        setLoading(false);
      }
    }, 20000); // 20 seconds timeout

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [loading]);

  const handleLoad = () => {
    console.log('Spline model loaded successfully');
    setLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleError = (err) => {
    console.error('Spline loading error:', err);
    setError(true);
    setLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  if (timeoutOccurred) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-[#915EFF] font-bold">3D Model loading timed out. Please refresh the page to try again.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-[#915EFF] font-bold">Error loading 3D Model</p>
      </div>
    );
  }

  return (
    <Spline 
      scene="https://prod.spline.design/SIij3xf6dIJrAJ0b/scene.splinecode" 
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        transform: 'scale(1.2)', // Scale up more to improve visibility
        transformOrigin: 'center center',
      }}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

// Suppress console warnings for development
const originalConsoleWarn = console.warn;
console.warn = function() {
  // Filter out specific Three.js and Spline warnings
  const args = Array.from(arguments);
  const warningMsg = args[0]?.toString() || '';
  
  if (
    warningMsg.includes('Multiple instances of Three.js') ||
    warningMsg.includes('computeBoundingSphere') ||
    warningMsg.includes('Please upgrade @splinetool/runtime')
  ) {
    // Suppress these specific warnings
    return;
  }
  
  // Pass through other warnings
  originalConsoleWarn.apply(console, args);
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modelContainerRef = useRef(null);

  // Set up intersection observer to load the 3D model only when visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the model is loaded, we can stop observing
          observer.disconnect();
        }
      });
    }, options);

    if (modelContainerRef.current) {
      observer.observe(modelContainerRef.current);
    }

    return () => {
      if (observer && modelContainerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <ParticlesBackground />
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-[1] pb-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        
        {/* Responsive layout - stacks vertically on mobile */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full mb-5 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Priyobroto</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I'm problem solver & develop, user{" "}
                <br className="sm:block hidden" />
                interfaces and web applications
              </p>
            </motion.div>
          </div>
          
          {/* 3D Model Container with lazy loading */}
          <motion.div 
            ref={modelContainerRef}
            className="relative lg:w-1/2 w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              minHeight: '300px', // Ensure minimum height on all devices
            }}
          >
            {/* Spline model loaded from URL with responsive styling */}
            {isVisible ? (
              <div className="w-full h-full flex items-center justify-center">
                <Suspense fallback={<SplineLoading />}>
                  <SplineErrorBoundary>
                    <SplineWithTimeout />
                  </SplineErrorBoundary>
                </Suspense>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
