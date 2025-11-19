import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Modes from './components/Modes';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Modes />
      <Features />
      <CTA />
      {/* Footer */}
      <footer className="py-10 text-center bg-slate-900 border-t border-slate-800">
        <p className="text-sm text-blue-200/70">Kemozako MVP — Mobile-first party game concept</p>
      </footer>
    </div>
  );
}

export default App;