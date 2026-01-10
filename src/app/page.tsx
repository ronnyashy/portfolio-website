import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Leadership from "./components/sections/Leadership";
import Volunteer from "./components/sections/Volunteer";
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
      {/* Added id="preface" for Navbar navigation */}
      <section id="preface" className="min-h-[90vh] flex items-center py-32 px-10 bg-charcoal text-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <FadeIn>
              <h2 className="text-sm uppercase tracking-[0.4em] mb-12 opacity-40 italic font-sans">
                01 / The Preface
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 md:col-span-8">
            <FadeIn>
              <p className="text-4xl md:text-7xl font-serif leading-[1.1] tracking-tight">
                I’ve spent the last four years bridging the gap between 
                <span className="text-stone-500 italic"> complex logic </span> 
                and <span className="italic font-bold text-white"> human-centric design.</span>
                <br /><br />
                This is a record of my evolution.
              </p>
            </FadeIn>
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

      {/* 04. CHAPTER THREE: IMPACT (Volunteer) */}
      <div id="volunteer">
        <Volunteer />
      </div>

      {/* 05. THE MAIN EVENT (Horizontal Archive) */}
      <div id="projects">
        <Projects />
      </div>

      {/* 06. THE VENTURES */}
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