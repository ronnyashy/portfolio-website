"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../FadeIn";

const engagements = [
  {
    id: "leadership",
    category: "I. Leadership",
    items: [
      {
        title: "President, Mfantsipim School Choir",
        period: "Sep 2021 — Aug 2022",
        details: {
          intent: "I joined the Mfantsipim School Choir because of my deep love for music and my desire to sharpen my skills as a pianist, even though I consider myself a bit rusty now. I saw it as a chance to immerse myself in a creative environment while refining my technical ability on the keys.",
          experience: "I led the choir in maintaining the high level of togetherness and decorum required to remain the premier boys' school choir in Ghana. I was responsible for keeping the group organized and ensuring the choir functioned with the precision and discipline the school is known for.",
          achievement: "My team and I successfully organized and executed Cantate Domino, our hallmark annual music concert. We managed to maintain the choir’s organized fashion and the together-ness needed to be effective and stay at the top of our field.",
          lessons: "I learned how to organize large-scale events, how to budget, and how to work within a team. This role taught me how to be patient with people and the art of managing different personalities toward a common goal—a core part of my character development."
        },
        image: "/choir-evidence.jpg" 
      },
      {
        title: "President, Ashesi Engineering Students’ Association (AESA)",
        period: "Jan 2025 — Dec 2025",
        details: {
          intent: "I wanted to challenge the status quo and push the scope of the association further into the student body’s daily life.",
          experience: "I led the team in organizing programs to help engineering and computer science students balance their lives. This included 'de-stress' programs, hackathons to apply theoretical knowledge, and alumni talks to provide experiential guidance for their futures. I also pioneered collaborations with schools like Academic City to host joint hackathons for socialization and healthy competition.",
          achievement: "Successfully elevated the visibility of the association and created a platform where students could bridge the gap between their studies and the professional world.",
          lessons: "I learned how to balance intense school work with the high demands of planning major events. It taught me how to relate professionally with faculty and how to remain patient and resilient in a leadership role."
        },
        image: "/aesa-leadership.jpg"
      }
    ]
  },
  {
    id: "cocurricular",
    category: "II. Co-Curriculars",
    items: [
      {
        title: "Videographer & Photographer, ASC PR Committee",
        period: "Jan 2024 — Dec 2024",
        details: {
          intent: "I joined because I wanted to serve on the Student Council and challenge myself to see how best I could blend an intensive extra-curricular task with my engineering studies.",
          experience: "I had no idea I would be asked to do video editing, but the position fueled a passion for photography, videography, and design that I still hold strongly today. I was responsible for covering school events and capturing the essence of the student experience.",
          achievement: "I successfully created the primary video and photo content for the Student Council’s social media pages, ensuring the student body stayed connected and informed.",
          lessons: "I gained technical proficiency in taking videos and pictures, but I also learned the logistical side: how to meet deadlines, how to curate the best media from hours of raw footage, and how to maintain a balance between creative tasks and academic life."
        },
        image: "/asc-media.jpg"
      },
      {
        title: "Graphic Designer, Ashesi Engineering Students’ Association (AESA)",
        period: "Sep 2024 — Dec 2024",
        details: {
          intent: "I took this role because I wanted to pursue my passion for design, photography, and videography—only to eventually become the president of the association later.",
          experience: "I was responsible for taking videos and pictures to create content for our social media pages. I also handled all media design, including creating flyers for association programs.",
          achievement: "I further enhanced my skills in Canva for graphic design and video editing using CapCut, establishing a strong visual identity for AESA.",
          lessons: "I learned how to translate technical engineering events into engaging visual stories and how to manage the creative branding of an association."
        },
        image: "/aesa-design.jpg"
      },
      {
        title: "Research Assistant, ArcLab (Robotics Research Lab)",
        period: "Sep 2025 — Present",
        details: {
          intent: "After streamlining my interests in engineering, I discovered that robotics was where my true passion lied. I joined the ArcLab to put that passion into practice.",
          experience: "Working as part of a research team, I engaged in the hands-on design and programming of robotic systems.",
          achievement: "Our team participated in the Engineers’ League of the Ghana Robotics Competition, where we successfully won both Gold and Bronze medals.",
          lessons: "This confirmed my interest in the intersection of hardware and intelligence, specifically within the Robot Operating System (ROS2) environment."
        },
        image: "/robotics-gold.jpg"
      }
    ]
  },
  {
    id: "internships",
    category: "III. Professional Internships",
    items: [
      {
        title: "Intern, Huawei (RF Department)",
        period: "Aug 2024",
        details: {
          intent: "To understand the physical infrastructure of global connectivity.",
          experience: "I worked in the Radio Frequency department, where I explored the architecture of mobile networks. I learned why cell towers are critical and how calls are physically placed across 2G and 3G networks.",
          achievement: "Gained a foundational understanding of telecommunications hardware and network deployment.",
          lessons: "Though the internship was short, it was incredibly educative in showing me the physical infrastructure that powers global connectivity."
        },
        image: "/huawei-intern.jpg"
      },
      {
        title: "Intern, The Automation Ghana Group (TAGG)",
        period: "Jun 2025",
        details: {
          intent: "To gain hands-on industrial experience despite a prior dislike for electrical theory.",
          experience: "Dealing with circuits and three-phase power—concepts I originally disliked—I had to wire three-phase voltage myself to simulate faulty motor managers for a client factory. I applied computer engineering knowledge to pick readings via Ethernet and log them to a Linux server and a Raspberry Pi 3.",
          achievement: "I set up the data-logging system as a background service and visited the factory to configure newly installed motor managers myself along with other engineers.",
          lessons: "This experience showed me how different branches of engineering converge to solve industrial problems and made me appreciate electrical concepts I once avoided."
        },
        image: "/tagg-engineering.jpg"
      },
      {
        title: "Lab Associate, Ashesi Fab Lab",
        period: "Spring 2025",
        details: {
          intent: "To support the engineering community while deepening my understanding of fabrication tools.",
          experience: "I helped students with 3D printing, laser cutting, and soldering during my scheduled hours. I also ensured all machines were functioning safely.",
          achievement: "Learned how to update 3D printer firmware and cemented my knowledge of digital fabrication.",
          lessons: "I mastered the maintenance and safety protocols of a professional engineering lab environment."
        },
        image: "/fablab.jpg"
      }
    ]
  },
  {
    id: "ventures",
    category: "IV. Ventures & Volunteering",
    items: [
      {
        title: "Founder, Ron’s E-Learning",
        period: "Feb 2024 — Present",
        details: {
          intent: "To provide accessible technical and creative education.",
          experience: "I started this school to teach students coding and design via digital platforms.",
          achievement: "Since February 2024, I have taught over 100 students Python, Canva, and Academic Writing via WhatsApp platforms.",
          lessons: "Learned the logistics of managing an online education brand and student engagement."
        },
        image: "/rons-elearning.jpg"
      },
      {
        title: "Independent Forex Trader",
        period: "Ongoing",
        details: {
          intent: "To achieve financial independence and master risk management.",
          experience: "I actively trade the Forex markets as an independent business to manage my finances as a student.",
          achievement: "Successfully managed personal finances through consistent market analysis.",
          lessons: "Developed extreme discipline, emotional control, and analytical rigour."
        },
        image: "/forex-trading.jpg"
      },
      {
        title: "Volunteer, Ashesi Commencement Ceremony",
        period: "2024",
        details: {
          intent: "I wanted to serve during one of the university's most significant annual events.",
          experience: "I served as a flag bearer during the official march for the introduction of the ceremony, and subsequently worked as an usher.",
          achievement: "Contributed to the successful execution of the graduation ceremony for the Class of 2024.",
          lessons: "Learned the importance of precision in formal ceremonies and the value of front-line service."
        },
        image: "/commencement.jpg"
      },
      {
        title: "Peer Tutor, AI Robotics (ROS2)",
        period: "Spring 2026",
        details: {
          intent: "To help others master difficult technical concepts like Introduction to Engineering and AI Robotics.",
          experience: "I helped freshmen in 2024 and am currently helping students navigate ROS2 and its complexities in 2026.",
          achievement: "Successfully guided cohorts through complex hardware-software integration hurdles.",
          lessons: "Teaching explained ROS2 and cemented my own understanding of robotics."
        },
        image: "/peer-tutoring.jpg"
      }
    ]
  }
];

