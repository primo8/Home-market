import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { ProductCard } from '../products/ProductCard';
import { Award, ArrowRight, Heart, Sparkles } from 'lucide-react';

export const RwandaCrafts = () => {
  const { products, categories, navigateToCategory } = useMarketplace();

  const rwandaProducts = products.filter(p => p.category === "Local & 'Made in Rwanda'" || p.tags.includes('made in rwanda'));
  const craftCategory = categories.find(c => c.slug === 'made-in-rwanda') || categories[0];

  return (
    <section style={{
      padding: '4.5rem 0',
      background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)',
      borderTop: '1px solid #DCFCE7',
      borderBottom: '1px solid #DCFCE7'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '20px', backgroundColor: '#DCFCE7', color: '#15803D', fontSize: '0.8rem', fontWeight: 800, marginBottom: '8px' }}>
              <Award size={14} /> PROUDLY MADE IN RWANDA
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
              Rwandan Heritage, Crafts & Agribusiness
            </h2>
            <p style={{ fontSize: '0.925rem', color: '#475569', marginTop: '6px', maxWidth: '640px' }}>
              Direct access to verified local cooperatives: authentic handwoven Agaseke peace baskets, volcanic mountain Arabica coffee, Imigongo art, and tailored kitenge fashion.
            </p>
          </div>

          <button
            className="btn btn-accent"
            onClick={() => navigateToCategory(craftCategory)}
          >
            Explore Made in Rwanda Collection <ArrowRight size={16} />
          </button>
        </div>

        {/* Featured Products */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {rwandaProducts.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

      </div>
    </section>
  );
};
