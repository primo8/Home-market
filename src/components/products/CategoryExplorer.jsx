import React, { useState, useMemo } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { ProductCard } from './ProductCard';
import { formatRWF } from '../../utils/formatters';
import { rwandaDistricts } from '../../data/locations';
import { IconRenderer } from '../common/IconRenderer';
import {
  SlidersHorizontal,
  X,
  Star,
  Check,
  ChevronDown,
  Sparkles,
  Truck,
  RotateCcw,
  Search
} from 'lucide-react';

export const CategoryExplorer = () => {
  const {
    categories,
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    searchFilterCategory,
    setSearchFilterCategory,
    navigateToCategory
  } = useMarketplace();

  // Local Filter States
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1500000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [onlyExpress, setOnlyExpress] = useState(false);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState('popular'); // 'popular' | 'price-low' | 'price-high' | 'rating'
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Active category object or null
  const activeCat = selectedCategory || (searchFilterCategory !== 'all' ? categories.find(c => c.name === searchFilterCategory) : null);

  // Filter & Sort Pipeline
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category filter
      if (activeCat && item.category !== activeCat.name) {
        return false;
      }
      // Subcategory filter
      if (selectedSubCategory !== 'all' && item.subCategory !== selectedSubCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesCat && !matchesTags) return false;
      }
      // Price filter
      if (item.price > maxPrice) return false;
      // Rating filter
      if (selectedRating > 0 && item.rating < selectedRating) return false;
      // Express delivery filter
      if (onlyExpress && !item.isExpressDelivery) return false;
      // In stock filter
      if (onlyInStock && item.stock <= 0) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount; // 'popular'
    });
  }, [products, activeCat, selectedSubCategory, searchQuery, maxPrice, selectedRating, onlyExpress, onlyInStock, sortBy]);

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchFilterCategory('all');
    setSelectedSubCategory('all');
    setSearchQuery('');
    setMaxPrice(1500000);
    setSelectedRating(0);
    setOnlyExpress(false);
    setOnlyInStock(false);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      
      {/* Category Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0A192F 0%, #1E40AF 100%)',
        borderRadius: '16px',
        padding: '2.5rem',
        color: '#FFFFFF',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge badge-green">
              {activeCat ? activeCat.name : '47+ Marketplace Categories'}
            </span>
            {searchQuery && (
              <span className="badge badge-blue">
                Search: "{searchQuery}"
              </span>
            )}
          </div>

          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
            {activeCat ? activeCat.name : 'Discover Rwanda’s Largest Product Catalog'}
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: '1.6' }}>
            {activeCat ? activeCat.description : 'Browse through 47+ verified categories, from fresh local produce to top electronics, home appliances, and Rwandan artisan crafts.'}
          </p>

          {/* Subcategory quick pills */}
          {activeCat && activeCat.subcategories.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.25rem' }}>
              <button
                onClick={() => setSelectedSubCategory('all')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: selectedSubCategory === 'all' ? '#22C55E' : 'rgba(255,255,255,0.12)',
                  color: selectedSubCategory === 'all' ? '#0A192F' : '#FFFFFF',
                  transition: 'all 0.15s ease'
                }}
              >
                All Subcategories
              </button>
              {activeCat.subcategories.slice(0, 8).map((sub, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSubCategory(sub)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    backgroundColor: selectedSubCategory === sub ? '#22C55E' : 'rgba(255,255,255,0.12)',
                    color: selectedSubCategory === sub ? '#0A192F' : '#FFFFFF',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Grid: Filters Sidebar & Product Results */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem' }}>
        
        {/* Sidebar Filters Desktop */}
        <aside style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '1.5rem',
          height: 'fit-content'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <SlidersHorizontal size={17} color="#2563EB" /> Filters
            </h3>
            <button
              onClick={resetFilters}
              style={{ fontSize: '0.785rem', color: '#EF4444', fontWeight: 600 }}
            >
              Reset All
            </button>
          </div>

          {/* 47+ Category List Switcher */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Main Categories
            </label>
            <div style={{ maxHeight: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div
                onClick={() => setSelectedCategory(null)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: !selectedCategory ? 700 : 500,
                  backgroundColor: !selectedCategory ? '#EFF6FF' : 'transparent',
                  color: !selectedCategory ? '#2563EB' : '#475569',
                  cursor: 'pointer'
                }}
              >
                All 47+ Categories
              </div>
              {categories.map((cat) => {
                const isSelected = selectedCategory?.id === cat.id;
                return (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: isSelected ? 700 : 500,
                      backgroundColor: isSelected ? '#EFF6FF' : 'transparent',
                      color: isSelected ? '#2563EB' : '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    <IconRenderer name={cat.icon} size={14} color={isSelected ? '#2563EB' : '#94A3B8'} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cat.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider */}
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase' }}>
                Max Price
              </label>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#2563EB' }}>
                {formatRWF(maxPrice)}
              </span>
            </div>
            <input
              type="range"
              min="5000"
              max="2000000"
              step="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#2563EB', cursor: 'pointer' }}
            />
          </div>

          {/* Rating Filter */}
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #E2E8F0' }}>
            <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Minimum Rating
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[4.5, 4.0, 3.5, 0].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setSelectedRating(rate)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 8px',
                    borderRadius: '6px',
                    backgroundColor: selectedRating === rate ? '#EFF6FF' : 'transparent',
                    color: selectedRating === rate ? '#2563EB' : '#475569',
                    fontSize: '0.85rem',
                    textAlign: 'left'
                  }}
                >
                  {rate === 0 ? (
                    'Any Rating'
                  ) : (
                    <>
                      <div style={{ display: 'flex', color: '#F59E0B' }}>
                        <Star size={13} fill="#F59E0B" />
                      </div>
                      <span>{rate} stars & above</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Special Toggles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={onlyExpress}
                onChange={(e) => setOnlyExpress(e.target.checked)}
                style={{ accentColor: '#2563EB', width: '16px', height: '16px' }}
              />
              <span style={{ fontWeight: 600, color: '#1E293B' }}>⚡ Express Same-Day Only</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                style={{ accentColor: '#2563EB', width: '16px', height: '16px' }}
              />
              <span style={{ fontWeight: 600, color: '#1E293B' }}>In Stock Only</span>
            </label>
          </div>

        </aside>

        {/* Product Results Area */}
        <div>
          {/* Top Bar: Count & Sorting */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span style={{ fontSize: '0.9rem', color: '#64748B' }}>
                Showing <strong>{filteredProducts.length}</strong> products
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontSize: '0.85rem', color: '#64748B' }}>Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  outline: 'none',
                  backgroundColor: '#F8FAFC'
                }}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid: 3 Cards per Row */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid-3">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '4rem 2rem',
              textAlign: 'center'
            }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <Search size={28} color="#2563EB" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>No products match your criteria</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                Try adjusting your price range, clearing filters, or browsing other categories.
              </p>
              <button className="btn btn-primary" onClick={resetFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
