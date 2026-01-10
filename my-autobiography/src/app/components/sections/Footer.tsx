"use client";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper px-10 pt-32 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-7xl md:text-9xl font-serif italic leading-none">
              Let's <br /> Talk.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl font-serif mb-8 opacity-60 max-w-sm">
              Currently seeking opportunities to build the future of the web. 
              Based in [Your Location].
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@yoursite.com" className="block text-2xl font-serif hover:italic underline decoration-stone-700 underline-offset-8">hello@yoursite.com</a>
              <div className="flex gap-8 pt-8">
                <a href="#" className="uppercase tracking-widest text-xs opacity-50 hover:opacity-100">LinkedIn</a>
                <a href="#" className="uppercase tracking-widest text-xs opacity-50 hover:opacity-100">GitHub</a>
                <a href="#" className="uppercase tracking-widest text-xs opacity-50 hover:opacity-100">X (Twitter)</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-paper/10 pt-10 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] opacity-30">
          <p>© 2026 Digital Autobiography</p>
          <p>Designed for the long term</p>
        </div>
      </div>
    </footer>
  );
}