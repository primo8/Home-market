import React, { useEffect } from 'react';
import { useMarketplace } from './context/MarketplaceContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import { ToastContainer } from './components/common/ToastContainer';
import { CartDrawer } from './components/cart/CartDrawer';
import { QuickViewModal } from './components/products/QuickViewModal';

// Views
import { HeroBanner } from './components/home/HeroBanner';
import { CategoryGrid } from './components/home/CategoryGrid';
import { FlashDeals } from './components/home/FlashDeals';
import { CategorySection } from './components/home/CategorySection';
import { SupermarketShowcase4D } from './components/home/SupermarketShowcase4D';
import { RwandaCrafts } from './components/home/RwandaCrafts';
import { ServicesShowcase } from './components/home/ServicesShowcase';
import { TopSellers } from './components/home/TopSellers';
import { InvestorCallout } from './components/home/InvestorCallout';
import { TrustFeatures } from './components/home/TrustFeatures';
import { AppDownload } from './components/home/AppDownload';

import { CategoryExplorer } from './components/products/CategoryExplorer';
import { ProductDetails } from './components/products/ProductDetails';
import { CheckoutFlow } from './components/cart/CheckoutFlow';
import { CustomerDashboard } from './components/account/CustomerDashboard';
import { BecomeSeller } from './components/vendor/BecomeSeller';
import { SellerDashboard } from './components/vendor/SellerDashboard';
import { SellerStorefront } from './components/vendor/SellerStorefront';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AboutUs4D } from './components/about/AboutUs4D';
import { InvestorHub } from './components/investor/InvestorHub';
import { ServicesDirectory } from './components/services/ServicesDirectory';

export const App = () => {
  const { currentView } = useMarketplace();

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Global Header */}
      <Header />

      {/* Main Page Content Switcher */}
      <main style={{ flex: 1 }}>
        {currentView === 'home' && (
          <>
            {/* 1. Hero Section */}
            <HeroBanner />

            {/* 2. Popular 47+ Category Discovery Grid */}
            <CategoryGrid />

            {/* 3. Lightning Flash Deals with Live Countdown */}
            <FlashDeals />

            {/* 4. Electronics & Smart Tech Showcase */}
            <CategorySection
              title="Smartphones, Laptops & Technology"
              subtitle="Authorized brand warranties and fast delivery across Kigali and Rwanda."
              categoryName="Electronics & Technology"
              badgeText="Tech & Gadgets"
            />

            {/* 5. 4D Interactive Supermarket Showcase (Using Real Store Images) */}
            <SupermarketShowcase4D />

            {/* 6. Farm Fresh Groceries & Daily Pantry */}
            <CategorySection
              title="Fresh Groceries & Supermarket Direct"
              subtitle="Daily morning harvests from Musanze farms and supermarket direct essentials."
              categoryName="Groceries & Food"
              badgeText="Fresh Daily"
              bgLight={true}
            />

            {/* 7. "Made in Rwanda" Crafts & Coffee Spotlight */}
            <RwandaCrafts />

            {/* 8. Home, Furniture & Modern Living */}
            <CategorySection
              title="Home, Furniture & Appliances"
              subtitle="Energy efficient refrigerators, comfortable living room sets, and kitchenware."
              categoryName="Home, Furniture & Appliances"
              badgeText="Home Living"
            />

            {/* 9. Verified Rwandan Services Showcase */}
            <ServicesShowcase />

            {/* 10. Fashion, Apparel & Traditional Wear */}
            <CategorySection
              title="Fashion, Rwandan Attire & Style"
              subtitle="Modern urban clothing and tailored traditional Rwandan Kitenge designs."
              categoryName="Fashion & Apparel"
              badgeText="Trendy Style"
              bgLight={true}
            />

            {/* 11. Solar & Clean Energy Solutions */}
            <CategorySection
              title="Solar Power, Lithium Batteries & Inverters"
              subtitle="Off-grid and hybrid clean energy systems with nationwide installation across Rwanda."
              categoryName="Solar & Clean Energy"
              badgeText="Eco Clean Energy"
            />

            {/* 12. Beauty & Personal Care */}
            <CategorySection
              title="Beauty, Skincare & Fragrances"
              subtitle="Dermatologically certified skincare, organic shea body lotions, and designer perfumes."
              categoryName="Beauty & Personal Care"
              badgeText="Beauty & Care"
              bgLight={true}
            />

            {/* 13. Tools & Professional Hardware */}
            <CategorySection
              title="Tools, Power Drills & Building Hardware"
              subtitle="Heavy-duty cordless power tools, telescopic ladders, and contractor toolkits."
              categoryName="Tools & Hardware"
              badgeText="Pro Hardware"
            />

            {/* 14. Top Verified Rwandan Merchants & Importers */}
            <TopSellers />

            {/* 15. Strategic Investor Vision Callout */}
            <InvestorCallout />

            {/* 16. Rwanda FDA Compliance, Trust & Safety */}
            <TrustFeatures />

            {/* 17. Mobile App Promotion & Newsletter */}
            <AppDownload />
          </>
        )}

        {/* Categories Directory View */}
        {currentView === 'categories' && <CategoryExplorer />}

        {/* Flash Deals Dedicated View */}
        {currentView === 'deals' && <CategoryExplorer />}

        {/* Verified Vendors Directory */}
        {currentView === 'vendors' && (
          <div style={{ padding: '2rem 0' }}>
            <TopSellers />
          </div>
        )}

        {/* Product Details Page (PDP) */}
        {currentView === 'product-detail' && <ProductDetails />}

        {/* Full 5-Stage Checkout */}
        {currentView === 'checkout' && <CheckoutFlow />}

        {/* Customer Account & Live Order Tracking */}
        {currentView === 'account' && <CustomerDashboard />}

        {/* Seller Onboarding Form */}
        {currentView === 'become-seller' && <BecomeSeller />}

        {/* Vendor Dashboard Portal */}
        {currentView === 'seller-dashboard' && <SellerDashboard />}

        {/* Public Vendor Storefront */}
        {currentView === 'seller-storefront' && <SellerStorefront />}

        {/* Admin Engine & Runtime Category CRUD */}
        {currentView === 'admin-dashboard' && <AdminDashboard />}

        {/* 4D Store Showcase & About Us */}
        {currentView === 'about-us' && <AboutUs4D />}

        {/* Investor Strategy Hub */}
        {currentView === 'investor-hub' && <InvestorHub />}

        {/* Rwanda Services Directory */}
        {currentView === 'services' && <ServicesDirectory />}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileNav />

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Quick View Modal */}
      <QuickViewModal />

      {/* Toast Notification Container */}
      <ToastContainer />

    </div>
  );
};
export default App;
