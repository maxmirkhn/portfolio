import { motion } from "framer-motion";

const projects = [
  {
    title: "ImageResizo",
    live: "https://imageresizo.com",
    github: "https://github.com/DroidNova/Image-Tools",
    desc: "Privacy-first image processing tool that runs entirely in the browser. No uploads, fast performance, and precise compression.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    features: [
      "Client-side image processing (Canvas API)",
      "Resize, compress & convert images",
      "Exact file size targeting (50KB, 100KB)",
      "Fast and SEO-optimized UI"
    ],
    img: "imageresizo.png",
  },
  {
    title: "BookWorm – Library Management System",
    desc: "Full-stack MERN application with authentication, admin panel, and real-time email notifications.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "JWT Authentication + OTP verification",
      "Role-based access (Admin/User)",
      "Borrow & return system",
      "Automated overdue reminders"
    ],
    img: "bookworm.png",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-4">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Selected Work
        </h2>
        <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Real-world projects focused on performance, scalability, and clean architecture.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-24">
        {projects.map((project, idx) => {

          const isReverse = idx % 2 !== 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition ${isReverse ? "md:flex-row-reverse" : ""
                }`}
            >

              {/* IMAGE */}
              <div className={`overflow-hidden rounded-2xl h-72 ${isReverse ? "order-2" : ""}`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-6">

                <h3 className="text-3xl md:text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2 text-sm text-neutral-300">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 pt-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-medium transition"
                  >
                    🚀 Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
                  >
                    🔗 GitHub
                  </a>

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}