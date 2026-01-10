"use client";
import { motion } from "framer-motion";

const roles = [
  {
    category: "Business",
    title: "Founder & Lead Developer",
    org: "Your Startup Name",
    description: "Spearheaded the development of a niche SaaS platform, managing a small team of three.",
    year: "2024 — Present"
  },
  {
    category: "University",
    title: "President, Tech Society",
    org: "University Name",
    description: "Organized hackathons for over 500+ students and bridged the gap between faculty and student body.",
    year: "2023 — 2024"
  },
  {
    category: "High School",
    title: "Senior Prefect",
    org: "High School Name",
    description: "Acted as a liaison between the student body and administration, focusing on welfare and discipline.",
    year: "2021 — 2022"
  }
];

export default function Leadership() {
  return (
    <section className="py-32 px-10 bg-paper text-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <span className="text-sm uppercase tracking-[0.3em] opacity-50 font-sans">Chapter 02</span>
          <h2 className="text-7xl md:text-9xl font-serif italic leading-none mt-4">Leadership.</h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20">
          {roles.map((role, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`md:col-span-6 ${index % 2 !== 0 ? 'md:mt-32 md:ml-12' : 'md:mr-12'}`}
            >
              <div className="border-l border-charcoal/20 pl-8">
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-500">
                  {role.category} // {role.year}
                </span>
                <h3 className="text-4xl font-serif mt-4 mb-2">{role.title}</h3>
                <h4 className="text-xl font-serif italic text-stone-600 mb-6">{role.org}</h4>
                <p className="text-lg font-sans leading-relaxed max-w-md opacity-80">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}