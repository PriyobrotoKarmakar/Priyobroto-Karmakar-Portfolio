import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  deployed_link,
  source_code_link,
}) => {
  const tiltRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Tilt
        ref={tiltRef}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={450}
        tiltReverse={false}
        perspective={800}
        gyroscope={true}
        className='bg-tertiary p-4 sm:p-5 rounded-2xl w-[320px] sm:w-[350px]'
        onTiltChange={(angles) => {
          const card = tiltRef.current;
          if (!card) return;
          
          const { tiltAngleX, tiltAngleY } = angles;
          const borderWidth = "2px";
          
          // Reset all borders
          card.style.borderTop = `${borderWidth} solid transparent`;
          card.style.borderBottom = `${borderWidth} solid transparent`;
          card.style.borderLeft = `${borderWidth} solid transparent`;
          card.style.borderRight = `${borderWidth} solid transparent`;
          
          // Set glowing borders based on tilt direction
          if (tiltAngleY > 3) {
            card.style.borderLeft = `${borderWidth} solid rgba(0, 204, 255, 0.7)`;
          } else if (tiltAngleY < -3) {
            card.style.borderRight = `${borderWidth} solid rgba(0, 204, 255, 0.7)`;
          }
          
          if (tiltAngleX > 3) {
            card.style.borderTop = `${borderWidth} solid rgba(0, 204, 255, 0.7)`;
          } else if (tiltAngleX < -3) {
            card.style.borderBottom = `${borderWidth} solid rgba(0, 204, 255, 0.7)`;
          }
        }}
      >
        <div className='relative w-full h-[200px] sm:h-[230px]' style={{ transform: "translateZ(60px)" }}>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover' style={{ transform: "translateZ(75px)" }}>
            <div
              onClick={() => window.open(deployed_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="white" 
                className='w-1/2 h-1/2 object-contain'
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-4 sm:mt-5' style={{ transform: "translateZ(40px)" }}>
          <h3 className='text-white font-bold text-[20px] sm:text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px] sm:text-[14px]'>{description}</p>
        </div>

        <div className='mt-3 sm:mt-4 flex flex-wrap gap-2' style={{ transform: "translateZ(25px)" }}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-10 sm:mt-20 flex flex-wrap justify-center gap-5 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
