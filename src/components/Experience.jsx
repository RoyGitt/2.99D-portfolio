import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AiOutlineLink } from "react-icons/ai";

import { experiences } from "../constants";

const ExperienceCard = ({
  experience: { title, points, icon, iconBg, company_name, date },
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold"> {title}</h3>
        <p className="text-[#c026d3] text-[16px] font-semibold">
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            <div className="flex items-center">
              {point.split("Link")[0]}
              {point.split("Link")[1] && (
                <a
                  className="ml-1 bg-white rounded-full p-1"
                  target="_blank"
                  href={point.split("Link")[1]}
                >
                  <AiOutlineLink size={20} color="#333" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
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
          className={`${styles.sectionSubText}`}
          variants={textVariants}
        >
          MY VERY SHORT JOURNEY
        </motion.p>
        <motion.h2
          className={`${styles.sectionHeadText}`}
          variants={textVariants}
        >
          {" "}
          Work Experience.
        </motion.h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={`experience ${index}`}
                experience={experience}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
