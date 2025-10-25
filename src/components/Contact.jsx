import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-16 bg-black text-white"
    >
      {/* ===== Heading ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-2"
      >
        ✉️ Contact
      </motion.h2>

      {/* ===== Grid Layout ===== */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* ===== Left: Info ===== */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Let’s Get in Touch!
          </h3>

          {/* Contact Number */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-4 flex items-center gap-4">
            <i className="fa-solid fa-phone text-emerald-400 text-xl"></i>
            <div>
              <p className="text-sm text-neutral-400">Contact No</p>
              <p className="font-medium text-white">+91 9792293607</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-4 flex items-center gap-4">
            <i className="fa-solid fa-envelope text-emerald-400 text-xl"></i>
            <div>
              <p className="text-sm text-neutral-400">Email</p>
              <p className="font-medium text-white">
                amir9425k@gmail.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-neutral-900 border border-white/10 rounded-lg p-4 flex items-center gap-4">
            <i className="fa-solid fa-location-dot text-emerald-400 text-xl"></i>
            <div>
              <p className="text-sm text-neutral-400">Address</p>
              <p className="font-medium text-white">
                 Delhi, India
              </p>
            </div>
          </div>
        </div>

        {/* ===== Right: Contact Form ===== */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 bg-neutral-900 border border-white/10 rounded-lg p-6"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
