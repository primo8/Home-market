import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF } from '../../utils/formatters';
import { X, Star, ShoppingCart, Eye, Truck, ShieldCheck, Heart } from 'lucide-react';

export const QuickViewModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    viewProductDetails,
    toggleWishlist,
    isInWishlist
  } = useMarketplace();

  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(5px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      }}>
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F172A',
            zIndex: 10,
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Product Image */}
        <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={quickViewProduct.images[0]}
            alt={quickViewProduct.name}
            style={{ maxHeight: '320px', objectFit: 'contain', borderRadius: '12px' }}
          />
        </div>

        {/* Product Brief */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <span className="badge badge-blue" style={{ marginBottom: '8px', alignSelf: 'flex-start' }}>
            {quickViewProduct.category}
          </span>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
            {quickViewProduct.name}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', color: '#F59E0B' }}>
              <Star size={14} fill="#F59E0B" />
              <strong style={{ marginLeft: '4px', color: '#0F172A' }}>{quickViewProduct.rating}</strong>
            </div>
            <span style={{ color: '#64748B' }}>({quickViewProduct.reviewsCount} reviews)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#0F294A' }}>
              {formatRWF(quickViewProduct.price)}
            </span>
            {quickViewProduct.originalPrice > quickViewProduct.price && (
              <span style={{ fontSize: '0.95rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                {formatRWF(quickViewProduct.originalPrice)}
              </span>
            )}
          </div>

          <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            {quickViewProduct.description.slice(0, 160)}...
          </p>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #CBD5E1', borderRadius: '8px', overflow: 'hidden' }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '6px 12px', background: '#F8FAFC' }}>-</button>
              <span style={{ padding: '0 12px', fontWeight: 700 }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ padding: '6px 12px', background: '#F8FAFC' }}>+</button>
            </div>

            <button
              className="btn btn-primary"
              style={{ flex: 1 }}
              onClick={() => {
                addToCart(quickViewProduct, qty);
                setQuickViewProduct(null);
              }}
            >
              <ShoppingCart size={16} /> Add to Cart
            </button>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
            <button
              onClick={() => {
                viewProductDetails(quickViewProduct);
                setQuickViewProduct(null);
              }}
              style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2563EB', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Eye size={15} /> View Full Specifications & Reviews →
            </button>

            <button
              onClick={() => toggleWishlist(quickViewProduct.id)}
              style={{ color: isFavorited ? '#EF4444' : '#64748B' }}
            >
              <Heart size={18} fill={isFavorited ? '#EF4444' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
