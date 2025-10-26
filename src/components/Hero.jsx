import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="rounded-2xl bg-neutral-900 border border-white/10 p-8 md:p-10"
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        I’m <span className="text-emerald-400">Mohd Amir Khan</span>, <br />
        <span className="text-emerald-400">Full-Stack Engineer</span>
      </h1>

      <p className="mt-4 text-neutral-300 text-base md:text-lg max-w-3xl leading-relaxed">
        I build modern, responsive, and scalable web applications. My main focus
        is on the MERN Stack (MongoDB, Express, React, Node.js). I’m also learning
        Spring Boot and MySQL to strengthen my backend knowledge.
      </p>
    </motion.section>
  );
}
