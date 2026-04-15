export default function Hero() {
  return (
    <section className="text-center py-20 px-6">

      {/* Avatar */}
      <div className="w-28 h-28 mx-auto flex items-center justify-center rounded-full 
      bg-gradient-to-br from-emerald-500 to-teal-400 text-black font-extrabold text-2xl shadow-lg">
        MAK
      </div>

      {/* Name */}
      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          Mohd Amir Khan
        </span>
      </h1>

      {/* Role */}
      <p className="mt-3 text-neutral-400 text-lg">
        Full-Stack Developer (MERN + Spring Boot)
      </p>

      {/* Status */}
      <div className="mt-4 inline-flex items-center gap-2 bg-white/5 px-5 py-1.5 rounded-full border border-emerald-500/30">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm text-neutral-300">Available for work</span>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        
        <a
          href="mailto:amir9425k@gmail.com"
          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-base font-medium transition"
        >
          📩 Contact Me
        </a>

        <a
          href="https://github.com/maxmirkhn"
          target="_blank"
          className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 text-base transition"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohd-amir-khan-418412359/"
          target="_blank"
          className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 text-base transition"
        >
          🔗 LinkedIn
        </a>

      </div>
    </section>
  );
}