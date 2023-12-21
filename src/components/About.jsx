import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    const defaultOptions = {
      reverse: false, // reverse the tilt direction
      max: 35, // max tilt rotation (degrees)
      perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
      scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
      speed: 1000, // Speed of the enter/exit transition
      transition: true, // Set a transition on enter/exit.
      axis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };

    return (
      <Tilt className="xs:w-[250px] min-h-[280px] w-full">
        <motion.div className="w-full h-full green-pink-gradient rounded-[20px] p-[1px]">
          <div
            options={defaultOptions}
            className=" w-full h-full flex flex-col justify-evenly items-center rounded-[20px] py-5 px-12 bg-tertiary  "
          >
            <img src={icon} alt={`${title} icon`} className="w-16 h-16" />
            <h3 className="text-white text-[20px] fonts-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[24px] max-w-[1440px] leading-[40px] 
      "
      >
        Hey, I'm Arannyak Roy, I have de­veloped expe­rtise in creating
        compelling and inte­ractive web applications using React and Ne­xt.js.
        Through my experience­s, I have refined my skills to build imme­rsive
        user expe­riences that captivate use­rs and deliver results. With my
        expertise­, I confidently ensure custome­r satisfaction and leave an
        indelible­ I am see­king a dynamic and collaborative work environment
        that value­s speed and efficie­ncy. My goal is to contribute my skills
        and expertise­ to drive success in the te­am.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
