"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../FadeIn";

const data = {
  highschool: {
    title: "The Formative Years",
    school: "Mfantsipim School",
    location: "Cape Coast, Ghana",
    period: "September 2019 — September 2022",
    program: "WASSCE | General Science",
    logo: "/mfantsipim-logo.png", 
    description: (
      <>
        This was where the boy became a <span className="text-white font-bold">gentleman</span>. Beyond the rigors of the WASSCE, Mfantsipim was a masterclass in self-governance. Living in a boarding facility far from home, I yielded to a tradition of discipline—learning to be <span className="italic underline decoration-stone-400 underline-offset-8 text-white">prim, proper, and precise</span> in speech and stature. 
        <br /><br />
        It was here that I mastered solitary study and resource management, learning to choose the companions and decisions that would safeguard my future. This wasn't just school; it was the <span className="text-white">core of my character development</span>.
      </>
    ),
    color: "bg-[#24292e]", // Sophisticated Slate (Lighter than black, high contrast)
    accent: "text-white",
    bodyText: "text-stone-300",
    border: "border-white/20"
  },
  university: {
    title: "The Churning of a Deep Thinker",
    school: "Ashesi University",
    location: "Berekuso, Ghana",
    period: "January 2023 — May 2026",
    program: "BSc. Computer Engineering",
    logo: "/ashesi-logo.png", 
    description: (
      <>
        I arrived with 6As, thinking I knew what it meant to be a student. Ashesi humbled me, forcing me to <span className="text-charcoal font-bold">question every strategy</span> I had ever used. This was a season of evolution—a semester-by-semester fine-tuning of my mind.
        <br /><br />
        The Engineering program presented the most challenging problems I have faced, but in that "churning," I found my capacity for the <span className="italic underline decoration-charcoal/30 underline-offset-8 text-charcoal">unimaginable</span>. Today, I resonate with the words: <span className="font-serif italic text-charcoal">"I am thinking now."</span> My education here didn't just give me a degree; it gave me a mind.
      </>
    ),
    color: "bg-[#f4f1ea]", // Classic Paper
    accent: "text-charcoal",
    bodyText: "text-stone-600",
    border: "border-charcoal/10"
  }
};

export default function Education() {
  const [activeTab, setActiveTab] = useState<"highschool" | "university">("university");
  const active = data[activeTab];

  return (
    <section className={`min-h-screen py-32 px-6 md:px-10 transition-colors duration-1000 ${active.color}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <FadeIn>
            <h2 className={`text-sm uppercase tracking-[0.4em] mb-4 italic font-sans opacity-40 ${active.accent}`}>
              02 / Education
            </h2>
          </FadeIn>
        </div>

        {/* Tab Selection - Improved Visibility */}
        <div className={`flex gap-12 mb-24 border-b pb-4 transition-colors duration-700 ${active.border}`}>
          {(["highschool", "university"] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-500 relative ${
                activeTab === tab ? active.accent + " font-bold" : active.accent + " opacity-30 hover:opacity-100"
              }`}
            >
              {tab === "highschool" ? "01. Mfantsipim" : "02. Ashesi"}
              {activeTab === tab && (
                <motion.div 
                  layoutId="underline" 
                  className={`absolute -bottom-[17px] left-0 right-0 h-[2px] ${activeTab === 'highschool' ? 'bg-white' : 'bg-charcoal'}`} 
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 md:gap-16"
          >
            {/* Left: Branding & Meta */}
            <div className="col-span-12 md:col-span-4 space-y-8">
              <div className="w-32 h-32 mb-8 transition-all duration-700">
                <div className={`w-full h-full rounded-2xl border flex items-center justify-center p-6 bg-white shadow-xl`}>
                   <img src={active.logo} alt="School Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className={`text-3xl font-serif leading-tight ${active.accent}`}>
                  {active.school}
                </h4>
                <p className={`text-sm tracking-widest uppercase font-bold ${active.bodyText}`}>
                  {active.period}
                </p>
                <p className={`text-xs italic opacity-70 ${active.bodyText}`}>
                  {active.location}
                </p>
              </div>
            </div>

            {/* Right: The Narrative */}
            <div className="col-span-12 md:col-span-8">
              <h3 className={`text-4xl md:text-6xl font-serif mb-12 italic leading-tight ${active.accent}`}>
                {active.title}
              </h3>
              <div className={`text-xl md:text-2xl font-serif leading-relaxed max-w-3xl space-y-6 ${active.bodyText}`}>
                {active.description}
              </div>
              
              <div className={`mt-12 pt-8 border-t inline-block ${active.border}`}>
                 <p className={`text-xs uppercase tracking-[0.4em] font-bold opacity-60 ${active.accent}`}>
                    {active.program}
                 </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}