// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 rounded-[2.5rem] bg-neutral-950 border border-white/10 p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base text-neutral-400">
          © {year} Mohd Amir Khan. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 text-base">
          <a href="#projects" className="text-neutral-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
          <a
            href="https://github.com/maxmirkhn"
            target="_blank"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-amir-khan-418412359/"
            target="_blank"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
