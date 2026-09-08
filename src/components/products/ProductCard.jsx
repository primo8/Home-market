import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF } from '../../utils/formatters';
import { Heart, ShoppingCart, Eye, Star, MapPin, Truck, ShieldCheck } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    viewProductDetails,
    setQuickViewProduct
  } = useMarketplace();

  const isFavorited = isInWishlist(product.id);

  return (
    <div className="product-card">
      {/* Product Thumbnail & Overlay Action Buttons */}
      <div className="product-thumb-wrap">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-thumb-img"
          onClick={() => viewProductDetails(product)}
          style={{ cursor: 'pointer' }}
          loading="lazy"
        />

        {/* Badges */}
        <div className="product-badges">
          {product.discountPercentage > 0 && (
            <span className="badge badge-red">
              -{product.discountPercentage}%
            </span>
          )}
          {product.category.includes('Made in Rwanda') && (
            <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>
              🇷🇼 Made in RW
            </span>
          )}
          {product.isExpressDelivery && (
            <span className="badge badge-blue" style={{ fontSize: '0.65rem' }}>
              ⚡ Express
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className="wishlist-btn-overlay"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Add to Wishlist"
          style={{ color: isFavorited ? '#EF4444' : '#64748B' }}
        >
          <Heart size={16} fill={isFavorited ? '#EF4444' : 'none'} />
        </button>

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(4px)',
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '6px 12px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            opacity: 0,
            transition: 'all 0.2s ease',
            zIndex: 3
          }}
          className="quick-view-hover-btn"
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.85)'}
        >
          <Eye size={13} /> Quick View
        </button>
      </div>

      {/* Card Content Body */}
      <div className="product-card-body">
        <span className="product-category-tag">
          {product.category}
        </span>

        <h4
          className="product-title"
          onClick={() => viewProductDetails(product)}
          style={{ cursor: 'pointer' }}
          title={product.name}
        >
          {product.name}
        </h4>

        {/* Star Rating */}
        <div className="product-rating-row">
          <div style={{ display: 'flex', alignItems: 'center', color: '#F59E0B' }}>
            <Star size={13} fill="#F59E0B" />
            <span style={{ fontWeight: 700, marginLeft: '3px', color: '#0F172A', fontSize: '0.8rem' }}>
              {product.rating}
            </span>
          </div>
          <span>({product.reviewsCount})</span>
          <span style={{ margin: '0 2px' }}>•</span>
          <span className="delivery-badge-pill">
            <Truck size={12} /> {product.location.split(',')[0]}
          </span>
        </div>

        {/* Pricing */}
        <div className="product-price-row">
          <span className="current-price">{formatRWF(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">{formatRWF(product.originalPrice)}</span>
          )}
        </div>

        {/* Seller Info */}
        <div className="product-seller-info">
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>
            Sold by: <strong style={{ color: '#1E293B' }}>{product.sellerName}</strong>
          </span>
          <span style={{ color: '#16A34A', fontWeight: 600 }}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>

        {/* Action Button */}
        <button
          className="btn btn-primary btn-sm w-full"
          onClick={() => addToCart(product, 1)}
          style={{ marginTop: 'auto' }}
        >
          <ShoppingCart size={15} /> Add to Cart
        </button>
      </div>
    </div>
  );
};
