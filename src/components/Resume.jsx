import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  const handleResumeOpen = () => {
    // Open resume in new tab
    window.open('/Priyobroto_Karmakar_Resume.pdf', '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.sectionSubText}>Professional Profile</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]"
      >
        My comprehensive resume showcasing my technical skills, work experience, 
        educational background, and professional achievements in software development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 sm:mt-16 flex flex-col items-center"
      >
        <div className="text-center max-w-2xl">
          <div className="bg-tertiary p-8 sm:p-12 rounded-2xl border border-[#915EFF]/20 shadow-lg">
            <div className="mb-6">
              <svg 
                className="w-16 h-16 mx-auto text-[#915EFF] mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <h3 className="text-white text-[24px] sm:text-[28px] font-bold mb-3">
                Priyobroto Karmakar
              </h3>
              <p className="text-secondary text-[16px] sm:text-[18px] mb-4">
                Software Developer & Problem Solver
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="text-left">
                <h4 className="text-white font-semibold text-[18px] mb-2">Key Skills</h4>
                <p className="text-secondary text-[14px] leading-relaxed">
                  React.js, Node.js, Three.js, TypeScript, JavaScript, MongoDB, 
                  Tailwind CSS, Git, Docker, and more...
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="text-white font-semibold text-[18px] mb-2">Experience</h4>
                <p className="text-secondary text-[14px] leading-relaxed">
                  Full-stack development, 3D web applications, responsive design, 
                  and cross-platform solutions...
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeOpen}
              className="bg-[#915EFF] hover:bg-[#7c4dff] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
              View Full Resume
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
