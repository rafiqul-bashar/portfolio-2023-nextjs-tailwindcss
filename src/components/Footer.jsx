import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#23252D] text-white body-font ">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col-reverse">
        <a className="flex title-font font-medium items-center md:justify-start justify-center ">
          <span className="ml-3 text-lg">Personal Portfolio</span>
        </a>
        <p className="text-lg sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Design & Built by © Rafiqul Bashar — 2023
        </p>
      </div>
    </footer>
  );
}
