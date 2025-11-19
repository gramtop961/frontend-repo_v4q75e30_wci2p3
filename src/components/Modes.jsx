import React from 'react';
import { BookOpen, Brain, Hash, Quote } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, color }) => (
  <div className={`relative p-6 rounded-2xl border backdrop-blur bg-slate-900/40 ${color.border}`}>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${color.bg} ${color.text} border ${color.border}`}>
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    <p className="text-blue-200/80 text-sm leading-relaxed">{desc}</p>
    <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-30 bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(99,102,241,0.35),transparent_30%)]" />
  </div>
);

const Modes = () => {
  return (
    <section id="modes" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Four Modes, 48 Curated Cards</h2>
          <p className="text-blue-200/80 mt-2">12 cards per mode for a tight, replayable MVP</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            icon={BookOpen}
            title="Word Master"
            desc="Guess the meaning from playful clues. Boost your vocab without the boredom."
            color={{ bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-400/30' }}
          />
          <Card
            icon={Brain}
            title="Quick Facts"
            desc="Rapid-fire trivia with surprising truths—perfect for group energy."
            color={{ bg: 'bg-sky-500/15', text: 'text-sky-300', border: 'border-sky-400/30' }}
          />
          <Card
            icon={Hash}
            title="Categories"
            desc="Name items that fit a prompt before the timer hits zero."
            color={{ bg: 'bg-violet-500/15', text: 'text-violet-300', border: 'border-violet-400/30' }}
          />
          <Card
            icon={Quote}
            title="Explain It"
            desc="Describe a concept without using the obvious word. Teamwork required."
            color={{ bg: 'bg-pink-500/15', text: 'text-pink-300', border: 'border-pink-400/30' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Modes;