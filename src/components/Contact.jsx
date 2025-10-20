import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        📬 Get in Touch
      </motion.h2>

      <p className="mt-3 text-neutral-400 text-center max-w-2xl mx-auto">
        Interested in working together or have a question? Feel free to reach out to me
        directly or connect through any of my social platforms.
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Email button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:amir9425k@gmail.com"
          className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-medium"
        >
          ✉️ Email Me
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://linkedin.com/in/maxmirkhn"
          target="_blank"
          className="rounded-xl border border-emerald-500 px-8 py-4 font-medium hover:bg-emerald-500/10"
        >
          💼 LinkedIn
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/amirkhxn"
          target="_blank"
          className="rounded-xl border border-emerald-500 px-8 py-4 font-medium hover:bg-emerald-500/10"
        >
          🌐 GitHub
        </motion.a>
      </div>

      <div className="mt-16 text-center text-neutral-500 text-sm">
        <p>Made with ❤️ using React, Tailwind & Framer Motion</p>
        <p className="mt-1">© {new Date().getFullYear()} Mohd Amir Khan. All rights reserved.</p>
      </div>
    </section>
  );
}
