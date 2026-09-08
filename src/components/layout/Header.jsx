import React, { useState, useRef, useEffect } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF } from '../../utils/formatters';
import { rwandaDistricts } from '../../data/locations';
import { MegaMenu } from './MegaMenu';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  MapPin,
  Globe,
  ChevronDown,
  LayoutGrid,
  Zap,
  Sparkles,
  Store,
  Wrench,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Flame
} from 'lucide-react';

export const Header = () => {
  const {
    currentView,
    setCurrentView,
    activeRole,
    setActiveRole,
    language,
    setLanguage,
    t,
    currentDistrict,
    setCurrentDistrict,
    cartItemCount,
    cartSubtotal,
    setIsCartOpen,
    wishlist,
    searchQuery,
    setSearchQuery,
    searchFilterCategory,
    setSearchFilterCategory,
    categories,
    products,
    viewProductDetails,
    navigateToCategory
  } = useMarketplace();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isDistrictModalOpen, setIsDistrictModalOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  // Filtered search suggestions
  const searchSuggestions = searchQuery.trim() === ''
    ? []
    : products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6);

  // Close search suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchFocused(false);
    setCurrentView('categories');
  };

  return (
    <>
      {/* Role Demonstration Switcher Bar */}
      <div className="role-switcher-banner">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#CBD5E1' }}>
              <Sparkles size={13} color="#22C55E" /> <strong>Role Demonstration Switcher:</strong>
            </span>
            <div className="flex items-center gap-1">
              <button
                className={`role-btn ${activeRole === 'customer' ? 'active' : ''}`}
                onClick={() => {
                  setActiveRole('customer');
                  setCurrentView('home');
                }}
              >
                Customer View
              </button>
              <button
                className={`role-btn ${activeRole === 'seller' ? 'active' : ''}`}
                onClick={() => {
                  setActiveRole('seller');
                  setCurrentView('seller-dashboard');
                }}
              >
                Seller / Vendor Portal
              </button>
              <button
                className={`role-btn ${activeRole === 'admin' ? 'active' : ''}`}
                onClick={() => {
                  setActiveRole('admin');
                  setCurrentView('admin-dashboard');
                }}
              >
                Supermarket Admin Engine
              </button>
              <button
                className={`role-btn ${activeRole === 'investor' ? 'active' : ''}`}
                onClick={() => {
                  setActiveRole('investor');
                  setCurrentView('investor-hub');
                }}
              >
                Investor Hub
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('about-us')}
              style={{ color: '#E2E8F0', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Store size={13} color="#22C55E" /> 4D Store Showcase & About
            </button>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <button
              onClick={() => setCurrentView('become-seller')}
              style={{ color: '#38BDF8', fontSize: '0.75rem', fontWeight: 600 }}
            >
              + Sell on Home Market
            </button>
          </div>
        </div>
      </div>

      {/* Top Announcement Bar */}
      <div className="top-announcement">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDistrictModalOpen(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#F8FAFC', fontSize: '0.785rem' }}
            >
              <MapPin size={13} color="#22C55E" />
              <span>Deliver to: <strong>{currentDistrict.name} ({currentDistrict.province})</strong></span>
              <ChevronDown size={12} />
            </button>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ fontSize: '0.785rem', color: '#94A3B8' }}>
              {t.freeDeliveryOver}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E2E8F0', fontSize: '0.785rem', fontWeight: 600 }}
              >
                <Globe size={13} color="#38BDF8" />
                <span>{language === 'en' ? 'English (RW)' : language === 'rw' ? 'Kinyarwanda' : 'Français'}</span>
                <ChevronDown size={11} />
              </button>

              {isLangDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '6px',
                  backgroundColor: '#0F172A',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  padding: '6px',
                  zIndex: 200,
                  minWidth: '140px'
                }}>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangDropdownOpen(false); }}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '6px 10px', color: language === 'en' ? '#22C55E' : '#FFFFFF', fontSize: '0.8rem', borderRadius: '4px' }}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => { setLanguage('rw'); setIsLangDropdownOpen(false); }}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '6px 10px', color: language === 'rw' ? '#22C55E' : '#FFFFFF', fontSize: '0.8rem', borderRadius: '4px' }}
                  >
                    🇷🇼 Kinyarwanda
                  </button>
                  <button
                    onClick={() => { setLanguage('fr'); setIsLangDropdownOpen(false); }}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '6px 10px', color: language === 'fr' ? '#22C55E' : '#FFFFFF', fontSize: '0.8rem', borderRadius: '4px' }}
                  >
                    🇫🇷 Français
                  </button>
                </div>
              )}
            </div>

            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <div className="flex items-center gap-3" style={{ fontSize: '0.785rem' }}>
              <button onClick={() => setCurrentView('account')} style={{ color: '#E2E8F0' }}>Order Tracking</button>
              <button onClick={() => setCurrentView('services')} style={{ color: '#E2E8F0' }}>Rwanda Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="header-main">
          <div className="container flex items-center justify-between gap-4">
            
            {/* Logo */}
            <div
              className="brand-logo-wrap"
              onClick={() => {
                setActiveRole('customer');
                setCurrentView('home');
              }}
            >
              <img
                src="/image/download.jfif"
                alt="Home Market Supermarket Logo"
                className="brand-logo-img"
              />
              <div className="brand-title-wrap">
                <span className="brand-title-text">
                  HOME MARKET <span>SUPERMARKET</span>
                </span>
                <span className="brand-subtitle-text">
                  Rwanda's Marketplace for Everything
                </span>
              </div>
            </div>

            {/* Smart Search Bar */}
            <div className="search-container" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="search-input-group">
                <select
                  className="search-category-select"
                  value={searchFilterCategory}
                  onChange={(e) => setSearchFilterCategory(e.target.value)}
                >
                  <option value="all">All 47+ Categories</option>
                  {categories.slice(0, 15).map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchFocused(true);
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                />

                <button type="submit" className="search-btn" aria-label="Search">
                  <Search size={18} />
                </button>
              </form>

              {/* Autocomplete Dropdown */}
              {isSearchFocused && searchSuggestions.length > 0 && (
                <div className="search-dropdown">
                  <div style={{ padding: '8px 14px', fontSize: '0.75rem', fontWeight: 700, color: '#64748B', borderBottom: '1px solid #E2E8F0', textTransform: 'uppercase' }}>
                    Suggested Products
                  </div>
                  {searchSuggestions.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        viewProductDetails(item);
                        setIsSearchFocused(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 14px',
                        borderBottom: '1px solid #F1F5F9',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                          in {item.category} • <strong style={{ color: '#2563EB' }}>{formatRWF(item.price)}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      setIsSearchFocused(false);
                      setCurrentView('categories');
                    }}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#EFF6FF',
                      color: '#2563EB',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    View all matching results →
                  </div>
                </div>
              )}
            </div>

            {/* User Action Badges */}
            <div className="flex items-center gap-4">
              {/* Account Dropdown */}
              <button
                className="btn btn-ghost flex items-center gap-2"
                onClick={() => setCurrentView('account')}
                style={{ padding: '0.5rem 0.75rem' }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={19} color="#0F294A" />
                </div>
                <div className="flex flex-col text-left" style={{ display: 'none', md: 'flex' }}>
                  <span style={{ fontSize: '0.725rem', color: '#64748B' }}>Hello, Guest</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>My Account</span>
                </div>
              </button>

              {/* Wishlist */}
              <button
                className="btn btn-ghost"
                onClick={() => setCurrentView('account')}
                style={{ position: 'relative', padding: '0.5rem' }}
                aria-label="Wishlist"
              >
                <Heart size={22} color="#0F294A" />
                {wishlist.length > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    backgroundColor: '#EF4444',
                    color: '#FFFFFF',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                className="btn btn-primary flex items-center gap-3"
                onClick={() => setIsCartOpen(true)}
                style={{ padding: '0.55rem 1.15rem' }}
              >
                <div style={{ position: 'relative' }}>
                  <ShoppingCart size={20} />
                  {cartItemCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-10px',
                      backgroundColor: '#22C55E',
                      color: '#0A192F',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      width: '19px',
                      height: '19px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <div className="flex flex-col text-left" style={{ lineHeight: 1.1 }}>
                  <span style={{ fontSize: '0.7rem', opacity: 0.85 }}>Cart Total</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 800 }}>{formatRWF(cartSubtotal)}</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="nav-bar" style={{ position: 'relative' }}>
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-1">
              {/* All Categories Mega Menu Button */}
              <button
                className="nav-item-btn all-categories-btn"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                <LayoutGrid size={18} />
                <span>All 47+ Categories</span>
                <ChevronDown size={15} style={{ transform: isMegaMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              <button
                className={`nav-item-btn ${currentView === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentView('home')}
              >
                Home
              </button>

              <button
                className={`nav-item-btn ${currentView === 'deals' ? 'active' : ''}`}
                onClick={() => setCurrentView('deals')}
                style={{ color: '#DC2626' }}
              >
                <Flame size={16} color="#DC2626" />
                <span>Flash Deals</span>
              </button>

              <button
                className="nav-item-btn"
                onClick={() => navigateToCategory(categories.find(c => c.slug === 'made-in-rwanda') || categories[0])}
              >
                <Sparkles size={15} color="#16A34A" />
                <span>Made in Rwanda</span>
              </button>

              <button
                className={`nav-item-btn ${currentView === 'services' ? 'active' : ''}`}
                onClick={() => setCurrentView('services')}
              >
                <Wrench size={15} color="#2563EB" />
                <span>Rwanda Services</span>
              </button>

              <button
                className={`nav-item-btn ${currentView === 'vendors' ? 'active' : ''}`}
                onClick={() => setCurrentView('vendors')}
              >
                <Store size={15} />
                <span>Verified Vendors</span>
              </button>

              <button
                className={`nav-item-btn ${currentView === 'about-us' ? 'active' : ''}`}
                onClick={() => setCurrentView('about-us')}
              >
                <span>About & 4D Tour</span>
              </button>

              <button
                className={`nav-item-btn ${currentView === 'investor-hub' ? 'active' : ''}`}
                onClick={() => setCurrentView('investor-hub')}
                style={{ color: '#1E40AF', fontWeight: 700 }}
              >
                <TrendingUp size={15} color="#1E40AF" />
                <span>Investor Deck</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="badge badge-green">
                <ShieldCheck size={12} /> Rwanda Secure Escrow
              </span>
            </div>
          </div>

          {/* Mega Menu Component */}
          {isMegaMenuOpen && (
            <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />
          )}
        </nav>
      </header>

      {/* Rwanda District Selection Modal */}
      {isDistrictModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            maxWidth: '650px',
            width: '100%',
            maxHeight: '85vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
          }}>
            <div style={{ padding: '1.25rem', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#0F172A' }}>Select Your Delivery District in Rwanda</h3>
                <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Real-time delivery fees & same-day transit estimates across Rwanda</p>
              </div>
              <button
                onClick={() => setIsDistrictModalOpen(false)}
                style={{ padding: '6px', borderRadius: '50%', backgroundColor: '#F1F5F9', color: '#64748B' }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '1rem', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
              {rwandaDistricts.map((dist) => (
                <div
                  key={dist.id}
                  onClick={() => {
                    setCurrentDistrict(dist);
                    setIsDistrictModalOpen(false);
                  }}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '10px',
                    border: `2px solid ${currentDistrict.id === dist.id ? '#2563EB' : '#E2E8F0'}`,
                    backgroundColor: currentDistrict.id === dist.id ? '#EFF6FF' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '0.9rem', color: '#0F172A' }}>{dist.name}</strong>
                    {dist.isExpress && <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>Express</span>}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{dist.province}</div>
                  <div style={{ marginTop: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#16A34A' }}>
                    {formatRWF(dist.deliveryFee)} • {dist.estHours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
