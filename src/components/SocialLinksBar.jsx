import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
export default function SocialLinksBar() {
  return (
    <div className="flex  w-full flex-col items-center justify-center gap-4 text-gray-300 text-4xl rounded-full ">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.2 }}
        className={styles.link}
      >
        <a
          href="https://github.com/rafiqul-bashar"
          target="_blank"
          rel="noreferrer"
        >
          <span className="hover:text-primary cursor-pointer hover:translate-y-2 transition-all duration-300">
            <FaGithub />
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className={styles.link}
      >
        <a
          href="https://github.com/rafiqul-bashar"
          target="_blank"
          rel="noreferrer"
        >
          <span className="w-10 h-10  bg-gray-800 hover:text-primary cursor-pointer hover:translate-y-2 transition-all duration-300">
            <FaFacebook />
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.2 }}
        className={styles.link}
      >
        <a
          href="https://github.com/rafiqul-bashar"
          target="_blank"
          rel="noreferrer"
        >
          <span className="w-10 h-10  bg-gray-800 hover:text-primary cursor-pointer hover:translate-y-2 transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
      </motion.div>
      {/* bar line */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="w-[2px] h-[30vh]  bg-primary"
      />
    </div>
  );
}
let styles = {};
styles.link =
  "flex flex-col gap-3 border-2 border-primary/60 hover:border-primary/20 rounded-full p-2 transition-all duration-300 cursor-pointer";
