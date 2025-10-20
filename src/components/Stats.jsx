import React from "react";

const stats = [
  { label: "Completed Projects", value: "2+" },
  { label: "Years of Experience", value: "1+" },
];

const Stats = () => (
  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((s) => (
      <div key={s.label} className="rounded-xl bg-black/40 border border-white/10 p-4 text-center">
        <div className="text-2xl font-bold text-white">{s.value}</div>
        <div className="text-xs text-neutral-400 mt-1">{s.label}</div>
      </div>
    ))}
  </div>
);

export default Stats;
