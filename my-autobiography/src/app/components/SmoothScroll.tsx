"use client";
import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.05,        // The "smoothness" factor (lower = smoother)
      duration: 1.5,     // How long the scroll glide lasts
      smoothWheel: true 
    }}>
      {children}
    </ReactLenis>
  );
}