"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  
  // This creates a parallax effect: as you scroll, the text moves up slightly faster
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center px-10 bg-paper overflow-hidden"
    >
      {/* Decorative Background Element */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-20 right-10 text-[20vw] font-serif italic opacity-[0.03] select-none uppercase"
      >
        Autobio.
      </motion.div>

      <div className="z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm uppercase tracking-[0.5em] text-stone-500 mb-6 block"
        >
          Class of 2026 // Portfolio
        </motion.span>

        <h1 className="text-[12vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter text-charcoal uppercase">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Your
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block ml-[10vw] italic"
          >
            Full Name.
          </motion.span>
        </h1>
      </div>

      {/* Bottom Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-10 flex gap-20 items-end"
      >
        <div className="max-w-[150px]">
          <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-40">
            Focused on the intersection of human-centric design and scalable architecture.
          </p>
        </div>
        <div className="h-[1px] w-24 bg-charcoal/20 mb-2" />
        <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}