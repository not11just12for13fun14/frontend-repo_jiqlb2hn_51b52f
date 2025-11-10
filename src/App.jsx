import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import QuoteCalculator from './components/QuoteCalculator';
import MainSections from './components/MainSections';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Hero />
      <main>
        <Gallery />
        <QuoteCalculator />
        <MainSections />
      </main>
    </div>
  );
}

export default App;
