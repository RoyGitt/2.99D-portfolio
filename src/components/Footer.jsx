import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [emoji, setEmoji] = useState("😔");

  return (
    <footer>
      <p className="text-center p-6 bg-black text-2xl flex gap-3 justify-center items-center">
        No rights Reserved.{" "}
        <motion.div
          className="text-5xl"
          whileHover={{ rotate: "360deg" }}
          onMouseEnter={() => {
            setEmoji("😁");
          }}
          onMouseLeave={() => {
            setEmoji("😢");
          }}
        >
          {emoji}
        </motion.div>
      </p>
    </footer>
  );
};

export default Footer;
