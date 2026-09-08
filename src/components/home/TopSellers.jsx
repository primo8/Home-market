import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Store, ShieldCheck, Star, ArrowRight, MapPin } from 'lucide-react';

export const TopSellers = () => {
  const { sellersList, navigateToSeller, setCurrentView } = useMarketplace();

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-green" style={{ marginBottom: '6px' }}>
              <ShieldCheck size={11} /> Verified Merchant Ecosystem
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A' }}>
              Top Rwandan Sellers & Supermarket Hubs
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginTop: '4px' }}>
              Directly supporting registered Rwandan enterprises, authorized brand importers, and local farm cooperatives.
            </p>
          </div>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => setCurrentView('become-seller')}
          >
            + Register as a Seller
          </button>
        </div>

        {/* Sellers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {sellersList.map((seller) => (
            <div
              key={seller.id}
              onClick={() => navigateToSeller(seller)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = '#93C5FD';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #EFF6FF' }}
                />
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {seller.name}
                    {seller.verified && <ShieldCheck size={16} color="#16A34A" />}
                  </h3>
                  <span className="badge badge-blue" style={{ fontSize: '0.65rem' }}>
                    {seller.badge}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: '1.5', marginBottom: '1.25rem', flex: 1 }}>
                {seller.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '12px', fontSize: '0.8rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B' }}>
                  <Star size={14} fill="#F59E0B" />
                  <strong style={{ color: '#0F172A' }}>{seller.rating}</strong> ({seller.reviewsCount})
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} color="#2563EB" /> {seller.location.split(',')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
