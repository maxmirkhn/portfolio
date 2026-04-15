import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white selection:bg-emerald-500/30 overflow-x-hidden scroll-smooth">
      {/* Background Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24 md:space-y-32">
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}