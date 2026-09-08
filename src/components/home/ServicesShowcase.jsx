import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Wrench, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Clock, MapPin } from 'lucide-react';

export const ServicesShowcase = () => {
  const { setCurrentView } = useMarketplace();

  const services = [
    {
      id: "srv-1",
      title: "Plumbing & Pipe Installation",
      provider: "Kigali Master Plumbers Ltd",
      rating: 4.9,
      reviews: 84,
      startingPrice: 15000,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      district: "Kigali City (All Districts)"
    },
    {
      id: "srv-2",
      title: "Certified Electricians & Solar Setup",
      provider: "Rwanda ElectroPro Solutions",
      rating: 4.8,
      reviews: 120,
      startingPrice: 20000,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
      district: "Gasabo, Kicukiro, Nyarugenge"
    },
    {
      id: "srv-3",
      title: "Home & Apartment Deep Cleaning",
      provider: "Kigali Clean & Shine Services",
      rating: 5.0,
      reviews: 210,
      startingPrice: 25000,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      district: "Kigali & Gisenyi"
    },
    {
      id: "srv-4",
      title: "Mobile Doorstep Car Wash & Detailing",
      provider: "Eco Kigali Auto Spa",
      rating: 4.9,
      reviews: 145,
      startingPrice: 10000,
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80",
      district: "At Your Doorstep / Home"
    }
  ];

  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
              <Wrench size={11} /> Verified Rwandan Professionals
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A' }}>
              On-Demand Services & Home Maintenance
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginTop: '4px' }}>
              Book vetted plumbers, electricians, cleaners, and automotive technicians with transparent pricing.
            </p>
          </div>

          <button
            className="btn btn-outline"
            onClick={() => setCurrentView('services')}
          >
            Explore All Services <ArrowRight size={16} />
          </button>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {services.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setCurrentView('services')}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-green" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <ShieldCheck size={11} /> Vetted Pro
                </span>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                  {srv.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '8px' }}>
                  by {srv.provider}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.785rem', color: '#475569', marginBottom: '12px' }}>
                  <MapPin size={13} color="#2563EB" /> {srv.district}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Starting from</div>
                    <strong style={{ fontSize: '1rem', color: '#0F294A' }}>{srv.startingPrice.toLocaleString()} RWF</strong>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
