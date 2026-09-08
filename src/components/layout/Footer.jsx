import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import {
  ShieldCheck,
  Truck,
  Smartphone,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Heart,
  TrendingUp,
  Store,
  ExternalLink
} from 'lucide-react';

export const Footer = () => {
  const { setCurrentView, navigateToCategory, categories } = useMarketplace();

  return (
    <footer style={{ backgroundColor: '#0A192F', color: '#94A3B8', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      
      {/* Trust & Value Pillars */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Truck size={24} color="#38BDF8" />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '2px' }}>Nationwide Delivery</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Same-day in Kigali, 24-48h in all 30 districts</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={24} color="#22C55E" />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '2px' }}>Mobile Money Escrow</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Instant MTN MoMo (*182#) & Airtel Money</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={24} color="#FBBF24" />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '2px' }}>100% Genuine Products</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Supermarket direct & verified Rwandan merchants</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Headphones size={24} color="#C084FC" />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '2px' }}>Dedicated Kigali Support</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Kinyarwanda, English & French assistance</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Directory Links */}
      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
          
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <img
                src="/image/download.jfif"
                alt="Home Market Supermarket"
                style={{ height: '42px', width: 'auto', borderRadius: '6px' }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                HOME MARKET
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#94A3B8', marginBottom: '1.25rem' }}>
              Rwanda's Marketplace for Everything. Connecting customers, local producers, and verified sellers across all 30 districts through unified physical & digital retail infrastructure.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.825rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="#22C55E" />
                <span>KN 3 Rd, Commercial District, Kigali, Rwanda</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#38BDF8" />
                <span>+250 788 000 123 / +250 788 000 124</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#FBBF24" />
                <span>support@homemarket.rw</span>
              </div>
            </div>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Popular Categories
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              {categories.slice(0, 7).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigateToCategory(cat)}
                  style={{ textAlign: 'left', color: '#94A3B8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                >
                  {cat.name}
                </button>
              ))}
              <button
                onClick={() => setCurrentView('categories')}
                style={{ textAlign: 'left', color: '#22C55E', fontWeight: 700, marginTop: '4px' }}
              >
                View all 47+ categories →
              </button>
            </div>
          </div>

          {/* Customer Care & Policies */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Customer Care
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <button onClick={() => setCurrentView('account')} style={{ textAlign: 'left', color: '#94A3B8' }}>Track My Order</button>
              <button onClick={() => setCurrentView('account')} style={{ textAlign: 'left', color: '#94A3B8' }}>Returns & Refund Policy</button>
              <button onClick={() => setCurrentView('about-us')} style={{ textAlign: 'left', color: '#94A3B8' }}>4D Store Tour & Locations</button>
              <button onClick={() => setCurrentView('services')} style={{ textAlign: 'left', color: '#94A3B8' }}>Home & Tech Services</button>
              <button onClick={() => setCurrentView('account')} style={{ textAlign: 'left', color: '#94A3B8' }}>Buyer Protection FAQ</button>
              <span style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '6px' }}>
                *All OTC health products strictly adhere to Rwanda FDA & MOH regulations.
              </span>
            </div>
          </div>

          {/* Business & Partners */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Business & Portals
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <button
                onClick={() => setCurrentView('become-seller')}
                style={{ textAlign: 'left', color: '#38BDF8', fontWeight: 600 }}
              >
                Become a Verified Seller
              </button>
              <button
                onClick={() => setCurrentView('seller-dashboard')}
                style={{ textAlign: 'left', color: '#94A3B8' }}
              >
                Merchant Portal Dashboard
              </button>
              <button
                onClick={() => setCurrentView('investor-hub')}
                style={{ textAlign: 'left', color: '#FBBF24', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <TrendingUp size={14} /> Investor Hub & Scalability
              </button>
              <button
                onClick={() => setCurrentView('admin-dashboard')}
                style={{ textAlign: 'left', color: '#94A3B8' }}
              >
                Supermarket Admin Engine
              </button>
              <button
                onClick={() => navigateToCategory(categories.find(c => c.slug === 'wholesale-b2b') || categories[0])}
                style={{ textAlign: 'left', color: '#94A3B8' }}
              >
                B2B Wholesale & Supply
              </button>
            </div>
          </div>

        </div>

        {/* Rwanda Payment Methods Banner */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Integrated Rwanda Payments:</span>
            <span className="badge badge-gold" style={{ fontSize: '0.75rem', fontWeight: 800 }}>MTN MoMo (*182#)</span>
            <span className="badge badge-red" style={{ fontSize: '0.75rem', fontWeight: 800 }}>Airtel Money (*500#)</span>
            <span className="badge badge-blue" style={{ fontSize: '0.75rem', fontWeight: 800 }}>Bank of Kigali / I&M</span>
            <span className="badge badge-green" style={{ fontSize: '0.75rem', fontWeight: 800 }}>Visa / Mastercard</span>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
            © {new Date().getFullYear()} Home Market Supermarket Ltd. All rights reserved. Registered in Rwanda.
          </div>
        </div>
      </div>
    </footer>
  );
};
