import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[240px] sm:w-[260px]">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />

        <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]"
      >
        I`m a passionate software developer with expertise in C++, Python, Java,
        and JavaScript, and hands-on experience with modern frameworks like
        React.js, Flask, and the MERN stack. Skilled in building full-stack web
        applications, AI-powered platforms, and scalable solutions deployed on
        cloud services such as AWS and Vercel. I enjoy solving complex problems,
        optimizing performance, and designing responsive, user-friendly
        interfaces. A quick learner and strong collaborator, I thrive on turning
        ideas into impactful, real-world projects.
      </motion.p>

      <div className="mt-10 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
