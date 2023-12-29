import { useEffect, useState } from "react";
import { logo, menu, close } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [widthX, setWidthX] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window, removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 500) {
      setWidthX(true);
    } else {
      setWidthX(false);
    }
  }, [scrollPosition]);

  return (
    <header className="fixed top-0 bg-black w-full z-50 py-[0.2rem] sm:px-4 px-0">
      <motion.nav
        animate={{
          maxWidth: widthX ? "1280px" : "1440px",
        }}
        className="sm:flex hidden py-3 items-center justify-between mx-auto max-w-[1440px]"
      >
        <div className="w-[40px] mr-4">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            className="w-full h-full object-cover"
            src={logo}
            alt="Developer's profile picture"
          />
        </div>
        <h1 className="flex mr-auto font-bold tracking-[3px] gap-2">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Roy
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            |
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Arannyak
          </motion.div>
        </h1>
        <motion.ul
          className="flex gap-8 font-medium"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.li whileTap={{ scale: 0.9 }}>
            <a href="#about">About</a>
          </motion.li>

          <motion.li whileTap={{ scale: 0.9 }}>
            <a href="#works">Works</a>
          </motion.li>

          <motion.li whileTap={{ scale: 0.9 }}>
            <a href={`#contact`}>Contact</a>
          </motion.li>
        </motion.ul>
      </motion.nav>
      <nav className="sm:hidden flex bg-black  py-3 px-6 items-center justify-between">
        <div className="w-[45px] mr-4">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="Developer's profile picture"
          />
        </div>
        <h1 className="mr-auto font-medium">Roy | Arannyak</h1>
        <motion.div>
          {toggle ? (
            <motion.img
              src={close}
              alt="menu-icon"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="cursor-pointer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />
          ) : (
            <motion.img
              src={menu}
              alt="menu-icon"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="cursor-pointer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />
          )}
        </motion.div>
        <AnimatePresence>
          {toggle && (
            <motion.ul
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute w-2/4 rounded-lg shadow-lg top-20 right-5 px-2 py-4 bg-[rgba(255,255,255,0.2)] text-white  flex flex-col gap-5 backdrop-blur-[4px]"
            >
              <motion.li whileTap={{ scale: 0.9 }}>
                <a href="#about">About</a>
              </motion.li>

              <motion.li whileTap={{ scale: 0.9 }}>
                <a href="#works">Works</a>
              </motion.li>

              <motion.li whileTap={{ scale: 0.9 }}>
                <a href={`#contact`}>Contact</a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
