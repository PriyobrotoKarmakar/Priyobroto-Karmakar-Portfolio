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
  source_code_link,
}) => {
  const tiltRef = useRef(null);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        ref={tiltRef}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={450}
        tiltReverse={false}
        perspective={800}
        gyroscope={true}
        className='bg-tertiary p-4 sm:p-5 rounded-2xl sm:w-[360px] w-full'
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
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-10 sm:mt-20 flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
