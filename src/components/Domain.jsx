import React from "react";

const domains = [
  { title: "MERN", points: ["React + Tailwind", "Node.js + Express.js", "MongoDB + Mongoose", "REST APIs + JWT Auth"] },
  { title: "Spring Boot (Java)", points: ["Spring Boot + MySQL", "RESTful APIs", "Hibernate + JPA", "Authentication & CRUD Apps"] },
  { title: "Infra / Tools", points: ["Git & GitHub", "Postman + API Testing", "VS Code + Chrome DevTools", "Intellij IDEA"] },
];

const Domains = () => (
  <section className="mt-6 rounded-2xl bg-neutral-900 border border-white/10 p-7 md:p-10">
    <h3 className="text-2xl md:text-3xl font-bold">Domains</h3> 
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {domains.map((d) => (
        <div key={d.title} className="rounded-xl bg-black/40 border border-white/10 p-5">
          <div className="font-semibold text-white">{d.title}</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            {d.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1 size-1.5 rounded-full bg-emerald-500/70" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Domains;
