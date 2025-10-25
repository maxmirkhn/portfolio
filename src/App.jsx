import React from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Domains from "./components/Domain";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skill";
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
   <div className="w-full px-6 md:px-16 py-10 md:py-14 grid md:grid-cols-[320px,1fr] gap-8">
    <div className="hidden md:block md:sticky md:top-10 self-start h-fit">
      <Sidebar />
    </div>
        <main pb-20>
          <Hero />
          <Stats />
          <Domains />
          <Projects />
          <Education/>
          <Skills/> 
          <Contact/>
          <Footer />
        </main>
      </div>
    </div>
  );
}
