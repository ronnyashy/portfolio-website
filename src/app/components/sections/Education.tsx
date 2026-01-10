"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  highschool: {
    title: "The Formative Years",
    school: "High School Name",
    period: "2019 — 2022",
    description: "Started my journey here. Developed an interest in logic and leadership.",
    color: "bg-sage"
  },
  university: {
    title: "The Deep Dive",
    school: "University Name",
    period: "2022 — 2026",
    description: "Focusing on [Your Major]. Building the foundations of my professional career.",
    color: "bg-university"
  }
};

export default function Education() {
  const [activeTab, setActiveTab] = useState<"highschool" | "university">("university");

  return (
    <section className={`min-h-screen py-24 px-10 transition-colors duration-700 ${data[activeTab].color} ${activeTab === 'highschool' ? 'text-white' : 'text-slate-200'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8 mb-16 border-b border-white/20 pb-4">
          <button 
            onClick={() => setActiveTab("highschool")}
            className={`text-sm uppercase tracking-widest ${activeTab === "highschool" ? "opacity-100 font-bold" : "opacity-50"}`}
          >
            01. High School
          </button>
          <button 
            onClick={() => setActiveTab("university")}
            className={`text-sm uppercase tracking-widest ${activeTab === "university" ? "opacity-100 font-bold" : "opacity-50"}`}
          >
            02. University
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-6xl font-serif mb-6 italic">{data[activeTab].title}</h3>
              <p className="text-xl opacity-80 max-w-md italic">{data[activeTab].description}</p>
            </div>
            <div className="flex flex-col justify-end items-end text-right">
              <h4 className="text-3xl font-serif">{data[activeTab].school}</h4>
              <p className="text-lg opacity-60 font-sans tracking-tighter">{data[activeTab].period}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}