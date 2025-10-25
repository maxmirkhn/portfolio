import { motion } from "framer-motion";

export default function Projects() {
  const project = {
    title: "BookWorm – MERN Library Management System",
    desc: "A full-stack Library Management System built with the MERN stack, providing both user and admin functionality. It handles secure authentication, OTP verification, book management, and automated notifications for overdue books.",
    features: [
      "Secure Login & Signup using JWT Authentication",
      "OTP Verification via Email (NodeMailer)",
      "Role-based Access: User & Admin",
      "Borrow & Return Books functionality",
      "Admin Panel for Managing Books & Users",
      "Password Reset + Email Notifications",
      "Responsive Frontend using React + Tailwind CSS",
      "Real-Time Email Notifications",
      "Automation for Overdue Book Reminders",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "JWT + Bcrypt.js",
      "NodeMailer",
      "Cloudinary",
      "Redux Toolkit",
      "NodeCron",
    ],
    img: "bookworm.png",
    github: "https://github.com/maxmirkhn",
    video:
      "https://www.linkedin.com/feed/update/urn:li:activity:7379749591245660160/",
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
        💻 Project
      </h2>
      <p className="mt-2 text-neutral-400">
        Here’s my latest MERN stack project, <span className="text-emerald-400 font-semibold">BookWorm</span> — a complete Library Management System.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 rounded-2xl bg-neutral-900 border border-white/10 hover:border-emerald-500/30 transition p-6 md:p-8"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-72 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Title & Description */}
        <h3 className="mt-6 text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
          {project.desc}
        </p>

        {/* Features */}
        <div className="mt-5">
          <h4 className="font-semibold text-emerald-400">✨ Key Features:</h4>
          <ul className="mt-2 list-disc list-inside text-sm text-neutral-300 space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h4 className="font-semibold text-emerald-400">🛠 Tech Stack:</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs border border-white/10 bg-black/30 rounded-full px-2 py-1 text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-sm font-medium"
          >
            🔗 View Source Code
          </a>
          <a
            href={project.video}
            target="_blank"
            className="px-5 py-2.5 rounded-lg border border-emerald-500 text-sm font-medium hover:bg-emerald-500/10"
          >
            🎥 Watch Demo Video
          </a>
        </div>
      </motion.div>
    </section>
  );
}
