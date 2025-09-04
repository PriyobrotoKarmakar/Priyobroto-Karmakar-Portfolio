import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { About, Contact, Certificates, Hero, Navbar, Works, StarsCanvas, SmoothScroll, NeonCursor, PageLoader, Resume, ScrollToTopButton } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Ensure minimum loading time for better user experience
  useEffect(() => {
    // Force minimum loading time of 2.5 seconds
    const minLoadingTime = setTimeout(() => {
      // This will only take effect if all content has loaded
      window.addEventListener('load', () => setLoading(false));
      
      // If window already loaded, this will trigger
      if (document.readyState === 'complete') {
        setLoading(false);
      }
    }, 2500);

    return () => clearTimeout(minLoadingTime);
  }, []);

  return (
    <BrowserRouter>
      {/* Show loading screen while content loads */}
      <AnimatePresence>
        {loading && <PageLoader setLoading={setLoading} />}
      </AnimatePresence>

      {/* Only render main content when loading is complete */}
      {!loading && (
        <>
          {/* NeonCursor moved outside SmoothScroll to prevent interference */}
          <NeonCursor />
          <SmoothScroll>
            <div className='relative z-0 bg-primary'>
              <ScrollToTopButton />
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              {/* <Experience /> */}
              <Works />
              <Certificates />
              <Resume />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </SmoothScroll>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
