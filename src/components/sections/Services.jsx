import React from "react";
const features = [
  {
    id: 2,
    title: "Frontend development",
    desc: "I build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimization.I use modern tech such as Next Js (React.js), TailwindCSS.",
  },
  {
    id: 1,
    title: "Web development",
    desc: "I'm passionate about pixel-perfect implemented UX. I like to code things from scratch, and enjoy bringing ideas to life in the browser. I build things for the web , design and code beautifully simple things, and I love what I do.",
  },
  {
    id: 3,
    title: "Back End development",
    desc: "I build scalable and maintainable server applications using technologies such as Express and MongoDB",
  },
];
export default function Services() {
  return (
    <section
      id="services"
      className="select-none py-12 md:py-20 fle flex-col-reverse items-center md:flex-row container mx-auto text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {features.map((el) => (
          <div
            key={el.id}
            className={`p-8 ${
              el.id === 1
                ? "bg-primary text-black scale-95 md:scale-105"
                : "bg-[#303740] scale-95"
            }`}
          >
            <h2 className=" font-semibold text-2xl md:text-3xl capitalize">
              {`0${el.id}.`}
              <br />
              {el.title}
            </h2>
            <br />
            <p className="capitalize tracking-tight">{el.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
