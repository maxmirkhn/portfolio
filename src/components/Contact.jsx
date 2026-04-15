import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        Get in touch
      </motion.h2>
      <div className="w-24 h-1.5 bg-emerald-500 mx-auto mb-16 rounded-full"></div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Info */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-black leading-tight text-white">
            Ready to start <br/> your next project?
          </h3>
          <p className="text-neutral-400 text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Contact Number Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex items-center gap-6 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 text-xl">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Call</p>
              <p className="text-lg font-bold text-white">+91 9792293607</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex items-center gap-6 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 text-xl">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Email</p>
              <p className="text-lg font-bold text-white leading-none">
                amir9425k@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          className="space-y-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-base text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:bg-white/10 outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-base text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:bg-white/10 outline-none transition-all"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your message here..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-base text-white placeholder-neutral-500 focus:border-emerald-500/50 focus:bg-white/10 outline-none resize-none transition-all"
          ></textarea>

          <button
            type="submit"
            className="w-full py-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
