import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF } from '../../utils/formatters';
import { rwandaDistricts } from '../../data/locations';
import { ProductCard } from './ProductCard';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Heart,
  Share2,
  ShoppingCart,
  Zap,
  MapPin,
  Store,
  ChevronRight,
  Clock,
  HelpCircle,
  Award
} from 'lucide-react';

export const ProductDetails = () => {
  const {
    selectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setCurrentView,
    currentDistrict,
    setCurrentDistrict,
    products,
    navigateToCategory,
    navigateToSeller,
    sellersList
  } = useMarketplace();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'reviews' | 'shipping' | 'qa'

  if (!selectedProduct) return null;

  const isFavorited = isInWishlist(selectedProduct.id);
  const seller = sellersList.find(s => s.id === selectedProduct.sellerId) || sellersList[0];
  const relatedProducts = products.filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setCurrentView('checkout');
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }}>
      
      {/* Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button onClick={() => setCurrentView('home')} style={{ color: '#2563EB' }}>Home</button>
        <ChevronRight size={14} />
        <button onClick={() => setCurrentView('categories')} style={{ color: '#2563EB' }}>{selectedProduct.category}</button>
        <ChevronRight size={14} />
        <span style={{ color: '#0F172A', fontWeight: 600 }}>{selectedProduct.name}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
        
        {/* Left Column: Image Gallery */}
        <div>
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            aspectRatio: '1 / 1',
            marginBottom: '1rem',
            boxShadow: 'var(--shadow-md)'
          }}>
            <img
              src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
              alt={selectedProduct.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }}
            />
            {selectedProduct.discountPercentage > 0 && (
              <span className="badge badge-red" style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '0.85rem', padding: '6px 12px' }}>
                Save {selectedProduct.discountPercentage}%
              </span>
            )}
          </div>

          {/* Thumbnail Selector */}
          {selectedProduct.images.length > 1 && (
            <div style={{ display: 'flex', gap: '10px' }}>
              {selectedProduct.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: `2px solid ${activeImageIndex === idx ? '#2563EB' : '#E2E8F0'}`,
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Middle/Right Column: Details & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span className="badge badge-blue">
              {selectedProduct.category}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => toggleWishlist(selectedProduct.id)}
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  backgroundColor: isFavorited ? '#FEE2E2' : '#F1F5F9',
                  color: isFavorited ? '#EF4444' : '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Heart size={18} fill={isFavorited ? '#EF4444' : 'none'} />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Product link copied to clipboard!');
                }}
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#F1F5F9',
                  color: '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.3, marginBottom: '0.75rem' }}>
            {selectedProduct.name}
          </h1>

          {/* Rating & Reviews Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B' }}>
              <Star size={16} fill="#F59E0B" />
              <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>{selectedProduct.rating}</strong>
            </div>
            <span style={{ color: '#64748B', fontSize: '0.85rem' }}>({selectedProduct.reviewsCount} Customer Reviews)</span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ color: '#16A34A', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={15} /> Verified Authentic
            </span>
          </div>

          {/* Price Box */}
          <div style={{ backgroundColor: '#F8FAFC', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: '#0F294A' }}>
                {formatRWF(selectedProduct.price)}
              </span>
              {selectedProduct.originalPrice > selectedProduct.price && (
                <span style={{ fontSize: '1.1rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                  {formatRWF(selectedProduct.originalPrice)}
                </span>
              )}
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Inclusive of all Rwandan statutory taxes (TVA/VAT where applicable).
            </p>
          </div>

          {/* Rwanda District Delivery Calculator */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #DBEAFE',
            borderRadius: '12px',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-xs)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 700, color: '#1E40AF' }}>
                <Truck size={17} color="#2563EB" />
                <span>Rwanda Delivery Options:</span>
              </div>
              <span className="badge badge-green">
                {currentDistrict.province === 'Kigali City' ? 'Same-Day Kigali' : 'Express National'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.8rem', color: '#64748B' }}>Selected District:</label>
              <select
                value={currentDistrict.id}
                onChange={(e) => {
                  const dist = rwandaDistricts.find(d => d.id === e.target.value);
                  if (dist) setCurrentDistrict(dist);
                }}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  outline: 'none',
                  backgroundColor: '#F8FAFC'
                }}
              >
                {rwandaDistricts.map(d => (
                  <option key={d.id} value={d.id}>{d.name} ({d.province})</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', color: '#334155' }}>
              <span>Estimated Delivery: <strong>{currentDistrict.estHours}</strong></span>
              <span>Fee: <strong>{formatRWF(currentDistrict.deliveryFee)}</strong></span>
            </div>
          </div>

          {/* Seller / Merchant Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            marginBottom: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #CBD5E1' }}>
                <img src={seller.avatar} alt={seller.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#0F172A' }}>{seller.name}</strong>
                  {seller.verified && <ShieldCheck size={14} color="#16A34A" />}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                  ★ {seller.rating} rating • {seller.location} • {seller.shippingSpeed} shipping
                </div>
              </div>
            </div>

            <button
              className="btn btn-outline btn-sm"
              onClick={() => navigateToSeller(seller)}
            >
              Visit Store
            </button>
          </div>

          {/* Quantity and Actions */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #CBD5E1', borderRadius: '10px', overflow: 'hidden' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '10px 16px', backgroundColor: '#F8FAFC', fontSize: '1.1rem', fontWeight: 700 }}
              >
                -
              </button>
              <span style={{ padding: '0 16px', fontWeight: 800, fontSize: '0.95rem' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '10px 16px', backgroundColor: '#F8FAFC', fontSize: '1.1rem', fontWeight: 700 }}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-primary btn-lg"
              style={{ flex: 1 }}
              onClick={() => addToCart(selectedProduct, quantity)}
            >
              <ShoppingCart size={19} /> Add to Cart
            </button>

            <button
              className="btn btn-accent btn-lg"
              style={{ flex: 1 }}
              onClick={handleBuyNow}
            >
              <Zap size={19} /> Buy Now with MoMo
            </button>
          </div>

        </div>

      </div>

      {/* Tabs: Specifications, Customer Reviews, Shipping & Returns, Q&A */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
          <button
            onClick={() => setActiveTab('specs')}
            style={{
              padding: '1rem 1.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              color: activeTab === 'specs' ? '#2563EB' : '#64748B',
              borderBottom: activeTab === 'specs' ? '3px solid #2563EB' : '3px solid transparent',
              backgroundColor: activeTab === 'specs' ? '#FFFFFF' : 'transparent'
            }}
          >
            Full Specifications & Overview
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            style={{
              padding: '1rem 1.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              color: activeTab === 'reviews' ? '#2563EB' : '#64748B',
              borderBottom: activeTab === 'reviews' ? '3px solid #2563EB' : '3px solid transparent',
              backgroundColor: activeTab === 'reviews' ? '#FFFFFF' : 'transparent'
            }}
          >
            Customer Reviews ({selectedProduct.reviewsCount})
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            style={{
              padding: '1rem 1.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              color: activeTab === 'shipping' ? '#2563EB' : '#64748B',
              borderBottom: activeTab === 'shipping' ? '3px solid #2563EB' : '3px solid transparent',
              backgroundColor: activeTab === 'shipping' ? '#FFFFFF' : 'transparent'
            }}
          >
            Rwanda Logistics & Escrow Guarantee
          </button>
        </div>

        <div style={{ padding: '2rem' }}>
          {activeTab === 'specs' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#0F172A' }}>Product Description</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#475569', marginBottom: '2rem' }}>
                {selectedProduct.description}
              </p>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#0F172A' }}>Technical Specifications</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {Object.entries(selectedProduct.specifications || {}).map(([key, val]) => (
                  <div key={key} style={{ padding: '12px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>{key}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginTop: '2px' }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E2E8F0' }}>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>{selectedProduct.rating}</div>
                  <div style={{ display: 'flex', color: '#F59E0B', margin: '4px 0' }}>
                    <Star size={18} fill="#F59E0B" />
                    <Star size={18} fill="#F59E0B" />
                    <Star size={18} fill="#F59E0B" />
                    <Star size={18} fill="#F59E0B" />
                    <Star size={18} fill="#F59E0B" />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Based on {selectedProduct.reviewsCount} verified buyers</div>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                    100% verified purchases from customers in Kigali, Musanze, Huye, and Rubavu.
                  </p>
                </div>
              </div>

              {/* Sample Reviews */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ color: '#0F172A' }}>Jean-Paul M. (Kigali, Kicukiro)</strong>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>2 days ago</span>
                  </div>
                  <div style={{ display: 'flex', color: '#F59E0B', marginBottom: '6px' }}>
                    <Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" />
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#334155' }}>
                    "Ordered around 11:00 AM and received it by 2:30 PM in Kicukiro. Excellent packaging, 100% brand new genuine product. Paid with MTN MoMo smoothly."
                  </p>
                </div>

                <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ color: '#0F172A' }}>Alice U. (Gasabo)</strong>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>1 week ago</span>
                  </div>
                  <div style={{ display: 'flex', color: '#F59E0B', marginBottom: '6px' }}>
                    <Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" /><Star size={14} fill="#F59E0B" />
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#334155' }}>
                    "Home Market Supermarket is really bringing world-class marketplace standards to Rwanda. Great price compared to standard retail shops."
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', marginBottom: '8px' }}>
                    <Truck size={18} color="#2563EB" /> Same-Day Kigali Delivery
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    Orders placed before 3:00 PM for Gasabo, Kicukiro, and Nyarugenge are delivered same day by our dedicated dispatch fleet.
                  </p>
                </div>

                <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', marginBottom: '8px' }}>
                    <ShieldCheck size={18} color="#16A34A" /> Escrow Buyer Protection
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    Your funds are safely held in escrow until you inspect and confirm your package upon delivery. 7-day hassle-free returns.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Carousel */}
      {relatedProducts.length > 0 && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: '#0F172A' }}>Customers Also Viewed in {selectedProduct.category}</h2>
            <button className="btn btn-outline btn-sm" onClick={() => setCurrentView('categories')}>
              View More →
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
