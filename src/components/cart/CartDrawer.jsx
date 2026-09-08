import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF } from '../../utils/formatters';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateCartQuantity,
    removeFromCart,
    cartSubtotal,
    cartItemCount,
    setCurrentView,
    currentDistrict
  } = useMarketplace();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 35000;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 99999,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        backgroundColor: '#FFFFFF',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.2)',
        animation: 'slideInRight 0.3s ease'
      }}>
        
        {/* Header */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="#2563EB" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>
              Your Shopping Cart ({cartItemCount})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{ padding: '6px', borderRadius: '50%', backgroundColor: '#F1F5F9', color: '#64748B', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator for Kigali */}
        <div style={{ padding: '0.85rem 1.5rem', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.785rem', marginBottom: '6px' }}>
            <span style={{ color: '#475569' }}>
              {cartSubtotal >= freeShippingThreshold ? (
                <strong style={{ color: '#16A34A' }}>🎉 You unlocked Free Delivery in Kigali!</strong>
              ) : (
                <>Add <strong>{formatRWF(freeShippingThreshold - cartSubtotal)}</strong> more for Free Kigali Delivery</>
              )}
            </span>
            <span style={{ fontWeight: 700, color: '#2563EB' }}>{progressPercent}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: progressPercent === 100 ? '#22C55E' : '#2563EB', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
          {cart.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #F1F5F9'
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
                  />

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0F172A', lineHeight: 1.3, marginBottom: '4px' }}>
                      {product.name}
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '6px' }}>
                      {product.sellerName}
                    </span>
                    <strong style={{ fontSize: '0.95rem', color: '#0F294A', marginBottom: '8px' }}>
                      {formatRWF(product.price * quantity)}
                    </strong>

                    {/* Quantity Selector & Trash */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #CBD5E1', borderRadius: '6px', overflow: 'hidden' }}>
                        <button
                          onClick={() => updateCartQuantity(product.id, -1)}
                          style={{ padding: '2px 8px', backgroundColor: '#F8FAFC', fontWeight: 700, fontSize: '0.9rem' }}
                        >
                          -
                        </button>
                        <span style={{ padding: '0 8px', fontSize: '0.85rem', fontWeight: 700 }}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(product.id, 1)}
                          style={{ padding: '2px 8px', backgroundColor: '#F8FAFC', fontWeight: 700, fontSize: '0.9rem' }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        style={{ color: '#EF4444', padding: '4px', cursor: 'pointer' }}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <ShoppingBag size={28} color="#94A3B8" />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '6px' }}>Your cart is empty</h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem' }}>
                Explore 47+ categories and add products from verified Rwandan sellers.
              </p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setIsCartOpen(false);
                  setCurrentView('categories');
                }}
              >
                Start Shopping Now
              </button>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem', color: '#64748B' }}>
              <span>Subtotal:</span>
              <strong style={{ color: '#0F172A', fontSize: '1rem' }}>{formatRWF(cartSubtotal)}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.8rem', color: '#64748B' }}>
              <span>Delivering to {currentDistrict.name}:</span>
              <span>{cartSubtotal >= freeShippingThreshold && currentDistrict.province === 'Kigali City' ? <strong style={{ color: '#16A34A' }}>FREE</strong> : formatRWF(currentDistrict.deliveryFee)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', paddingTop: '8px', borderTop: '1px solid #F1F5F9', fontSize: '1.15rem' }}>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>Estimated Total:</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#0F294A' }}>
                {formatRWF(cartSubtotal + (cartSubtotal >= freeShippingThreshold && currentDistrict.province === 'Kigali City' ? 0 : currentDistrict.deliveryFee))}
              </span>
            </div>

            <button
              className="btn btn-accent btn-lg w-full"
              onClick={handleProceedToCheckout}
              style={{ gap: '8px' }}
            >
              Proceed to Rwanda Checkout <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px', fontSize: '0.75rem', color: '#64748B' }}>
              <ShieldCheck size={14} color="#16A34A" /> MTN MoMo & Airtel Escrow Guarantee
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
