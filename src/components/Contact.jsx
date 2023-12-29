import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 4000);
  }, [success, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your own template ID and service ID from EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Use your own user ID from EmailJS
    emailjs
      .send(
        "service_5gtv6h2",
        "template_wpsyaab",
        templateParams,
        "AGzhbfZtdZ8FnzWiq"
      )
      .then((response) => {
        setSuccess(`Email sent successfully`);
      })
      .catch((error) => {
        setError(`Error sending email`);
      });

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  console.log(formData);

  return (
    <section className=" flex sm:flex-row relative justify-around flex-col  gap-10">
      <motion.div
        className="sm:flex-[0.8] flex-1 bg-black p-8 rounded-2xl  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div></div>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 w-full transition-all"
        >
          {success && (
            <motion.h2
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="glow text-2xl"
            >
              {success}
            </motion.h2>
          )}
          {error && <h2 className="glow text-2xl">{error}</h2>}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="What's your good name?"
              className=" py-4 px-4 rounded-md placeholder:text-secondary text-white rounded-;g outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Address</span>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              placeholder="What's your web address?"
              className="py-4 px-4 placeholder:text-secondary rounded-md text-white rounded-;g outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="What you want to say?"
              className="resize-none  py-4 px-4 placeholder:text-secondary rounded-md text-white rounded-;g outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-black-50 py-3 px-8 rounded-xl outline-none w0fit text-white font-bold shadow-sm shadow-white "
          >
            Send
          </button>
        </form>
      </motion.div>
      <div className="flex sm:items-center justify-center">
        <ul className="flex sm:flex-col flex-row justify-between gap-10">
          <motion.li whileHover={{ rotate: "360deg", scale: 1.1 }}>
            <a
              href="https://github.com/"
              target="_blank"
              className="text-[3rem]"
            >
              <FaGithub />
            </a>
          </motion.li>
          <motion.li whileHover={{ rotate: "360deg", scale: 1.1 }}>
            <a
              href="https://www.linkedin.com/in/arannyak-roy-418397237/"
              target="_blank"
              className="text-[3rem]"
            >
              <FaLinkedin />
            </a>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
