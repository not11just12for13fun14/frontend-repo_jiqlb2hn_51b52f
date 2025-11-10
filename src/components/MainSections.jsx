import React from 'react';
import { Leaf, ShieldCheck, Clock, BadgeCheck, Sparkles, DollarSign, Star, MapPin, Facebook, Instagram } from 'lucide-react';

const ServiceCard = ({ title, price, description, img }) => (
  <div className="group rounded-xl border border-zinc-200 overflow-hidden bg-white transition shadow-sm hover:shadow-md">
    <div className="h-36 overflow-hidden">
      <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="text-sm text-zinc-600 mt-1">{description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-zinc-500">Starting from</span>
        <span className="text-[#20A4B8] font-semibold">${price}</span>
      </div>
      <a href="#quote" className="mt-4 inline-block text-sm text-[#20A4B8] hover:underline">Learn More</a>
    </div>
  </div>
);

const WhyUs = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {[ 
      { icon: Star, title: '10+ Years Experience', text: 'Proven results backed by thousands of happy Adelaide homes.' },
      { icon: Clock, title: 'Same-Day Service', text: 'AI scheduling to find you the fastest available slot.' },
      { icon: Leaf, title: 'Eco-Friendly', text: 'Non-toxic products that are safe for kids and pets.' },
      { icon: ShieldCheck, title: 'Licensed & Insured', text: 'Professional technicians with full insurance.' },
      { icon: BadgeCheck, title: 'Satisfaction Guarantee', text: 'If you’re not thrilled, we’ll make it right.' },
      { icon: DollarSign, title: 'Competitive Pricing', text: 'Transparent rates with no hidden fees.' }
    ].map(({ icon:Icon, title, text }, i) => (
      <div key={i} className="rounded-xl border border-zinc-200 p-5 bg-white">
        <Icon className="w-6 h-6 text-[#20A4B8]" />
        <h4 className="mt-3 font-semibold text-zinc-900">{title}</h4>
        <p className="text-sm text-zinc-600 mt-1">{text}</p>
      </div>
    ))}
  </div>
);

const Testimonials = () => (
  <div className="relative">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        { name: 'Emma C.', suburb: 'Norwood', text: 'Amazing results! The wine stain is completely gone and the carpets look new.', rating: 5 },
        { name: 'John B.', suburb: 'Glenelg', text: 'On time, friendly and super efficient. Highly recommended.', rating: 5 },
        { name: 'Sarah L.', suburb: 'Unley Park', text: 'Eco products that actually work. Great for our pets and kids.', rating: 5 },
        { name: 'Peter M.', suburb: 'North Adelaide', text: 'Booked in the morning and they came the same day. Outstanding!', rating: 5 },
      ].map((t, i) => (
        <div key={i} className="rounded-xl border border-zinc-200 p-5 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-zinc-900">{t.name}</p>
              <p className="text-xs text-zinc-500">{t.suburb}</p>
            </div>
            <div className="flex gap-0.5 text-[#20A4B8]" aria-label={`${t.rating} star rating`}>
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-700">“{t.text}”</p>
        </div>
      ))}
    </div>
    <div className="mt-4 text-sm text-zinc-600">★★★★★ Rated on Google</div>
  </div>
);

