import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { SiGithub, SiNetlify } from "react-icons/si";

const cardVariants = {
  initial: { x: -200, opacity: 0 },
  slideRight: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProjectCard = ({
  image,
  name,
  description,
  tags,
  type,
  sourceCode,
  link,
}) => {
  return (
    <motion.div variants={cardVariants}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-black shadow-small  p-5 rounded-2xl sm:w-[360px] w-full min-h-[28rem] "
      >
        <div className="relative w-full mb-5 h-[190px] ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full  object-content rounded-2xl"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-bold text-[24px] mb-1">{name}</h3>
            <div className=" flex gap-5">
              <a href={link} target="_blank" className="pointer">
                <SiNetlify size={25} />
              </a>
              {sourceCode && (
                <a href={sourceCode} target="_blank" className="pointer">
                  <SiGithub size={25} />
                </a>
              )}
            </div>
          </div>
          <h4 className="text-[#ccc] italic">{type}</h4>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
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

  return (
    <>
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="slideInText"
      >
        <motion.p
          variants={textVariants}
          className={`${styles.sectionSubText}`}
        >
          Some of my works
        </motion.p>
        <motion.h2
          variants={textVariants}
          className={`${styles.sectionHeadText}`}
        >
          Projects
        </motion.h2>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-wrap gap-7"
        variants={cardVariants}
        initial="initial"
        whileInView="slideRight"
      >
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </motion.div>
      <h2 className="text-center mt-20 font-bold text-slate-300">
        For legal reasons some repos are private 🌚
      </h2>
    </>
  );
};

export default SectionWrapper(Work, "works");
