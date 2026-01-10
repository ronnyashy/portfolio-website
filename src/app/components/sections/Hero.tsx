"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]); // Fades out as you scroll

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center px-6 md:px-10 bg-paper overflow-hidden">
      
      {/* Background Mugshot - Now truly full-screen background */}
      <motion.div 
        style={{ scale: scaleImage, opacity: opacityImage }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="relative w-full h-full">
          <img 
            src="/mugshot.jpg" 
            alt="Aaron Amarh Ashitey"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 25%' }} 
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-paper/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper/40" />
        </div>
      </motion.div>

      <motion.div style={{ y: yText }} className="z-10 relative">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-stone-600 mb-6 block font-sans font-bold"
        >
          Passionate learner // Robotics Enthusiast
        </motion.span>

        <h1 className="text-[14vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter text-charcoal uppercase">
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Aaron
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block ml-[10vw] italic"
          >
            Amarh Ashitey.
          </motion.span>
        </h1>
      </motion.div>

      {/* Bottom Label */}
      <motion.div className="absolute bottom-10 left-6 md:left-10 flex gap-10 md:gap-20 items-end z-10">
        <div className="max-w-[200px]">
          <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-80 font-bold text-charcoal">
            Focused on growth, understanding, and the engineering design cycle.
          </p>
        </div>
        <div className="hidden md:block h-[1px] w-24 bg-charcoal/40 mb-2" />
        <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1 text-charcoal">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}