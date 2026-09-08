import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Home, LayoutGrid, Heart, ShoppingCart, User, Wrench } from 'lucide-react';

export const MobileNav = () => {
  const {
    currentView,
    setCurrentView,
    cartItemCount,
    setIsCartOpen,
    wishlist
  } = useMarketplace();

  return (
    <nav className="mobile-bottom-nav">
      <button
        className={`mobile-nav-tab ${currentView === 'home' ? 'active' : ''}`}
        onClick={() => setCurrentView('home')}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        className={`mobile-nav-tab ${currentView === 'categories' ? 'active' : ''}`}
        onClick={() => setCurrentView('categories')}
      >
        <LayoutGrid size={20} />
        <span>Categories</span>
      </button>

      <button
        className={`mobile-nav-tab ${currentView === 'services' ? 'active' : ''}`}
        onClick={() => setCurrentView('services')}
      >
        <Wrench size={20} />
        <span>Services</span>
      </button>

      <button
        className="mobile-nav-tab"
        onClick={() => setIsCartOpen(true)}
        style={{ position: 'relative' }}
      >
        <ShoppingCart size={20} />
        {cartItemCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '0px',
            right: '12px',
            backgroundColor: '#22C55E',
            color: '#0A192F',
            fontSize: '0.65rem',
            fontWeight: 800,
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {cartItemCount}
          </span>
        )}
        <span>Cart</span>
      </button>

      <button
        className={`mobile-nav-tab ${currentView === 'account' ? 'active' : ''}`}
        onClick={() => setCurrentView('account')}
      >
        <User size={20} />
        <span>Account</span>
      </button>
    </nav>
  );
};
