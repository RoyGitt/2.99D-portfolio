import { styles } from "../styles";
import ComputerCanvas from "./canvas/ComputerCanvas";
import Typewriter from "typewriter-effect";

import { motion } from "framer-motion";

export const Background = () => {
  return (
    <div className="w-full h-full absolute top-0 z-[-1] blur-[5px] brightness-50	">
      <video
        src="/patterns.mp4"
        muted
        className="w-full h-full object-fill"
        loop
        autoPlay
      />
    </div>
  );
};

const Hero = () => {
  const textVariants = {
    initial: { x: -200, opacity: 0 },
    slideIn: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <section className="relative w-full h-screen mx-auto mt-10 	">
      <div
        className={`absolute inset-0 flex items-start justify-start ${styles.paddingX} max-w-[1440px] mx-auto py-20 px-4`}
      >
        <div className="flex flex-col items-center justify-center mr-5 px-4">
          <div className="w-3 h-3 rounded-full bg-purple-600" />
          <div className="w-1 h-80 violet-gradient" />
        </div>
        <motion.div variants={textVariants} initial="initial" animate="slideIn">
          <motion.h1
            variants={textVariants}
            className="font-thin lg:text-[7rem] text-5xl  mb-4 flex gap-5"
          >
            <div>Hi, I'm</div>
            <motion.div>Roy</motion.div>
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="glitch sm:text-7xl text-4xl leading-relaxed mt-10"
            data-text="THINK. DECIPHER. FORGE."
          >
            THINK. DECIPHER. FORGE.
          </motion.div>
        </motion.div>
      </div>
      <ComputerCanvas />
      <div className="absolute bottom-20 w-full">
        <a href="#about">
          <div className="w-[35px] h-[64px] mx-auto  rounded-3xl border-4 border-white flex p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-white
            "
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
