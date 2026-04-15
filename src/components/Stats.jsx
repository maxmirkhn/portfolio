import React from "react";

const stats = [
  { label: "Projects Completed", value: "05+" },
  { label: "Years Experience", value: "01+" },
];

const Stats = () => (
  <div className="grid grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto gap-10 py-20">
    {stats.map((s) => (
      <div key={s.label} className="rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-10 text-center hover:border-emerald-500/30 transition-all duration-300">
        <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">{s.value}</div>
        <div className="text-sm text-neutral-500 mt-3 font-bold uppercase tracking-[0.2em]">{s.label}</div>
      </div>
    ))}
  </div>
);

export default Stats;
