import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div className="mb-10">
        <p className={`${styles.sectionSubText}`}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      </motion.div>
      <div className="sm:flex flex-wrap grid grid-cols-3 justify-center items-center gap-10">
        {technologies.map((technology, index) => {
          return (
            <div
              className="sm:w-28 sm:h-28 w-full h-full flex justify-center items-center"
              key={technology.name}
            >
              <img
                src={technology.icon}
                name={technology.name}
                className="icon-shadow w-20 h-20 p-2 bg-white rounded-full"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
