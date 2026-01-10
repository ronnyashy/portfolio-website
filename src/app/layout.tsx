import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

// Font Definitions
const serif = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["400", "700", "900"] 
});

const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const calligraphy = Pinyon_Script({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-calligraphy" 
});

export const metadata: Metadata = {
  title: "Aaron Amarh Ashitey | Portfolio",
  description: "Software Engineer focused on growth and the engineering design cycle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${calligraphy.variable}`}>
      <body className="font-sans antialiased bg-paper text-charcoal">
        {/* The Preloader stays at the absolute root to cover everything on load */}
        <Preloader /> 
        
        {/* The Navbar is placed here to ensure it's global */}
        <Navbar />

        {/* The SmoothScroll wraps the main content */}
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}