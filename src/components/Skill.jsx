import { motion } from "framer-motion";

const skills = [
  // ---------- Frontend ----------
  {
    icon: "🧱",
    title: "HTML",
    note: "Structure of web pages and semantic markup for better accessibility.",
    tag: "Frontend",
  },
  {
    icon: "🎨",
    title: "CSS",
    note: "Styling, responsive layouts, and animations for modern web UIs.",
    tag: "Frontend",
  },
  {
    icon: "⚡",
    title: "JavaScript",
    note: "Core language for interactivity, DOM manipulation, and logic.",
    tag: "Frontend",
  },
  {
    icon: "⚛️",
    title: "React.js",
    note: "Building component-based, dynamic single-page applications.",
    tag: "Frontend",
  },
  {
    icon: "🌈",
    title: "Tailwind CSS",
    note: "Utility-first CSS framework for fast and responsive design.",
    tag: "Frontend",
  },

  // ---------- Backend ----------
  {
    icon: "🟩",
    title: "Node.js",
    note: "Server-side JavaScript for scalable and asynchronous APIs.",
    tag: "Backend",
  },
  {
    icon: "🚂",
    title: "Express.js",
    note: "Lightweight framework for building REST APIs efficiently.",
    tag: "Backend",
  },
  {
    icon: "☕",
    title: "Spring Boot",
    note: "Java-based framework for developing enterprise-grade APIs.",
    tag: "Backend",
  },

  // ---------- Database ----------
  {
    icon: "🍃",
    title: "MongoDB + Mongoose",
    note: "NoSQL database for storing flexible and JSON-like data.",
    tag: "Database",
  },
  {
    icon: "🧩",
    title: "MySQL",
    note: "Relational database management with structured schema.",
    tag: "Database",
  },

  // ---------- Tools & Other ----------
  {
    icon: "🔧",
    title: "Git & GitHub",
    note: "Version control and collaborative code management.",
    tag: "Tool",
  },
  {
    icon: "🧪",
    title: "Postman",
    note: "Testing APIs and managing backend endpoints easily.",
    tag: "Tool",
  },
  {
    icon: "☕",
    title: "Java",
    note: "Object-oriented programming and backend development.",
    tag: "Language",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 md:px-16 py-20 text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold flex items-center gap-2"
      >
        🧰 Skills & Tools
      </motion.h2>

      {/* Sub Caption */}
      <p className="mt-2 text-neutral-400 max-w-2xl">
        Focused on creating responsive frontends, scalable backends, and reliable databases — backed by modern tools.
      </p>

      {/* Cards */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-emerald-500/40 transition-all p-5 flex items-start gap-4"
          >
            <div className="text-2xl shrink-0">{s.icon}</div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{s.title}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 uppercase tracking-wide">
                  {s.tag}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400">{s.note}</p>

              {/* progress bar animation */}
              <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-emerald-500/70 group-hover:w-[88%] transition-[width] duration-500"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
