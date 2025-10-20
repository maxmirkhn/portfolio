import React from "react";

const Sidebar = () => (
  <aside className="md:sticky md:top-6 self-start">
    <div className="rounded-2xl bg-neutral-900 border border-white/10 p-5">
      <div className="overflow-hidden rounded-xl">
        <img src="MohdAmirKhan.jpg" alt="Profile" className="w-full h-64 object-cover" />
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-sm rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
        <span className="size-2 rounded-full bg-emerald-500" /> Available for work
      </div>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight">Mohd Amir Khan</h1>
      <p className="mt-1 text-neutral-400 text-sm">MERN & Android Developer</p>

      <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
        <a className="rounded-xl bg-black/40 border border-white/10 hover:border-white/20 px-4 py-2 text-center" href="amir9425k@gmail.com">📧 Email</a>
        <a className="rounded-xl bg-black/40 border border-white/10 hover:border-white/20 px-4 py-2 text-center" href="https://github.com/maxmirkhn" target="_blank">🌐 GitHub</a>
        <a className="rounded-xl bg-black/40 border border-white/10 hover:border-white/20 px-4 py-2 text-center" href="https://www.linkedin.com/in/mohd-amir-khan-418412359/" target="_blank">💼 LinkedIn</a>
        <a className="rounded-xl bg-black/40 border border-white/10 hover:border-white/20 px-4 py-2 text-center" href="https://instagram.com/yourname" target="_blank">📷 Insta</a>
      </div>

      <a href="amir9425k@gmail.com" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3 font-medium">
        Get in touch
      </a>
    </div>
  </aside>
);

export default Sidebar;
