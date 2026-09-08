import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { IconRenderer } from '../common/IconRenderer';
import { ChevronRight, Sparkles } from 'lucide-react';

export const MegaMenu = ({ onClose }) => {
  const { categories, navigateToCategory } = useMarketplace();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = categories[activeCategoryIndex] || categories[0];

  return (
    <div className="mega-menu-overlay" onMouseLeave={onClose}>
      <div className="container" style={{ display: 'flex', gap: '2rem', height: '520px' }}>
        
        {/* Left Side: 47+ Category List with Quick Scroll */}
        <div style={{
          width: '320px',
          borderRight: '1px solid #E2E8F0',
          paddingRight: '1rem',
          overflowY: 'auto',
          height: '100%'
        }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
            All 47+ Categories ({categories.length})
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {categories.map((cat, index) => {
              const isSelected = activeCategoryIndex === index;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategoryIndex(index)}
                  onClick={() => {
                    navigateToCategory(cat);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? '#EFF6FF' : 'transparent',
                    color: isSelected ? '#2563EB' : '#1E293B',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <IconRenderer name={cat.icon} size={16} color={isSelected ? '#2563EB' : '#64748B'} />
                    <span>{cat.name}</span>
                  </div>
                  {cat.badge && (
                    <span className={`badge ${cat.badge.includes('Rwanda') ? 'badge-green' : 'badge-gold'}`} style={{ fontSize: '0.65rem' }}>
                      {cat.badge}
                    </span>
                  )}
                  {isSelected && <ChevronRight size={14} />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Category Subcategories & Visual Card */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconRenderer name={activeCategory.icon} size={22} color="#2563EB" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>{activeCategory.name}</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748B' }}>{activeCategory.description}</p>
              </div>
            </div>

            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                navigateToCategory(activeCategory);
                onClose();
              }}
            >
              Explore All {activeCategory.name} →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {activeCategory.subcategories.map((sub, i) => (
              <div
                key={i}
                onClick={() => {
                  navigateToCategory({ ...activeCategory, activeSub: sub });
                  onClose();
                }}
                style={{
                  padding: '10px 14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EFF6FF';
                  e.currentTarget.style.borderColor = '#93C5FD';
                  e.currentTarget.style.color = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.color = '#334155';
                }}
              >
                <span>{sub}</span>
                <ChevronRight size={13} opacity={0.6} />
              </div>
            ))}
          </div>

          {/* Category Highlight Visual Banner */}
          <div style={{
            marginTop: 'auto',
            padding: '1.25rem',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0F294A 0%, #1E40AF 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <span className="badge badge-green" style={{ marginBottom: '6px' }}>
                <Sparkles size={11} /> Home Market Guarantee
              </span>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '4px' }}>
                Verified Sellers & Direct Rwandan Supermarket Pricing
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                Same-day delivery across Kigali, and 24-48h nationwide coverage.
              </p>
            </div>
            <button
              className="btn btn-accent btn-sm"
              onClick={() => {
                navigateToCategory(activeCategory);
                onClose();
              }}
            >
              Shop Category
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
