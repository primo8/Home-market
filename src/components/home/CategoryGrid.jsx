import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { IconRenderer } from '../common/IconRenderer';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategoryGrid = () => {
  const { categories, navigateToCategory, setCurrentView } = useMarketplace();

  // Show top featured categories on homepage
  const featuredCategories = categories.filter(c => c.featured).slice(0, 12);

  return (
    <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2563EB', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
              <Sparkles size={14} /> Seamless Category Discovery
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>
              Explore Over 47+ Marketplace Categories
            </h2>
          </div>

          <button
            className="btn btn-outline btn-sm"
            onClick={() => setCurrentView('categories')}
          >
            View All 47+ Categories <ArrowRight size={15} />
          </button>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.25rem'
        }}>
          {featuredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateToCategory(cat)}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '1.25rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#93C5FD';
                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(37,99,235,0.12)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
            >
              {cat.badge && (
                <span className={`badge ${cat.badge.includes('Rwanda') ? 'badge-green' : 'badge-blue'}`} style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '0.625rem' }}>
                  {cat.badge}
                </span>
              )}

              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                backgroundColor: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.85rem'
              }}>
                <IconRenderer name={cat.icon} size={26} color="#2563EB" />
              </div>

              <h3 style={{ fontSize: '0.925rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px', lineHeight: 1.25 }}>
                {cat.name}
              </h3>

              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                {cat.subcategories.length} Subcategories
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