export default function Engagements() {
  const [expandedId, setExpandedId] = useState<string | null>("leadership");

  return (
    <section className="bg-paper py-32 px-6 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn>
          <h2 className="text-sm uppercase tracking-[0.4em] mb-4 italic font-sans opacity-40">03 / Engagements</h2>
          <p className="text-5xl md:text-7xl font-serif text-charcoal italic mb-24">A Memoir of Action.</p>
        </FadeIn>

        <div className="space-y-4">
          {engagements.map((section) => (
            <div key={section.id} className="border-b border-charcoal/10">
              <button
                onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                className="w-full flex justify-between items-center py-12 text-left group transition-all"
              >
                <h3 className={`text-3xl md:text-5xl font-serif transition-all duration-500 ${expandedId === section.id ? "text-charcoal pl-6" : "text-stone-400 opacity-50 hover:opacity-100"}`}>
                  {section.category}
                </h3>
                <span className={`text-3xl transition-transform duration-500 ${expandedId === section.id ? "rotate-45" : "rotate-0 text-stone-400"}`}>+</span>
              </button>

              <AnimatePresence>
                {expandedId === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-24 space-y-40 pt-10 px-6">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                          
                          {/* Narrative Detail */}
                          <div className="md:col-span-5 space-y-10">
                            <div>
                                <span className="text-xs font-sans font-bold tracking-[0.2em] text-stone-400 block mb-2">{item.period}</span>
                                <h4 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">{item.title}</h4>
                            </div>

                            <div className="space-y-8 text-stone-600 font-serif text-lg leading-relaxed border-l border-stone-100 pl-8">
                                <p><strong className="block text-[10px] uppercase tracking-widest text-stone-400 font-sans mb-1">The Intent</strong>{item.details.intent}</p>
                                <p><strong className="block text-[10px] uppercase tracking-widest text-stone-400 font-sans mb-1">The Experience</strong>{item.details.experience}</p>
                                <p><strong className="block text-[10px] uppercase tracking-widest text-stone-400 font-sans mb-1">The Achievement</strong>{item.details.achievement}</p>
                                <p><strong className="block text-[10px] uppercase tracking-widest text-stone-400 font-sans mb-1">The Lessons</strong>{item.details.lessons}</p>
                            </div>
                          </div>

                          {/* Large Visual Evidence */}
                          <div className="md:col-span-7">
                            <div className="relative aspect-[16/10] bg-stone-100 rounded-sm overflow-hidden group shadow-2xl">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                              />
                              <div className="absolute top-4 left-4 bg-paper/80 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-charcoal shadow-md">
                                Evidence Frame // {idx + 1}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}