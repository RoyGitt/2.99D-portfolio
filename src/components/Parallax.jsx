import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Parallax = (props) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0", "80%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0", "50%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0", "250%"]);

  return (
    <section ref={ref} className="h-screen relative overflow-hidden bg-black">
      <motion.h1
        className="text-7xl sm:text-[7rem] text-bold leading-[90vh] text-center z-[3] capitalize drop-shadow-lg glow"
        style={{ y: ytext }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        {props.text}
      </motion.h1>
      <motion.div className="mountains bg-contain sm:bg-cover bg-no-repeat"></motion.div>
      <motion.div
        className="planets bg-contain sm:bg-cover bg-no-repeat"
        style={{ y: yPlanets }}
      ></motion.div>
      <motion.div
        className="stars bg-contain sm:bg-cover "
        style={{ x: yStars }}
      ></motion.div>
    </section>
  );
};

export default Parallax;
