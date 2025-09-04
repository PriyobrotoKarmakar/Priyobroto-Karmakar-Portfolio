import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-inview',
      getDirection: true,
      getSpeed: true,
      inertia: 0.6
    });
    
    // Store the scroll instance in ref for access outside this scope
    locomotiveScrollRef.current = scroll;
    
    // Make the scroll instance available globally for the ScrollToTopButton
    window.locomotiveScroll = scroll;

    // Create a named function for the event listener so we can properly remove it
    const handleResize = () => {
      if (scroll) {
        scroll.update();
      }
    };

    // Update locomotive scroll on page resize
    window.addEventListener('resize', handleResize);
    
    // Handle anchor links with the Locomotive scroll instance
    const handleAnchorLinks = () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      
      anchorLinks.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement && scroll) {
            // Use locomotive-scroll's scrollTo method
            scroll.scrollTo(targetElement, {
              offset: -100,
              duration: 1000,
              disableLerp: false,
            });
          }
        });
      });
    };
    
    // After a short delay to ensure all elements are rendered
    setTimeout(() => {
      handleAnchorLinks();
      
      // Check if URL has hash and scroll to that section
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement && scroll) {
          scroll.scrollTo(targetElement, {
            offset: -100,
            duration: 1000,
          });
        }
      }
    }, 500);

    // Clean upasd
    return () => {
      if (scroll) {
        scroll.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="smooth-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;