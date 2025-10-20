import React from "react";

const domains = [
  { title: "MERN", points: ["React + Tailwind", "Node/Express", "MongoDB/Atlas", "REST APIs"] },
  { title: "Android (Kotlin)", points: ["Jetpack Compose", "Camera/Flash API", "Room/DataStore"] },
  { title: "Infra", points: ["Firebase (RTDB/FCM)", "Vercel/Netlify", "Basic NDK/FFmpeg"] },
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
