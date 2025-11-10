import React, { useRef, useState, useEffect } from 'react';

const items = [
  {
    before: 'https://images.unsplash.com/photo-1615796212963-4573adfa34f0?q=80&w=1887&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1887&auto=format&fit=crop',
    caption: 'Wine Stain Removal - North Adelaide'
  },
  {
    before: 'https://images.unsplash.com/photo-1581579188871-45ea61f2a0b6?q=80&w=1887&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578017426-1e5306b20053?q=80&w=1887&auto=format&fit=crop',
    caption: 'High-Traffic Hallway Restore - Glenelg'
  },
  {
    before: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1887&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop',
    caption: 'Upholstery Deep Clean - Unley Park'
  },
  {
    before: 'https://images.unsplash.com/photo-1523419409543-26743b4b9b51?q=80&w=1887&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1616593960669-4e5c7835b21b?q=80&w=1887&auto=format&fit=crop',
    caption: 'Tile & Grout Refresh - Norwood'
  }
];

const Compare = ({ before, after, alt }) => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
      setPos(pct);
    };
    const down = (e) => {
      onMove(e);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('touchmove', onMove);
      window.addEventListener('mouseup', up);
      window.addEventListener('touchend', up);
    };
    const up = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
    el.addEventListener('mousedown', down);
    el.addEventListener('touchstart', down, { passive: true });
    return () => {
      el.removeEventListener('mousedown', down);
      el.removeEventListener('touchstart', down);
      up();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full select-none cursor-col-resize">
      <img src={before} alt={`Before: ${alt}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }} aria-hidden>
        <img src={after} alt={`After: ${alt}`} loading="lazy" className="w-full h-full object-cover"/>
      </div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden>
        <div className="-ml-0.5 h-full w-1 bg-[#20A4B8] shadow" />
        <div className="absolute top-1/2 -translate-y-1/2 -ml-5 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow flex items-center justify-center text-zinc-700">||</div>
      </div>
      <span className="sr-only">Drag to compare before and after</span>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="py-16 bg-zinc-50" aria-labelledby="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 id="gallery" className="text-2xl sm:text-3xl font-bold text-zinc-900">See The Difference</h2>
            <p className="text-zinc-600 mt-1">Drag the slider to compare before and after results.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, idx) => (
            <figure key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-[16/10]">
                <Compare before={it.before} after={it.after} alt={it.caption} />
              </div>
              <figcaption className="p-4 text-sm text-zinc-700">{it.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
