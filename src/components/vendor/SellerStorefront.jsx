import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { ProductCard } from '../products/ProductCard';
import { formatRWF } from '../../utils/formatters';
import { ShieldCheck, Star, MapPin, Phone, Mail, Clock, Store } from 'lucide-react';

export const SellerStorefront = () => {
  const { selectedSeller, sellersList, products, setCurrentView } = useMarketplace();
  const seller = selectedSeller || sellersList[0];

  const sellerProducts = products.filter(p => p.sellerId === seller.id || p.sellerName === seller.name);

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      
      {/* Merchant Header Hero */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        border: '1px solid #E2E8F0',
        overflow: 'hidden',
        marginBottom: '2.5rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Banner */}
        <div style={{ height: '180px', backgroundColor: '#0A192F', position: 'relative' }}>
          {seller.banner && (
            <img src={seller.banner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          )}
        </div>

        {/* Store Profile Info */}
        <div style={{ padding: '1.75rem', position: 'relative', marginTop: '-50px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-end' }}>
            <img
              src={seller.avatar}
              alt={seller.name}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '16px',
                objectFit: 'cover',
                border: '4px solid #FFFFFF',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: '#FFFFFF'
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
                  {seller.name}
                </h1>
                {seller.verified && (
                  <span className="badge badge-green">
                    <ShieldCheck size={13} /> Verified Merchant
                  </span>
                )}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748B', maxWidth: '600px', marginTop: '4px' }}>
                {seller.description}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end', color: '#F59E0B' }}>
                <Star size={16} fill="#F59E0B" />
                <strong style={{ color: '#0F172A', fontSize: '1.1rem' }}>{seller.rating}</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>({seller.reviewsCount} customer reviews)</span>
            </div>

            <a href={`tel:${seller.phone}`} className="btn btn-outline btn-sm">
              <Phone size={14} /> Contact Seller
            </a>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div style={{
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid #E2E8F0',
          padding: '0.85rem 1.75rem',
          display: 'flex',
          gap: '2rem',
          fontSize: '0.8rem',
          color: '#475569',
          flexWrap: 'wrap'
        }}>
          <div><MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} color="#2563EB" /> Location: <strong>{seller.location}</strong></div>
          <div><Clock size={13} style={{ display: 'inline', marginRight: '4px' }} color="#16A34A" /> Dispatch Speed: <strong>{seller.shippingSpeed}</strong></div>
          <div><ShieldCheck size={13} style={{ display: 'inline', marginRight: '4px' }} color="#2563EB" /> TIN: <strong>{seller.tin}</strong></div>
          <div>Member Since: <strong>{seller.joinDate}</strong></div>
        </div>
      </div>

      {/* Merchant Products Catalog */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>
            Products from {seller.name} ({sellerProducts.length})
          </h2>
          <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
            Direct Rwanda Supermarket Escrow
          </span>
        </div>

        {sellerProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {sellerProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <p style={{ color: '#64748B' }}>No products currently listed by this merchant.</p>
          </div>
        )}
      </div>

    </div>
  );
};
