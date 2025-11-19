import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Focused MVP, Built to Ship</h2>
        <p className="text-blue-200/80 mt-3">
          No accounts. No backend. Just one device, four modes, and delightful moments. Ready for real-world playtesting in a few weeks.
        </p>
        <div className="mt-8 inline-flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#modes" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors">
            Explore the Modes
          </a>
          <a href="#how" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition-colors">
            See What’s Included
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;