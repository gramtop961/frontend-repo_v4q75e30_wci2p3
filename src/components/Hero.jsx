import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
      {/* 3D Spline Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-sm mb-4">
          <Sparkles className="w-4 h-4" />
          MVP Concept
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          Kemozako
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100/90">
          A mobile-first party game where friends pass one phone around, rotate the Game Master, and learn fascinating words and facts while laughing together.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#modes" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors">
            See the 4 Modes
          </a>
          <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition-colors">
            How it Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;