import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Leadership from "./components/sections/Leadership";
import FadeIn from "./components/FadeIn";
import Projects from "./components/sections/Projects";
import Entrepreneurship from "./components/sections/Entrepreneurship";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-paper">
      
      {/* 00. THE COVER */}
      <Hero />

      {/* 01. THE PREFACE (About Section) */}
      <section id="preface" className="min-h-screen flex items-center py-32 px-6 md:px-10 bg-charcoal text-paper relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          
          {/* Left Column: Section Label */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
            <FadeIn>
              <h2 className="text-sm uppercase tracking-[0.4em] mb-12 opacity-40 italic font-sans text-paper">
                01 / The Story
              </h2>
            </FadeIn>
            <div className="hidden md:block w-px h-32 bg-stone-700 ml-1 mb-8" />
          </div>
          
          {/* Right Column: The Story */}
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-16">
              
              {/* Friendly Greeting & Headline */}
              <div className="space-y-6">
                <FadeIn>
                  <p className="text-2xl md:text-3xl font-serif text-stone-400 italic">Hi.</p>
                </FadeIn>
                
                <FadeIn>
                  <h3 className="text-4xl md:text-7xl font-serif leading-[1.1] tracking-tight text-white">
                    Over the last five years, I have <span className="italic text-stone-500 font-normal">grown immensely</span>. This is a memoir of the challenges I’ve embraced.
                  </h3>
                </FadeIn>
              </div>
              
              {/* Supporting Narrative */}
              <div className="space-y-10 max-w-2xl">
                <FadeIn>
                  <p className="text-xl md:text-2xl font-serif text-stone-300 leading-relaxed border-l border-stone-800 pl-8">
                    By <span className="italic text-white underline underline-offset-8 decoration-stone-600">getting my hands dirty</span> with complex system architectures and living through the engineering design cycle, I have pushed myself through rigorous learning and constant experimentation.
                  </p>
                </FadeIn>
                
                <FadeIn>
                  <p className="text-lg md:text-xl font-sans tracking-[0.2em] uppercase opacity-60 leading-relaxed font-light">
                    Today, I stand as a knowledgeable and efficient problem solver, ready to translate ambitious ideas into scalable realities.
                  </p>
                </FadeIn>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 02. CHAPTER ONE: FOUNDATIONS */}
      <div id="education">
        <Education />
      </div>

      {/* 03. CHAPTER TWO: INFLUENCE */}
      <div id="leadership">
        <Leadership />
      </div>


      {/* 05. THE MAIN EVENT (Horizontal Archive) */}
      <div id="projects">
        <Projects />
      </div>

      {/* 06. THE VENTURES (Work Experience) */}
      <div id="entrepreneurship">
        <Entrepreneurship />
      </div>

      {/* 07. THE TOOLKIT */}
      <div id="skills">
        <Skills />
      </div>

      {/* 08. THE FINALE */}
      <div id="footer">
        <Footer />
      </div>

    </main>
  );
}