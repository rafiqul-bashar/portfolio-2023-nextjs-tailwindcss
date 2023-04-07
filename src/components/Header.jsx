import Link from "next/link";
import React, { useEffect } from "react";
import { RiBarChartLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { motion } from "framer-motion";
const links = [
  { url: "/", link: "home" },
  { url: "/#about", link: "about" },
  { url: "/#projects", link: "projects" },
  { url: "/#contact", link: "contact" },
];

export default function Header({ menuOpen, switchMenu }) {
  return (
    <header className="select-none px-4 md:px-4 bg-[#23252D] text-white  dark:text-primary ">
      <div className="container flex  items-center justify-between  text-md  mx-auto h-[12vh]">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-fit"
          >
            <Image
              width={120}
              height={120}
              src="/logo.png"
              alt="logo"
              className="hover:scale-95  transition-all ease-out duration-200"
            />
          </motion.div>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {/* links in desktop */}
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={styles.desktoplink}
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            className={styles.desktoplink}
          >
            <Link href="/#about">About</Link>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            className={styles.desktoplink}
          >
            <Link href="/#projects">Projects</Link>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.3 }}
            className={styles.desktoplink}
          >
            <Link href="/#contact">Contact</Link>
          </motion.li>
          {/* {links.map((el) => (
            <li key={el.link} className={styles.desktoplink}>
              <Link href={el.url}>
                <span className="italic text-primary">{"/_ "}</span>
                {el.link}
              </Link>
            </li>
          ))} */}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <motion.button
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
            className="self-center px-8 py-2 font-semibold rounded bg-primary text-gray-900 hover:scale-95 transition-all duration-150 ease-in-out"
          >
            Resume
          </motion.button>
        </div>

        {/*  Menu Icon Here */}
        <button
          onClick={switchMenu}
          className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-primary cursor-pointer overflow-hidden group"
        >
          <span className="w-full bg-primary inline-flex transform group-hover:translate-x-2 h-[2px] transition-all ease-in-out duration-300"></span>
          <span className="w-full bg-primary inline-flex transform translate-x-3 group-hover:translate-x-0 h-[2px] transition-all ease-in-out duration-300"></span>
          <span className="w-full bg-primary inline-flex transform group-hover:translate-x-1 h-[2px] transition-all ease-in-out duration-300"></span>
        </button>
      </div>
      {/* mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="z-10 bg-black/60 w-screen h-screen fixed right-0 top-0 "
        >
          <div className={" w-3/5 h-full  bg-[#1A181C] ml-auto relative  p-3"}>
            <button onClick={switchMenu} className="p-4 absolute right-0">
              <CgClose className="rotate-270 text-4xl focus:scale-95 transition-all duration-150 ease-linear" />
            </button>
            <ul className={"items-stretch space-y-8  top-24 absolute "}>
              <motion.li
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onClick={switchMenu}
                className={styles.mobilelink}
              >
                <Link href="/">
                  <span className="italic text-primary">{"/_ "}</span>
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={switchMenu}
                className={styles.mobilelink}
              >
                <Link href="/#about">
                  <span className="italic text-primary">{"/_ "}</span>
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={switchMenu}
                className={styles.mobilelink}
              >
                <Link href="/#about">
                  <span className="italic text-primary">{"/_ "}</span>
                  Projects
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                onClick={switchMenu}
                className={styles.mobilelink}
              >
                <Link href="/#about">
                  <span className="italic text-primary">{"/_ "}</span>
                  Contact
                </Link>
              </motion.li>
              {/* {links.map((el,i) => (
                <motion.li
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={switchMenu}
                  key={el.link}
                  className={styles.mobilelink}
                >
                  <Link href={el.url}>
                    <span className="italic text-primary">{"/_ "}</span>
                    {el.link}
                  </Link>
                </motion.li>
              ))} */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="self-center px-8 py-2 font-semibold rounded bg-primary text-gray-900 hover:scale-95 transition-all duration-150 ease-in-out"
              >
                Resume
              </motion.button>
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex items-center justify-center w-full absolute bottom-16"
            >
              <Image width={120} height={120} src="/logo.png" alt="logo" />
            </motion.div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col-reverse absolute bottom-4"
            >
              <p className="text-white">
                {" "}
                Design & Built by ©{" "}
                <span className="text-primary"> Rafiqul Bashar</span> — 2023
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

let styles = {};
styles.mobilelink =
  "cursor-pointer border-b-[2px] border-transparent dark:text-white font-semibold tracking-wider hover:border-primary capitalize hover:text-primary ease-linear transition-all ml-4 ";
styles.desktoplink =
  "cursor-pointer px-4  dark:text-gray-300 relative font-bold tracking-[1px] capitalize hover:scale-105 transition-all duration-300 hover:text-primary before:content-['//'] before:italic before:px-2 before:text-primary  after:content-[''] after:bg-primary after:h-[3px] after:w-[0%] after:-bottom-[5px] after:left-3 after:rounded-md after:absolute after:duration-300 hover:after:w-[90%]";
