import React from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Domains from "./components/Domain";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 grid md:grid-cols-[320px,1fr] gap-8">
        <Sidebar />
        <main>
          <Hero />
          <Stats />
          <Domains />
          <Projects />
          <Education/>
          <Contact/>
          <Footer />
        </main>
      </div>
    </div>
  );
}
