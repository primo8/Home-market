import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import {
  Store,
  Layers,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Eye,
  ShieldCheck,
  Truck,
  Users
} from 'lucide-react';

export const SupermarketShowcase4D = () => {
  const { setCurrentView } = useMarketplace();
  const [activeAisle, setActiveAisle] = useState(0);

  const aisleShowcases = [
    {
      title: "Store Entrance & Welcome Facade",
      category: "Flagship Supermarket",
      image: "/image/images (4).jfif",
      caption: "Our official physical retail entrance in Kigali welcoming thousands of shoppers daily.",
      badge: "Real Store Front"
    },
    {
      title: "Home Decor & Floral Garden Aisle",
      category: "Home & Garden Living",
      image: "/image/images (1).jfif",
      caption: "Vibrant botanical displays, hanging garden decor, and home interior accents.",
      badge: "Aisle 3 • Home Decor"
    },
    {
      title: "Plushies, Kids & Gifting World",
      category: "Toys & Occasions",
      image: "/image/images (2).jfif",
      caption: "Rwanda's largest collection of huggable plushies, stuffed animals, and children's gifts.",
      badge: "Aisle 5 • Toys & Kids"
    },
    {
      title: "Ceramics, Pottery & Vases",
      category: "Kitchen & Dining",
      image: "/image/images (3).jfif",
      caption: "Curated artisan ceramic planters, porcelain vases, and contemporary dining ware.",
      badge: "Aisle 2 • Pottery"
    },
    {
      title: "Supermarket Shelving & Essentials",
      category: "Groceries & Daily Living",
      image: "/image/download2.jfif",
      caption: "Meticulously organized supermarket inventory ready for direct same-day dispatch across Rwanda.",
      badge: "Aisle 1 • Daily Essentials"
    }
  ];

  const currentAisle = aisleShowcases[activeAisle];

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #0A192F 0%, #0F294A 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 4D Ambient Background Lights */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1rem' }}>
            <Sparkles size={14} color="#22C55E" />
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.04em' }}>
              4D INTERACTIVE SUPERMARKET SHOWCASE
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
            A Real Supermarket in Rwanda. <br />
            <span style={{ color: '#34D399' }}>A National Scale Digital Marketplace.</span>
          </h2>

          <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: '1.6' }}>
            Unlike virtual-only storefronts, Home Market Supermarket operates physical retail hubs and warehouse fulfillment centres in Rwanda, ensuring guaranteed authenticity, real inventory, and rapid delivery.
          </p>
        </div>

        {/* 4D Interactive Viewport */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center', marginBottom: '3.5rem' }}>
          
          {/* 3D Perspective Card with Active Aisle Photo */}
          <div className="card-3d-wrap">
            <div className="card-3d-inner" style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              border: '2px solid rgba(255,255,255,0.15)',
              backgroundColor: '#0F172A',
              aspectRatio: '4 / 3'
            }}>
              <img
                src={currentAisle.image}
                alt={currentAisle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* 4D Glass Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,25,47,0.92) 0%, rgba(10,25,47,0.2) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2rem'
              }}>
                <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                  {currentAisle.badge}
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
                  {currentAisle.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#E2E8F0', lineHeight: '1.5' }}>
                  {currentAisle.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Aisle Selector & Key Supermarket Pillars */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              Select Aisle / Store Area To Inspect
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {aisleShowcases.map((aisle, idx) => {
                const isSelected = activeAisle === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveAisle(idx)}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '14px',
                      backgroundColor: isSelected ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.05)',
                      border: `1.5px solid ${isSelected ? '#38BDF8' : 'rgba(255,255,255,0.1)'}`,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: isSelected ? '#2563EB' : 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 800
                      }}>
                        {idx + 1}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? '#FFFFFF' : '#CBD5E1' }}>
                          {aisle.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{aisle.category}</div>
                      </div>
                    </div>

                    <div style={{ color: isSelected ? '#38BDF8' : '#64748B' }}>
                      <Eye size={18} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button to Full About Us Tour */}
            <button
              className="btn btn-accent btn-lg w-full"
              onClick={() => setCurrentView('about-us')}
            >
              <Store size={18} /> Explore Complete 4D Store Tour & Story →
            </button>
          </div>

        </div>

        {/* 4 Operations Highlights Counters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          padding: '2rem',
          borderRadius: '20px',
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#38BDF8', marginBottom: '2px' }}>50,000+</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Live Supermarket SKUs</div>
            <p style={{ fontSize: '0.785rem', color: '#94A3B8' }}>From daily food staples to high-end electronics</p>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#34D399', marginBottom: '2px' }}>100%</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Real Physical Stock</div>
            <p style={{ fontSize: '0.785rem', color: '#94A3B8' }}>Zero ghost listings or unverified stock</p>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#FBBF24', marginBottom: '2px' }}>2 - 4 Hours</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Kigali Express Dispatch</div>
            <p style={{ fontSize: '0.785rem', color: '#94A3B8' }}>Fleet of dispatch riders and vans</p>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#C084FC', marginBottom: '2px' }}>30 Districts</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Rwanda National Coverage</div>
            <p style={{ fontSize: '0.785rem', color: '#94A3B8' }}>From Musanze to Huye, Rubavu to Rusizi</p>
          </div>
        </div>

      </div>
    </section>
  );
};
