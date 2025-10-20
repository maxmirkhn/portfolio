import React from "react";

const Hero = () => (
  <section className="rounded-2xl bg-neutral-900 border border-white/10 p-7 md:p-10">
    <p className="text-sm text-neutral-400">👋 Say Hello</p>
    <h2 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
      I’m <span className="whitespace-nowrap">Mohd Amir Khan,</span><br />
      <span className="text-emerald-400 underline underline-offset-4 decoration-emerald-500/30">
        Full-Stack Engineer
      </span>
      <br />Based in India
    </h2>

    <p className="mt-6 text-neutral-300 leading-relaxed max-w-3xl">
      I build modern, responsive, and scalable web applications. My main focus is on the MERN Stack (MongoDB, Express, React, Node.js) for full-stack development.
      I’m also learning Spring Boot and MySQL to strengthen my backend knowledge.
    </p>
  </section>
);
export default Hero;