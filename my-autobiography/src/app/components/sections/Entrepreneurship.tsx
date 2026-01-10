"use client";
import { motion } from "framer-motion";

const businesses = [
  {
    name: "Business One Name",
    role: "Founder & CEO",
    image: "/images/biz1.jpg", // Placeholder for your image
    description: "A brief, punchy sentence about what this business does and who it serves.",
    achievements: [
      "Scaled to 1,000+ active users in 6 months",
      "Secured $X in seed funding / revenue",
      "Partnered with [Notable Brand]"
    ],
    theme: "text-stone-800"
  },
  {
    name: "Business Two Name",
    role: "Co-Founder",
    image: "/images/biz2.jpg", 
    description: "Another elegant description of your second venture's mission.",
    achievements: [
      "Awarded 'Best Startup' at [Event]",
      "Automated X process, saving 40 hours/week",
      "Featured in [Publication]"
    ],
    theme: "text-stone-800"
  }
];

export default function Entrepreneurship() {
  return (
    <section className="min-h-screen bg-[#E5E1DA]"> {/* Muted Clay/Beige Background */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {businesses.map((biz, i) => (
          <div 
            key={i} 
            className={`flex-1 flex flex-col border-stone-300 ${i === 0 ? 'md:border-r' : ''}`}
          >
            {/* Image Section */}
            <div className="h-[50vh] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={biz.image} 
                alt={biz.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-10 md:p-16 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] opacity-60">Venture 0{i+1}</span>
                <h2 className="text-5xl font-serif mt-4 mb-2 italic">{biz.name}</h2>
                <p className="text-sm font-sans uppercase tracking-widest opacity-50 mb-8">{biz.role}</p>
                <p className="text-xl font-serif leading-relaxed mb-10 max-w-md">
                  {biz.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="border-t border-stone-400/30 pt-8">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Key Achievements</h4>
                <ul className="space-y-4">
                  {biz.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-xs font-serif italic mt-1">0{idx+1}</span>
                      <p className="text-sm font-sans opacity-80">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}