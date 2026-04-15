import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center pt-20 pb-20"
    >
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1]">
        I’m <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">Mohd Amir Khan</span>, <br />
        <span className="text-white/90">Full-Stack Engineer</span>
      </h1>

      <p className="mt-8 text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
        I build modern, responsive, and scalable web applications. My main focus
        is on the MERN Stack (MongoDB, Express, React, Node.js). I’m also learning
        Spring Boot and MySQL to strengthen my backend knowledge.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
        >
          View My Work
        </a>
        <a href="#contact" className="px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
          Let's Talk
        </a>
      </div>
    </motion.section>
  );
}
