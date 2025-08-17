import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const CertificateCard = ({ index, title, image, organization, date, link }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      tiltMaxAngleX={ 15 }
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={450}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div 
        className="relative w-full h-[230px] cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-1/2 h-1/2 object-contain"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-secondary text-[14px]">{organization}</p>
          <p className="text-secondary text-[14px] italic">{date}</p>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Certificates = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've completed various courses and certifications to enhance my skills and knowledge.
          These certificates showcase my commitment to continuous learning and professional development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </motion.div>
  );
};

// Using direct export instead of SectionWrapper to avoid the section animations while keeping the component animations
export default Certificates;