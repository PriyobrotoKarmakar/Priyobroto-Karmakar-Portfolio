import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const CertificateCard = ({ index, title, image, organization, date, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
  >
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
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792c4.018 4.018 0 0 1-.128-1.287z" />
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
  console.log('Certificates component rendered');
  console.log('Certificates data:', certificates);
  console.log('Certificates length:', certificates.length);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've completed various courses and certifications to enhance my skills and knowledge.
          These certificates showcase my commitment to continuous learning and professional development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certificates && certificates.length > 0 ? (
          certificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
          ))
        ) : (
          <div className="text-white text-center">
            <p>No certificates found</p>
            <p>Certificates length: {certificates?.length || 0}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");