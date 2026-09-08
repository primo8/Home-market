import React, { useState, useEffect } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { ProductCard } from '../products/ProductCard';
import { Flame, Clock, ArrowRight, Zap } from 'lucide-react';

export const FlashDeals = () => {
  const { products, setCurrentView } = useMarketplace();
  
  // Flash deal items
  const flashProducts = products.filter(p => p.flashDeal || p.discountPercentage >= 15);

  // Live countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!flashProducts.length) return null;

  return (
    <section style={{ padding: '3.5rem 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Flash Deals Header Bar */}
        <div style={{
          backgroundColor: '#0F294A',
          borderRadius: '16px',
          padding: '1.25rem 1.75rem',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Flame size={24} color="#FFFFFF" />
            </div>
            <div>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 800 }}>
                Lightning Flash Deals
              </h2>
              <p style={{ fontSize: '0.825rem', color: '#94A3B8' }}>
                Massive discounts on top Rwandan tech, groceries & home appliances.
              </p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={16} color="#FBBF24" /> Ends In:
            </span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '6px 10px', borderRadius: '6px', fontWeight: 800, fontSize: '0.95rem' }}>
                {String(timeLeft.hours).padStart(2, '0')}h
              </div>
              <span style={{ alignSelf: 'center', fontWeight: 800 }}>:</span>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '6px 10px', borderRadius: '6px', fontWeight: 800, fontSize: '0.95rem' }}>
                {String(timeLeft.minutes).padStart(2, '0')}m
              </div>
              <span style={{ alignSelf: 'center', fontWeight: 800 }}>:</span>
              <div style={{ backgroundColor: '#EF4444', padding: '6px 10px', borderRadius: '6px', fontWeight: 800, fontSize: '0.95rem' }}>
                {String(timeLeft.seconds).padStart(2, '0')}s
              </div>
            </div>
          </div>
        </div>

        {/* Deals Products Grid: 3 Cards in 1 Row */}
        <div className="product-grid-3">
          {flashProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
