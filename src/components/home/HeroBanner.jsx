import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Zap,
  Sparkles,
  ShoppingBag,
  Store,
  Layers,
  MapPin
} from 'lucide-react';

export const HeroBanner = () => {
  const { setCurrentView, navigateToCategory, categories, currentDistrict } = useMarketplace();

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0A192F 0%, #0F294A 50%, #1E40AF 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      padding: '4.5rem 0 5rem 0'
    }}>
      {/* Subtle Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column: Value Proposition & CTAs */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1.25rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
              <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.04em' }}>
                RWANDA'S MARKETPLACE FOR EVERYTHING
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}>
              Everything You Need. <br />
              <span style={{
                background: 'linear-gradient(90deg, #60A5FA 0%, #34D399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                One Unified Marketplace.
              </span>
            </h1>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.65', color: '#CBD5E1', marginBottom: '2rem', maxWidth: '540px' }}>
              Discover, compare, and receive products and professional services from trusted sellers across all 30 districts of Rwanda. Direct supermarket pricing & same-day delivery.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button
                className="btn btn-accent btn-lg"
                onClick={() => setCurrentView('categories')}
              >
                <ShoppingBag size={20} /> Shop Now
              </button>

              <button
                className="btn btn-outline btn-lg"
                onClick={() => setCurrentView('categories')}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF' }}
              >
                Explore 47+ Categories <ArrowRight size={18} />
              </button>
            </div>

            {/* Key Trust Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF' }}>47+</div>
                <div style={{ fontSize: '0.785rem', color: '#94A3B8' }}>Main Categories</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#22C55E' }}>30/30</div>
                <div style={{ fontSize: '0.785rem', color: '#94A3B8' }}>Rwanda Districts</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#38BDF8' }}>100%</div>
                <div style={{ fontSize: '0.785rem', color: '#94A3B8' }}>MoMo Protected</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D/4D Interactive Card Showcase */}
          <div className="card-3d-wrap">
            <div className="card-3d-inner" style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '24px',
              padding: '1.75rem',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
            }}>
              
              {/* Store Entrance Feature Highlight */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', marginBottom: '1.25rem', aspectRatio: '16 / 9' }}>
                <img
                  src="/image/images (4).jfif"
                  alt="Home Market Supermarket Rwanda Flagship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,25,47,0.85) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1rem'
                }}>
                  <div className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '4px' }}>
                    Physical Flagship + Digital Scale
                  </div>
                  <strong style={{ color: '#FFFFFF', fontSize: '1rem' }}>
                    Home Market Supermarket Flagship Store
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>
                    Kigali, Rwanda • Serving nationwide online shoppers
                  </span>
                </div>
              </div>

              {/* Floating 4D Info Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                <div style={{
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Truck size={20} color="#34D399" />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>Same-Day Kigali</div>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>2-4h to your door</div>
                  </div>
                </div>

                <div style={{
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Zap size={20} color="#FBBF24" />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>MTN MoMo *182#</div>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Instant Escrow Pay</div>
                  </div>
                </div>
              </div>

              {/* 4D Store Tour CTA */}
              <button
                onClick={() => setCurrentView('about-us')}
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(37, 99, 235, 0.3)',
                  border: '1px solid rgba(96, 165, 250, 0.3)',
                  color: '#93C5FD',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.3)'}
              >
                <Store size={15} color="#38BDF8" /> Enter 4D Supermarket Visual Tour →
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
