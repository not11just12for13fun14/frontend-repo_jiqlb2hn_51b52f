import React, { useMemo, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const SERVICES = [
  { key: 'steam', label: 'Steam Cleaning (Carpets)', unit: 'per room', price: 50 },
  { key: 'dry', label: 'Dry Cleaning (Carpets)', unit: 'per room', price: 50 },
  { key: 'upholstery', label: 'Upholstery', unit: 'per seat', price: 70 },
  { key: 'tile', label: 'Tile & Grout', unit: 'per room', price: 100 },
  { key: 'rug', label: 'Rugs', unit: 'per rug', price: 60 }
];

const QuoteCalculator = () => {
  const [form, setForm] = useState({
    rooms: 1,
    suburb: '',
    services: { steam: false, dry: false, upholstery: false, tile: false, rug: false },
    quantities: { steam: 1, dry: 1, upholstery: 1, tile: 1, rug: 1 },
    name: '',
    email: '',
    phone: ''
  });

  const updateService = (key, checked) => {
    setForm((f) => ({
      ...f,
      services: { ...f.services, [key]: checked },
    }));
  };

  const updateQty = (key, value) => {
    setForm((f) => ({ ...f, quantities: { ...f.quantities, [key]: Math.max(1, Number(value) || 1) } }));
  };

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const estimate = useMemo(() => {
    const breakdown = [];
    let subtotal = 0;
    SERVICES.forEach((s) => {
      if (form.services[s.key]) {
        const qty = form.quantities[s.key] || 1;
        const cost = s.price * qty;
        subtotal += cost;
        breakdown.push({ label: `${s.label} (${s.unit}) x ${qty}`, cost });
      }
    });
    const discount = subtotal > 0 ? Math.round(subtotal * 0.15) : 0; // 15% promo
    const total = subtotal - discount;
    return { breakdown, subtotal, discount, total };
  }, [form.services, form.quantities]);

  const canBook = form.name && form.email && form.phone && estimate.total > 0;

  const handleBook = (e) => {
    e.preventDefault();
    if (!canBook) return;
    alert(
      `Thanks, ${form.name}!\n\nYour instant estimate is $${estimate.total}. We'll contact you at ${form.phone} to confirm your booking for ${form.suburb}.`);
  };

  return (
    <section id="quote" className="py-16 bg-white" aria-labelledby="quote-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 id="quote-title" className="text-2xl sm:text-3xl font-bold text-zinc-900">Instant Quote Calculator</h2>
            <p className="mt-2 text-zinc-600">Transparent pricing with real-time estimates. Book now and save 15%.</p>
            <form className="mt-6 space-y-6" onSubmit={handleBook}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Suburb</label>
                  <input
                    type="text"
                    required
                    value={form.suburb}
                    onChange={(e) => setField('suburb', e.target.value)}
                    placeholder="e.g. Norwood"
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20A4B8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Number of rooms</label>
                  <select
                    value={form.rooms}
                    onChange={(e) => setField('rooms', Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20A4B8]"
                  >
                    {[1,2,3,4,5,6,7,8].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-zinc-800">Select services</legend>
                <div className="mt-3 space-y-3">
                  {SERVICES.map((s) => (
                    <div key={s.key} className="flex items-center justify-between rounded-lg border border-zinc-200 p-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={form.services[s.key]}
                          onChange={(e) => updateService(s.key, e.target.checked)}
                          className="h-4 w-4 text-[#20A4B8] focus:ring-[#20A4B8]"
                          aria-label={s.label}
                        />
                        <span className="text-zinc-800">{s.label}</span>
                        <span className="ml-2 text-sm text-zinc-500">Starting from ${s.price} {s.unit}</span>
                      </label>
                      {form.services[s.key] && (
                        <div className="flex items-center gap-2">
                          <label htmlFor={`qty-${s.key}`} className="text-sm text-zinc-600">Qty</label>
                          <input id={`qty-${s.key}`} type="number" min={1} value={form.quantities[s.key]}
                            onChange={(e) => updateQty(s.key, e.target.value)}
                            className="w-20 rounded-md border border-zinc-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#20A4B8]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Name</label>
                  <input type="text" value={form.name} onChange={(e)=>setField('name', e.target.value)} required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20A4B8]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Email</label>
                  <input type="email" value={form.email} onChange={(e)=>setField('email', e.target.value)} required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20A4B8]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e)=>setField('phone', e.target.value)} required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20A4B8]" />
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
                <p className="text-sm font-medium text-zinc-800">Estimate</p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                  {estimate.breakdown.length === 0 && (
                    <li>Select at least one service to see your estimate.</li>
                  )}
                  {estimate.breakdown.map((b, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{b.label}</span>
                      <span>${b.cost}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Subtotal</span>
                  <span className="font-medium">${estimate.subtotal}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-sm text-teal-700">
                  <span>Promo (15% off)</span>
                  <span>- ${estimate.discount}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-lg font-bold text-zinc-900">
                  <span>Estimated Total</span>
                  <span>${estimate.total}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!canBook}
                className={`w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-white font-medium shadow-sm transition ${canBook ? 'bg-[#20A4B8] hover:brightness-110' : 'bg-zinc-300 cursor-not-allowed'}`}
              >
                Book Now & Save 15%
              </button>
            </form>
          </div>

          <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100 h-max">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#20A4B8] mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">What to expect</h3>
                <ul className="mt-3 space-y-2 text-zinc-700 text-sm">
                  <li>• Friendly, fully insured technicians</li>
                  <li>• AI-assisted scheduling for same-day slots</li>
                  <li>• Non-toxic, eco-friendly products</li>
                  <li>• Average job time: 2 hours depending on size</li>
                  <li>• Wait ~4 hours before walking for best results</li>
                  <li>• Furniture moved where safe (excludes heavy items)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1663528019558-17bcc1815981?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWNobmljaWFuJTIwY2xlYW5pbmclMjBjYXJwZXR8ZW58MHwwfHx8MTc2Mjc1MjcwM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Technician cleaning carpet" loading="lazy" className="w-full h-56 object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
