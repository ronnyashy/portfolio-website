"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const projects = [
  {
    year: "Year 01",
    title: "The Logic Gate",
    category: "C++ / Fundamentals",
    description: "The first dive into algorithmic thinking. Building the base.",
    color: "bg-stone-200"
  },
  {
    year: "Year 02",
    title: "Interactive Web",
    category: "React / Firebase",
    description: "Exploring the bridge between databases and user interfaces.",
    color: "bg-stone-300"
  },
  {
    year: "Year 03",
    title: "Scalable Systems",
    category: "Next.js / PostgreSQL",
    description: "Building production-grade applications with performance in mind.",
    color: "bg-stone-400"
  },
  {
    year: "Final Year",
    title: "The Thesis Project",
    category: "AI / Full-Stack",
    description: "The culmination of four years of study. A real-world solution.",
    color: "bg-stone-500"
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This moves the horizontal bar from 0% to -75% (since we have 4 items)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-charcoal">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* The Sidebar Title */}
        <div className="absolute top-20 left-10 z-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-paper/40">
            Chapter 04 // The Archive
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-10">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative h-[60vh] w-[80vw] md:w-[45vw] flex-shrink-0 flex flex-col justify-between p-12 bg-paper text-charcoal rounded-sm"
            >
              <div>
                <span className="text-xs font-sans uppercase tracking-widest opacity-50">{project.year}</span>
                <h3 className="text-5xl font-serif mt-4 italic">{project.title}</h3>
                <p className="text-sm font-sans uppercase mt-2 tracking-tighter text-stone-500">{project.category}</p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <img 
                    src={`/api/placeholder/800/600`} // This is a temporary placeholder
                    alt="Project Preview"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
              
              <div className="mt-auto">
                <p className="max-w-xs text-lg font-serif mb-8">{project.description}</p>
                <div className="h-[1px] w-full bg-charcoal/10 group-hover:bg-charcoal/40 transition-colors" />
                <button className="mt-4 text-[10px] uppercase tracking-widest font-bold hover:italic">View Project _</button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}