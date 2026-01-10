"use client";
import { motion } from "framer-motion";

const volunteerWork = [
  {
    role: "Community Tech Mentor",
    org: "Local Youth Center",
    impact: "Taught basic coding to 50+ underprivileged teenagers.",
    year: "2023"
  },
  {
    role: "Open Source Contributor",
    org: "Global Dev Initiative",
    impact: "Improved accessibility features for a major UI library.",
    year: "2024"
  }
];

export default function Volunteer() {
  return (
    <section className="py-24 px-10 bg-stone-100 text-charcoal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.4em] mb-16 opacity-60">
          Giving Back // University Era
        </h2>
        
        <div className="flex flex-col gap-12">
          {volunteerWork.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b border-charcoal/10 pb-12"
            >
              <div className="max-w-xl">
                <h3 className="text-3xl font-serif group-hover:italic transition-all cursor-default">
                  {item.role}
                </h3>
                <p className="text-lg opacity-60 font-sans mt-2">{item.org}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <p className="text-sm font-sans uppercase tracking-widest text-stone-500">{item.year}</p>
                <p className="text-md italic font-serif mt-1">{item.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}