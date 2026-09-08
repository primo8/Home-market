import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { ProductCard } from '../products/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategorySection = ({ title, subtitle, categoryName, badgeText, bgLight = false }) => {
  const { products, categories, navigateToCategory } = useMarketplace();

  const matchingCategory = categories.find(c => c.name === categoryName) || categories[0];
  const categoryProducts = products.filter(p => p.category === categoryName);

  if (!categoryProducts.length) return null;

  return (
    <section style={{ padding: '3.5rem 0', backgroundColor: bgLight ? '#F8FAFC' : '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            {badgeText && (
              <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
                <Sparkles size={11} /> {badgeText}
              </span>
            )}
            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
              {title}
            </h2>
            {subtitle && (
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '4px' }}>
                {subtitle}
              </p>
            )}
          </div>

          <button
            className="btn btn-outline btn-sm"
            onClick={() => navigateToCategory(matchingCategory)}
          >
            Explore {matchingCategory.name} <ArrowRight size={15} />
          </button>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}>
          {categoryProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
