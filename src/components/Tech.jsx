import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  const textVariants = {
    initial: { x: -20, opacity: 0 },
    slideInText: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    initial: { opacity: 0, y: -10 },
    zoomInOut: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <motion.div
        className="mb-10"
        variants={textVariants}
        initial="initial"
        whileInView="slideInText"
      >
        <motion.p
          className={`${styles.sectionSubText}`}
          variants={textVariants}
        >
          WHAT I HAVE LEARNT SO FAR
        </motion.p>
        <motion.h2
          className={`${styles.sectionHeadText}`}
          variants={textVariants}
        >
          Skills
        </motion.h2>
      </motion.div>
      <motion.div
        className="sm:flex flex-wrap grid grid-cols-3 justify-center items-center gap-10"
        variants={skillVariants}
        initial="initial"
        whileInView="zoomInOut"
      >
        {technologies.map((technology, index) => {
          return (
            <motion.div
              className="sm:w-28 sm:h-28 w-full h-full flex justify-center items-center"
              key={technology.name}
              variants={skillVariants}
            >
              <motion.img
                variants={skillVariants}
                src={technology.icon}
                name={technology.name}
                className="icon-shadow w-20 h-20 p-2 bg-white rounded-full"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
