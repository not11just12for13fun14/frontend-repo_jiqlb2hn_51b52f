import React from 'react';
import { ShieldCheck, Leaf, Timer, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm tracking-widest uppercase text-teal-600 font-semibold">Wow Carpet Cleaning Adelaide</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight text-zinc-900">
              Adelaide's #1 AI-Powered Carpet Cleaning Service
            </h1>
            <p className="mt-4 text-zinc-600 text-lg">
              10+ Years Experience • Same-Day Service • 100% Satisfaction Guarantee
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#quote" className="inline-flex items-center justify-center rounded-lg bg-[#20A4B8] text-white px-6 py-3 text-base font-medium shadow-sm hover:brightness-110 transition">Get Instant Quote</a>
              <a href="#chat" className="inline-flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-900 px-6 py-3 text-base font-medium hover:bg-zinc-50 transition"><MessageCircle className="w-5 h-5 mr-2"/>Live Chat</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-700">
              <span className="inline-flex items-center gap-2 bg-white/80 border border-zinc-200 rounded-full px-3 py-1"><ShieldCheck className="w-4 h-4 text-teal-600"/> Fully Insured</span>
              <span className="inline-flex items-center gap-2 bg-white/80 border border-zinc-200 rounded-full px-3 py-1"><Leaf className="w-4 h-4 text-teal-600"/> Eco-Friendly</span>
              <span className="inline-flex items-center gap-2 bg-white/80 border border-zinc-200 rounded-full px-3 py-1"><Timer className="w-4 h-4 text-teal-600"/> 10 Years Experience</span>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[360px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1974&auto=format&fit=crop"
              alt="Pristine clean carpet in a modern Adelaide home"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
