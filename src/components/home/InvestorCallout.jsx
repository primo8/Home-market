import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { TrendingUp, ArrowRight, ShieldCheck, Database, Smartphone, Globe, Sparkles } from 'lucide-react';

export const InvestorCallout = () => {
  const { setCurrentView, setActiveRole } = useMarketplace();

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #0A192F 0%, #0F294A 50%, #1E40AF 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 14px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#38BDF8', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>
              <TrendingUp size={14} /> INVESTOR STRATEGY & SCALABILITY
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Building the Digital Commerce Infrastructure for Rwanda.
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: '1.65', marginBottom: '2rem' }}>
              Home Market Supermarket bridges physical retail excellence with a high-margin multi-vendor marketplace platform. We solve the trust, last-mile delivery, and payment friction across East Africa’s fastest growing economy.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                className="btn btn-accent btn-lg"
                onClick={() => {
                  setActiveRole('investor');
                  setCurrentView('investor-hub');
                }}
              >
                <TrendingUp size={18} /> Open Investor Deck & Metrics →
              </button>

              <button
                className="btn btn-outline btn-lg"
                onClick={() => setCurrentView('about-us')}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF' }}
              >
                View 4D Store Showcase
              </button>
            </div>
          </div>

          {/* Pillars Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            
            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Database size={20} color="#38BDF8" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>47+ Categories</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Massive SKU breadth scaling beyond traditional grocery retail.</p>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Smartphone size={20} color="#22C55E" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>MTN MoMo Escrow</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Frictionless mobile payments customized for Rwandan consumers.</p>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={20} color="#FBBF24" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>Physical Trust</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Flagship supermarket hubs serving as local fulfillment anchors.</p>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(192,132,252,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Globe size={20} color="#C084FC" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>EAC Scalability</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Software engine designed for rapid pan-East African expansion.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
