import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      college: "JMS Institute of Technology, AKTU",
      year: "2023 - 2027",
      details:
        "Pursuing B.Tech in Computer Science and Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU).",
    },
    {
      degree: "Intermediate (12th Grade)",
      marks: "77%",
      year: "2022 - 2023",
    },
    {
      degree: "High School (10th Grade)",
      marks: "86%",
      year: "2020 - 2021",
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Education
      </h2>
      <div className="w-24 h-1.5 bg-emerald-500 mb-12 rounded-full"></div>

      <div className="flex flex-col gap-8">
        {/* B.Tech Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all p-10 flex flex-col md:flex-row md:items-center md:justify-between w-full"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              {education[0].degree}
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              {education[0].college}
            </p>
            <p className="mt-2 text-neutral-300 text-base leading-relaxed max-w-3xl">
              {education[0].details}
            </p>
          </div>
          <span className="mt-4 md:mt-0 text-sm text-neutral-400 font-medium">
            {education[0].year}
          </span>
        </motion.div>

        {/* Schooling in one layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all p-10 flex flex-col md:flex-row md:items-center md:justify-between w-full"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Schooling</h3>
            <ul className="mt-3 space-y-2 text-neutral-300 text-base">
              <li>🏫 Intermediate — <span className="font-medium text-emerald-400">{education[1].marks}</span> ({education[1].year})</li>
              <li>🏫 High School — <span className="font-medium text-emerald-400">{education[2].marks}</span> ({education[2].year})</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
