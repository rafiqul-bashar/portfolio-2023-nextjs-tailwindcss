/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import useTypewriter from "react-use-typewriter";
import { motion } from "framer-motion";
export default function Landing() {
  const typewriter = useTypewriter({
    words: [
      "Web Developer",
      "MERN STACK ",
      "< ILOVETOCODE />",
      "React JS | Express Js",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div
      id="/"
      className="max-w-4xl py-12 md:py-32 items-center md:flex-row container mx-auto text-white px-6"
    >
      <motion.h3
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
        className="text-3xl md:text-7xl font-bold tracking-tight"
      >
        <br />
        <span className="text-primary"> Rafiqul Bashar</span>
      </motion.h3>
      <h2 className="text-xl md:text-4xl font-medium tracking-wider mt-2 text-slate-400">
        {typewriter}
        <span className="cursor text-primary">|</span>
      </h2>
      <br />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="tracking-tight"
      >
        I'm a web developer with a passion for coding. I'm proficient in React
        and have experience working with backend technologies such as Node.js,
        Express.js, and MongoDB.
        <br />
        <br />
        If you're looking to build a sleek website I'm ready to bring your
        vision to life. Let's collaborate !
      </motion.p>
      <Link href="/#projects">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="my-4 font-semibold bg-transparent px-4 py-2 text-lg rounded-sm hover:text-gray-900 relative border-2 hover:border-transparent  transition-colors duration-300 border-primary/60 text-gray-300 hover:bg-primary"
        >
          See My Works
        </motion.button>
      </Link>
    </div>
  );
}
