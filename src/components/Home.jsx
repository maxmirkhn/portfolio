// src/pages/Home.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects"; // Import the new Projects component
import Domains from "../components/Domains";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-[320px,1fr] gap-8">
        <Sidebar />
        <main>
          <Hero />
          <Stats />
          <Projects /> {/* Add the Projects component here */}
          <Domains />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