const Areas = () => (
  <div className="rounded-xl border border-zinc-200 overflow-hidden bg-white">
    <div className="p-5">
      <h3 className="text-xl font-semibold text-zinc-900">Serving Greater Adelaide</h3>
      <p className="text-sm text-zinc-600 mt-1">We cover: North Adelaide, Norwood, Unley Park, St Peters, Parkside, Malvern, Glenelg, Henley Beach, Prospect, Plympton.</p>
    </div>
    <iframe
      title="Adelaide Service Area"
      loading="lazy"
      className="w-full h-80 border-t"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13138.794719189792!2d138.593!3d-34.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced5a1a7bfc5%3A0x4033654628ec550!2sAdelaide%20SA!5e0!3m2!1sen!2sau!4v1700000000000"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

const FAQ = () => (
  <div className="space-y-3">
    {[
      { q: 'How long does cleaning take?', a: 'Average 2 hours depending on property size and services selected.' },
      { q: 'Can I walk on carpets after?', a: 'Wait approximately 4 hours for best results and to allow proper drying.' },
      { q: 'Do you move furniture?', a: 'Yes, we move light furniture at no extra cost. Heavy items like pianos are excluded.' },
      { q: 'What products do you use?', a: 'We use non-toxic, eco-friendly solutions that are safe for families and pets.' },
      { q: 'Do you offer same-day service?', a: 'Yes, subject to availability. Use the instant quote to check today’s slots.' },
    ].map((item, i) => (
      <details key={i} className="group rounded-lg border border-zinc-200 p-4 bg-white">
        <summary className="cursor-pointer list-none flex items-center justify-between">
          <span className="font-medium text-zinc-900">{item.q}</span>
          <span className="ml-4 text-[#20A4B8]">+</span>
        </summary>
        <p className="mt-2 text-sm text-zinc-700">{item.a}</p>
      </details>
    ))}
  </div>
);

const Footer = () => (
  <footer className="mt-16 border-t border-zinc-200 pt-10 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
      <div>
        <p className="text-lg font-semibold text-zinc-900">Wow Carpet Cleaning Adelaide</p>
        <p className="mt-2 text-sm text-zinc-600">ABN: 00 000 000 000</p>
        <p className="mt-1 text-sm text-zinc-600">Phone: 0400 000 000</p>
        <p className="mt-1 text-sm text-zinc-600">Email: hello@wowcarpetcleaningadelaide.com.au</p>
        <div className="mt-3 flex gap-3">
          <a aria-label="Facebook" href="#" className="p-2 rounded-full border border-zinc-200 text-zinc-700 hover:text-[#20A4B8]"><Facebook className="w-4 h-4"/></a>
          <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-zinc-200 text-zinc-700 hover:text-[#20A4B8]"><Instagram className="w-4 h-4"/></a>
        </div>
      </div>
      <div>
        <p className="font-semibold text-zinc-900">Quick Links</p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#quote" className="hover:underline">Booking</a></li>
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-zinc-900">Service Areas</p>
        <p className="mt-3 text-sm text-zinc-700">North Adelaide, Norwood, Unley Park, St Peters, Parkside, Malvern, Glenelg, Henley Beach, Prospect, Plympton</p>
      </div>
      <div>
        <p className="font-semibold text-zinc-900">Guarantee</p>
        <p className="mt-3 text-sm text-zinc-700">We stand by our 100% Satisfaction Guarantee. If you’re not thrilled, we’ll make it right.</p>
      </div>
    </div>
    <div className="mt-10 text-center text-sm text-zinc-500">© 2025 Wow Carpet Cleaning Adelaide</div>
  </footer>
);

const MainSections = () => {
  return (
    <>
      <section id="services" className="py-16 bg-zinc-50" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-title" className="text-2xl sm:text-3xl font-bold text-zinc-900">Our Services</h2>
          <p className="mt-2 text-zinc-600">Steam Cleaning, Dry Cleaning, Upholstery, Tile & Grout, Rugs, Commercial</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Steam Cleaning" price={50} description="Deep hot-water extraction for a thorough fibre refresh and sanitisation." img="https://images.unsplash.com/photo-1556228720-c32abdc9c5f7?q=80&w=1887&auto=format&fit=crop" />
            <ServiceCard title="Dry Cleaning" price={50} description="Low-moisture method ideal for quick-dry and delicate fibres." img="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1887&auto=format&fit=crop" />
            <ServiceCard title="Upholstery" price={70} description="Gentle treatment to lift stains and revive sofas, chairs and more." img="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop" />
            <ServiceCard title="Tile & Grout" price={100} description="High-pressure cleaning to brighten tiles and restore grout lines." img="https://images.unsplash.com/photo-1616593960669-4e5c7835b21b?q=80&w=1887&auto=format&fit=crop" />
            <ServiceCard title="Rugs" price={60} description="Specialised treatments for delicate and high-pile rugs." img="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1887&auto=format&fit=crop" />
            <ServiceCard title="Commercial" price={100} description="After-hours office and venue cleaning tailored to your business." img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1887&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="why-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-title" className="text-2xl sm:text-3xl font-bold text-zinc-900">Why Choose Us</h2>
          <div className="mt-8">
            <WhyUs />
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50" aria-labelledby="testimonials-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-title" className="text-2xl sm:text-3xl font-bold text-zinc-900">Happy Adelaide Customers</h2>
          <div className="mt-8">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="areas-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="areas-title" className="text-2xl sm:text-3xl font-bold text-zinc-900">Service Areas</h2>
          <div className="mt-8">
            <Areas />
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-zinc-50" aria-labelledby="faq-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-title" className="text-2xl sm:text-3xl font-bold text-zinc-900">FAQ</h2>
          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </section>

      <Footer />

      <div id="chat" />
      <script dangerouslySetInnerHTML={{ __html: `
        // Tawk.to / Tidio placeholder - instructions:
        // 1) Replace with your Tidio Public Key or Tawk property ID to enable chat widget.
        // Tidio example: 
        // (function() { var s=document.createElement('script'); s.src='//code.tidio.co/YOUR_PUBLIC_KEY.js'; s.async=true; document.body.appendChild(s); })();
      `}} />
    </>
  );
};

export default MainSections;
