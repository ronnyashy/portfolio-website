"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // We'll give it a bit more time (3.5s) to let the full sequence play
    const timer = setTimeout(() => setIsVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
    >
      <div className="flex flex-col items-center">
        {/* Main Signature */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-calligraphy text-paper"
        >
          Ronnyashy
        </motion.h1>

        {/* The Animated Line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120%" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          className="h-[1px] bg-paper/30 mt-2"
        />

        {/* Subtitle - Portfolio Website */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 text-2xl md:text-3xl font-calligraphy text-paper/80 italic tracking-wide"
        >
          Portfolio Website
        </motion.p>
      </div>
    </motion.div>
  );
}