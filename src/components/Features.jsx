import React from 'react';
import { Users, Timer, Trophy, Sparkles, Shuffle, Layers } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 mb-4">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    <p className="text-blue-200/80 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="how" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What makes it delightful</h2>
          <p className="text-blue-200/80 mt-2">A focused MVP with premium feel and zero complexity</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Users} title="Game Master rotation" desc="Everyone gets a turn to lead a round and hype the room." />
          <Feature icon={Shuffle} title="One device" desc="Pass one phone around. No setup, no accounts, instant play." />
          <Feature icon={Layers} title="Beautiful 3D cards" desc="Crisp flip animations, a polished feel, and confetti moments." />
          <Feature icon={Timer} title="Timed tiers" desc="Answer fast for 5 points, slower for 3, last chance for 1." />
          <Feature icon={Sparkles} title="Learn without trying" desc="Curated cards teach cool words and facts—always fun first." />
          <Feature icon={Trophy} title="Shareable finale" desc="Celebrate the winners with a clean results screen." />
        </div>
      </div>
    </section>
  );
};

export default Features;