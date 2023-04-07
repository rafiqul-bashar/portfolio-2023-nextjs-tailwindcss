"use client";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Footer, Header, Landing, SocialLinksBar } from "@/components";
import { useState } from "react";
import { motion } from "framer-motion";
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Services = dynamic(() => import("@/components/sections/Services"));

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const switchMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <title>Rafiqul Bashar - Web Developer | Full Stack </title>
        <meta
          name="description"
          content="Rafiqul Bashar is a full stack web developer form Bangladesh"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuOpen={menuOpen} switchMenu={switchMenu} />
      <main
        className={`homepage font-mono w-full h-[88vh] text-white overflow-x-hidden overflow-y-auto md:flex items-center gap-20 justify-between  ${
          menuOpen ? "opacity-80 overflow-y-hidden relative" : ""
        }`}
      >
        <div className="hidden md:inline-flex fixed bottom-0 left-0 w-32 h-[88vh] ">
          <SocialLinksBar />
        </div>
        <div className=" h-[88vh] ml-auto ">
          <Landing />
          <Services />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
}
