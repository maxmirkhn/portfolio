import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Sidebar() {
  return (
    <div className="rounded-2xl bg-neutral-900 border border-white/10 p-6 flex flex-col items-center text-center space-y-6 shadow-lg">
      
      {/* ===== Avatar with initials ===== */}
      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-black font-extrabold text-3xl shadow-md">
        MAK
      </div>

      {/* ===== Name & Role ===== */}
      <div>
        <h1 className="text-xl font-semibold text-white tracking-wide">
          Mohd Amir Khan
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          MERN & Spring Boot Developer
        </p>
      </div>

      {/* ===== Available for work Badge ===== */}
      <div className="flex items-center justify-center gap-2 bg-neutral-800 px-4 py-1 rounded-full border border-emerald-500/40">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm text-neutral-300">Available for work</span>
      </div>

      {/* ===== Social / Contact Buttons (Now Centered Row) ===== */}
      <div className="flex flex-wrap justify-center gap-3 w-full">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=amir9425k@gmail.com&su=Hello%20Amir!&body=I%20saw%20your%20portfolio%20and%20want%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 bg-neutral-800 hover:bg-emerald-600/30 border border-white/10 rounded-lg py-2 text-sm text-neutral-300 transition"
        >
          <i className="fa-solid fa-envelope text-emerald-400"></i>
          Email
        </a>

        <a
          href="https://github.com/maxmirkhn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-lg py-2 text-sm text-neutral-300 transition"
        >
          <i className="fa-brands fa-github text-white"></i>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohd-amir-khan-418412359/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 bg-neutral-800 hover:bg-[#0077b5]/30 border border-white/10 rounded-lg py-2 text-sm text-neutral-300 transition"
        >
          <i className="fa-brands fa-linkedin text-[#0077b5]"></i>
          LinkedIn
        </a>
      </div>

      {/* ===== Contact Button ===== */}
      <a
        href="mailto:amir9425k@gmail.com"
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium w-full py-2 rounded-lg mt-2 transition duration-200"
      >
        Get in touch
      </a>
    </div>
  );
}
