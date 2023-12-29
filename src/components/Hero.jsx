import { styles } from "../styles";
import ComputerCanvas from "./canvas/ComputerCanvas";

import { AnimatePresence, motion } from "framer-motion";

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
    <>
      <section className="relative w-full h-screen mx-auto mt-10 	">
        <div
          className={`absolute inset-0 flex items-start justify-start ${styles.paddingX} max-w-[1440px] mx-auto py-20 px-4`}
        >
          <div className="flex flex-col items-center justify-center mr-5 px-4">
            <div className="w-3 h-3 rounded-full bg-[#c026d3]" />
            <div className="w-1 h-80 purple-gradient" />
          </div>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="slideIn"
          >
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
        <div className="absolute left-[46%] bottom-[10rem] translate-x-[-51%] translate-y-[-50%] sm:hidden">
          <div className="w-7 h-12 border-2 border-white rounded-xl absolute flex items-start p-2 justify-center">
            <motion.div
              animate={{
                y: [0, 13, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-white rounded-full absolute"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
