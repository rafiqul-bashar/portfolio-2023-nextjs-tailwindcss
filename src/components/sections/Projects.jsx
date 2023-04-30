import { projects } from "../../projectsData";
import React from "react";
import { ProjectShowcase } from "..";

export default function Projects() {
  return (
    <section
      id="projects"
      className="my-12 md:my-16  flex flex-col-reverse items-center md:flex-row container mx-auto text-white"
    >
      {" "}
      <div className="p-4 space-y-8">
        {projects?.map((el, i) => (
          <ProjectShowcase key={i} project={el} />
        ))}
      </div>
    </section>
  );
}
