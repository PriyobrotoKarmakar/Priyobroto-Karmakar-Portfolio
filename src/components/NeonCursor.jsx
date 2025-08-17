import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NeonCursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  
  useEffect(() => {
    // Ensure refs are available before proceeding
    if (!cursorRef.current || !cursorInnerRef.current) return;
    
    // Store cursor position
    const cursor = {
      x: { current: 0, target: 0 },
      y: { current: 0, target: 0 }
    };
    
    // Track if cursor is over a certificate element
    let isOverCertificate = false;
    
    // Initialize cursor position off-screen to avoid initial flash
    gsap.set(cursorRef.current, { 
      xPercent: -50, 
      yPercent: -50, 
      x: -100, 
      y: -100,
      opacity: 0
    });
    
    // Create pulsing animation for inner cursor
    gsap.to(cursorInnerRef.current, {
      scale: 1.2,
      duration: 0.9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Fade in cursor after a brief delay
    gsap.to(cursorRef.current, {
      opacity: 1,
      duration: 1.5,
      delay: 0.9
    });
    
    // Mouse move event handler
    const handleMouseMove = (e) => {
      // Update target position
      cursor.x.target = e.clientX;
      cursor.y.target = e.clientY;
      
      // Check if the element under the cursor is a certificate
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      
      if (elementUnderCursor) {
        // Check if the element or any of its parents is a certificate
        let currentElement = elementUnderCursor;
        let isCertificate = false;
        
        // Traverse up to 5 levels of parent elements to check for certificate classes
        for (let i = 0; i < 5; i++) {
          if (!currentElement) break;
          
          // Check if this element is a certificate
          if (currentElement.classList && 
              ((currentElement.classList.contains('bg-tertiary') && 
                currentElement.classList.contains('p-5') && 
                currentElement.classList.contains('rounded-2xl')) || 
               currentElement.classList.contains('react-parallax-tilt'))) {
            isCertificate = true;
            break;
          }
          
          currentElement = currentElement.parentElement;
        }
        
        // Update cursor color based on whether it's over a certificate
        if (isCertificate && !isOverCertificate) {
          handleCertificateEnter();
        } else if (!isCertificate && isOverCertificate) {
          handleCertificateLeave();
        }
      }
    };
    
    // Certificate hover handlers
    const handleCertificateEnter = () => {
      isOverCertificate = true;
      
      // Change cursor color to black with smooth transition
      gsap.to(cursorRef.current, {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.6)",
        opacity: 1, // Ensure cursor remains visible
        duration: 0.3
      });
      
      gsap.to(cursorInnerRef.current, {
        backgroundColor: "#000000",
        opacity: 1, // Ensure inner cursor remains visible
        duration: 0.3
      });
      
      console.log('Certificate enter detected'); // Debug log
    };
    
    const handleCertificateLeave = () => {
      isOverCertificate = false;
      
      // Change cursor color back to purple with smooth transition
      gsap.to(cursorRef.current, {
        backgroundColor: "rgba(145, 94, 255, 0.2)",
        boxShadow: "0 0 15px 5px rgba(145, 94, 255, 0.6)",
        opacity: 1, // Ensure cursor remains visible
        duration: 0.3
      });
      
      gsap.to(cursorInnerRef.current, {
        backgroundColor: "#915EFF",
        opacity: 1, // Ensure inner cursor remains visible
        duration: 0.3
      });
      
      console.log('Certificate leave detected'); // Debug log
    };
    
    // Animation function for smooth cursor movement
    const render = () => {
      // Calculate smooth movement with easing
      cursor.x.current = lerp(cursor.x.current, cursor.x.target, 0.07);
      cursor.y.current = lerp(cursor.y.current, cursor.y.target, 0.07);
      
      // Update cursor position if ref is still available
      if (cursorRef.current) {
        gsap.set(cursorRef.current, { 
          x: cursor.x.current, 
          y: cursor.y.current 
        });
      }
      
      // Continue animation loop
      requestAnimationFrame(render);
    };
    
    // Helper function for linear interpolation (smooth movement)
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };
    
    // Start animation loop
    requestAnimationFrame(render);
    
    // Add event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);
    
    // Wait a moment for the DOM to be fully loaded before attaching event listeners
    setTimeout(() => {
      // Find all certificate elements and add hover event listeners
      // Using a more specific selector targeting the Tilt component in Certificates
      const certificateElements = document.querySelectorAll('.bg-tertiary.p-5.rounded-2xl');
      console.log('Found certificate elements:', certificateElements.length);
      
      certificateElements.forEach(element => {
        // Remove any existing listeners to prevent duplicates
        element.removeEventListener('mouseenter', handleCertificateEnter);
        element.removeEventListener('mouseleave', handleCertificateLeave);
        
        // Add new listeners
        element.addEventListener('mouseenter', handleCertificateEnter);
        element.addEventListener('mouseleave', handleCertificateLeave);
        console.log('Added listeners to certificate element');
      });
      
      // Also try to find the parent elements that might be capturing events
      const tiltElements = document.querySelectorAll('.react-parallax-tilt');
      console.log('Found tilt elements:', tiltElements.length);
      
      tiltElements.forEach(element => {
        element.addEventListener('mouseenter', handleCertificateEnter);
        element.addEventListener('mouseleave', handleCertificateLeave);
        console.log('Added listeners to tilt element');
      });
    }, 1000); // Wait 1 second for DOM to be ready
    
    // Add a mutation observer to handle dynamically added certificate elements
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              // Check if it's a certificate element or contains certificate elements
              if (node.classList && 
                  ((node.classList.contains('bg-tertiary') && 
                   node.classList.contains('p-5') && 
                   node.classList.contains('rounded-2xl')) ||
                   node.classList.contains('react-parallax-tilt'))) {
                node.addEventListener('mouseenter', handleCertificateEnter);
                node.addEventListener('mouseleave', handleCertificateLeave);
                console.log('Added listeners to dynamically added element');
              } else {
                // Look for certificate elements
                const certificates = node.querySelectorAll('.bg-tertiary.p-5.rounded-2xl, .react-parallax-tilt');
                certificates.forEach(cert => {
                  cert.addEventListener('mouseenter', handleCertificateEnter);
                  cert.addEventListener('mouseleave', handleCertificateLeave);
                  console.log('Added listeners to nested dynamic element');
                });
              }
            }
          });
        }
      });
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Remove event listeners from all certificate and tilt elements
      const certificateElements = document.querySelectorAll('.bg-tertiary.p-5.rounded-2xl');
      const tiltElements = document.querySelectorAll('.react-parallax-tilt');
      
      certificateElements.forEach(element => {
        element.removeEventListener('mouseenter', handleCertificateEnter);
        element.removeEventListener('mouseleave', handleCertificateLeave);
      });
      
      tiltElements.forEach(element => {
        element.removeEventListener('mouseenter', handleCertificateEnter);
        element.removeEventListener('mouseleave', handleCertificateLeave);
      });
      
      // Disconnect the observer
      observer.disconnect();
      
      console.log('Cleaned up all event listeners');
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="neon-cursor"
        style={{
          position: "fixed", 
          top: 0,
          left: 0,
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          backgroundColor: "rgba(145, 94, 255, 0.2)",
          boxShadow: "0 0 15px 5px rgba(145, 94, 255, 0.6)",
          pointerEvents: "none",
          zIndex: 10000, // Increased z-index to ensure it's on top
          // Removed mixBlendMode which can cause visibility issues
          filter: "blur(1px)",
          willChange: "transform",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "background-color 0.3s, box-shadow 0.3s" // Smooth transition for color changes
        }}
      >
        <div
          ref={cursorInnerRef}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#915EFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "background-color 0.3s" // Smooth transition for color changes
          }}
        />
      </div>
    </>
  );
};

export default NeonCursor;