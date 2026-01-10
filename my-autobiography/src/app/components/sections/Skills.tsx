"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Development",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Python"],
    className: "md:col-span-8 md:row-span-2 bg-charcoal text-paper",
  },
  {
    category: "Design",
    skills: ["Figma", "Adobe CC", "Motion Design", "UI/UX"],
    className: "md:col-span-4 md:row-span-1 bg-stone-200 text-charcoal",
  },
  {
    category: "Entrepreneurship",
    skills: ["Product Strategy", "Growth Hacking", "Public Speaking"],
    className: "md:col-span-4 md:row-span-2 bg-university text-paper",
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Vercel", "AWS"],
    className: "md:col-span-4 md:row-span-1 bg-paper border border-charcoal/10 text-charcoal",
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-10 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] opacity-40 mb-4">05 / The Toolkit</h2>
          <p className="text-4xl font-serif italic">Expertise gathered across four years.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-4 h-full">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-sm flex flex-col justify-between ${group.className}`}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 mb-8">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 border border-current/20 rounded-full text-sm font-sans"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}