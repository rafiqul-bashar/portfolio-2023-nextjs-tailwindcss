import Link from "next/link";
import React from "react";

export default function ProjectShowcase({ project }) {
  const { title, image, technologies, link, description } = project;
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 ">
      <Link href={link} target="_blank">
        <img
          src={image}
          alt={title}
          className=" mx-auto  object-contain  h-full md:col-span-1 "
        />
      </Link>
      <div className="flex flex-col md:col-span-2 gap-4 ">
        <Link href={link} target="_blank">
          <h2 className="text-2xl font-medium">{title}</h2>
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2  ">
          {technologies?.map((el, i) => (
            <h2
              key={i}
              className="px-3 py-1 border-primary border text-center text-sm"
            >
              {el}
            </h2>
          ))}
        </div>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}
