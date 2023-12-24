import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const submitHandler = (e) => {};

  const socialVariants = {
    
  };

  return (
    <section className=" flex sm:flex-row flex-col  gap-10">
      <motion.div
        className="flex-[1] bg-black-100 p-8 rounded-2xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={submitHandler}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-;g outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-;g outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="resize-none bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-;g outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w0fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <div className="flex sm:items-center justify-center">
        <ul className="flex sm:flex-col flex-row justify-between gap-10">
          <motion.li whileHover={{ rotate: "360deg", scale: 1.1 }}>
            <a href="#" className="text-[3rem]">
              <FaGithub />
            </a>
          </motion.li>
          <motion.li whileHover={{ rotate: "360deg", scale: 1.1 }}>
            <a href="#" className="text-[3rem]">
              <FaLinkedin />
            </a>
          </motion.li>
          <motion.li whileHover={{ rotate: "360deg", scale: 1.1 }}>
            <a href="#" className="text-[3rem]">
              <FaTwitter />
            </a>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
