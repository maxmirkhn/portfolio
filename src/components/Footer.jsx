// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 rounded-2xl bg-neutral-950 border border-white/10 p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400">
          © {year} Mohd Amir Khan. All rights reserved.
        </p>

        <nav className="flex items-center gap-5 text-sm">
          <a href="#projects" className="text-neutral-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-neutral-300 hover:text-white">Contact</a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            className="text-neutral-300 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            className="text-neutral-300 hover:text-white"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
