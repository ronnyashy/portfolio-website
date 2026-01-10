"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 mix-blend-difference">
      {/* The Signature Logo */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-4xl font-calligraphy text-white hover:opacity-70 transition-all duration-500 tracking-wide"
        style={{ textShadow: "0 0 20px rgba(255,255,255,0.2)" }}
      >
        Ronnyashy
      </button>
      <div className="hidden md:flex gap-8">
        {[
          { name: "Story", id: "preface" },
          { name: "Education", id: "education" },
          { name: "Leadership", id: "leadership" },
          { name: "Archive", id: "projects" },
          { name: "Contact", id: "footer" }
        ].map((item) => (
          <button 
            key={item.name} 
            onClick={() => scrollToSection(item.id)}
            className="text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all hover:italic"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}