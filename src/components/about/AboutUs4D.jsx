import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import {
  Store,
  Layers,
  Sparkles,
  ShieldCheck,
  Truck,
  Users,
  Award,
  ArrowRight,
  Eye,
  MapPin,
  TrendingUp,
  Heart
} from 'lucide-react';

export const AboutUs4D = () => {
  const { setCurrentView } = useMarketplace();
  const [selectedTourIndex, setSelectedTourIndex] = useState(0);

  const virtualTourStops = [
    {
      id: "facade",
      title: "1. Store Entrance & Welcome Facade",
      subtitle: "The Physical Retail Anchor in Kigali",
      image: "/image/images (4).jfif",
      description: "Our physical flagship supermarket in Kigali welcomes over 3,000 daily foot-traffic visitors while simultaneously functioning as the central automated micro-fulfillment hub for nationwide digital orders.",
      stats: "Flagship Retail + Automated Dispatch",
      tags: ["Entrance", "3D Signage", "Customer Welcoming"]
    },
    {
      id: "flowers",
      title: "2. Botanical & Home Living Aisle",
      subtitle: "Aisle 3 • Home & Living",
      image: "/image/images (1).jfif",
      description: "Vibrant botanical displays, hanging garden decor, artificial plants, and living room aesthetics curated from top regional and international suppliers.",
      stats: "Over 4,500 Home Decor SKUs",
      tags: ["Floral Decor", "Greenery", "Home Accents"]
    },
    {
      id: "plushies",
      title: "3. Plushie World & Children's Gifting",
      subtitle: "Aisle 5 • Toys & Family",
      image: "/image/images (2).jfif",
      description: "Rwanda's favorite gifting destination with premium giant teddy bears, soft anime plushies, hypoallergenic baby toys, and birthday surprise hampers.",
      stats: "100% Hypoallergenic Certified",
      tags: ["Giant Plushies", "Kids Gifting", "Family Shopping"]
    },
    {
      id: "ceramics",
      title: "4. Handcrafted Ceramics & Modern Pottery",
      subtitle: "Aisle 2 • Dining & Kitchen",
      image: "/image/images (3).jfif",
      description: "Artisan pottery, porcelain dish sets, gold-accented dinnerware, and ornamental planters supporting local Rwandan craftsmanship alongside modern luxury pieces.",
      stats: "Master Craftsmen Cooperatives",
      tags: ["Ceramics", "Vases", "Kitchen Elegance"]
    },
    {
      id: "lifestyle",
      title: "5. Lifestyle, Fashion & Personal Care",
      subtitle: "Aisle 7 • Lifestyle Essentials",
      image: "/image/images.jfif",
      description: "Shoppers exploring our expansive fashion accessories, eyewear, travel gear, and personal care products with direct barcode digital checkout.",
      stats: "Same-Day Kigali Express",
      tags: ["Accessories", "Personal Care", "Lifestyle"]
    }
  ];

  const currentStop = virtualTourStops[selectedTourIndex];

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      
      {/* 4D Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0A192F 0%, #0F294A 50%, #1E40AF 100%)',
        color: '#FFFFFF',
        padding: '5rem 0 6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', marginBottom: '1.25rem' }}>
              <Sparkles size={14} color="#22C55E" />
              <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.04em' }}>
                THE HOME MARKET SUPERMARKET STORY
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Bridging Real Physical Supermarkets <br />
              <span style={{ color: '#34D399' }}>With Rwanda’s Digital Future.</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Home Market Supermarket was founded with a singular mission: to make everyday discovery, reliable shopping, and transparent commerce effortless for every household and business in Rwanda.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-accent btn-lg"
                onClick={() => {
                  const el = document.getElementById('tour-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Eye size={18} /> Launch 4D Supermarket Tour
              </button>

              <button
                className="btn btn-outline btn-lg"
                onClick={() => setCurrentView('categories')}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF' }}
              >
                Explore 47+ Categories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Our Business Model */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            
            <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Store size={26} color="#2563EB" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                Physical Foundation
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                We operate large-format retail supermarket stores in Kigali where customers touch, feel, and verify our curated collections.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Layers size={26} color="#16A34A" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                47+ Scalable Categories
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                From fresh Musanze produce to laptops, home appliances, construction materials, and verified services — all under one unified roof.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Truck size={26} color="#D97706" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                Rwanda-Wide Logistics
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                Our dedicated dispatch fleet delivers same-day in Kigali (Gasabo, Kicukiro, Nyarugenge) and within 24-48 hours across all 30 districts.
              </p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={26} color="#9333EA" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                100% MoMo Escrow
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                Frictionless payment via MTN Mobile Money (*182#) and Airtel Money. Funds are safely held until customers inspect their orders.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4D Interactive Virtual Supermarket Tour Section */}
      <section id="tour-section" style={{ padding: '5rem 0', backgroundColor: '#0F294A', color: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-green" style={{ marginBottom: '8px' }}>
              Interactive 4D Retail Experience
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px' }}>
              Explore Our Physical Kigali Supermarket Hub
            </h2>
            <p style={{ fontSize: '1rem', color: '#CBD5E1' }}>
              Click on each store area to experience our real physical retail operations, aisles, and authentic customer community in Kigali.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* 3D Visual Tilt Viewport */}
            <div className="card-3d-wrap">
              <div className="card-3d-inner" style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.6)',
                backgroundColor: '#0A192F',
                aspectRatio: '4 / 3',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                <img
                  src={currentStop.image}
                  alt={currentStop.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.3) 50%, transparent 100%)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                    {currentStop.tags.map((t, i) => (
                      <span key={i} className="badge badge-blue" style={{ fontSize: '0.65rem' }}>{t}</span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '6px' }}>
                    {currentStop.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#E2E8F0', lineHeight: '1.5', marginBottom: '12px' }}>
                    {currentStop.description}
                  </p>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#34D399', fontWeight: 700 }}>
                    <Sparkles size={14} /> {currentStop.stats}
                  </div>
                </div>
              </div>
            </div>

            {/* Stops Selector */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {virtualTourStops.map((stop, index) => {
                  const isSelected = selectedTourIndex === index;
                  return (
                    <div
                      key={stop.id}
                      onClick={() => setSelectedTourIndex(index)}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '16px',
                        backgroundColor: isSelected ? 'rgba(37,99,235,0.25)' : 'rgba(255,255,255,0.05)',
                        border: `1.5px solid ${isSelected ? '#38BDF8' : 'rgba(255,255,255,0.1)'}`,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: isSelected ? '#2563EB' : 'rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '1rem',
                          color: '#FFFFFF'
                        }}>
                          0{index + 1}
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '1rem', color: isSelected ? '#FFFFFF' : '#CBD5E1' }}>
                            {stop.title}
                          </strong>
                          <span style={{ fontSize: '0.785rem', color: '#94A3B8' }}>{stop.subtitle}</span>
                        </div>
                      </div>

                      <Eye size={18} color={isSelected ? '#38BDF8' : '#64748B'} />
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                  <MapPin size={16} /> Physical Store Location:
                </div>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                  KN 3 Rd, Commercial District, Kigali, Rwanda. Open daily from 7:00 AM to 10:00 PM.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership & Vision Call to Action */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem' }}>
            Ready to Experience Rwanda's New Standard of Commerce?
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: '1.6', marginBottom: '2rem' }}>
            Join thousands of smart shoppers and verified Rwandan vendors who buy, sell, and grow on Home Market Supermarket every day.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => setCurrentView('categories')}>
              Start Shopping Now
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => setCurrentView('become-seller')}>
              Register as a Seller
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
