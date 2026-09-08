import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF, formatDate } from '../../utils/formatters';
import {
  Package,
  PlusCircle,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Store,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Eye,
  Settings,
  Layers,
  X
} from 'lucide-react';

export const SellerDashboard = () => {
  const {
    products,
    setProducts,
    categories,
    sellersList,
    addToast,
    setCurrentView,
    navigateToSeller
  } = useMarketplace();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'products' | 'orders' | 'payouts'
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);

  const seller = sellersList[0]; // Home Market Supermarket Direct / demo vendor
  const sellerProducts = products.filter(p => p.sellerId === seller.id || p.sellerName === seller.name);

  // New Product Form State
  const [newProd, setNewProd] = useState({
    name: '',
    category: categories[0]?.name || 'Electronics & Technology',
    price: '',
    originalPrice: '',
    stock: 20,
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const created = {
      id: `prod-${Date.now()}`,
      name: newProd.name,
      slug: newProd.name.toLowerCase().replace(/\s+/g, '-'),
      category: newProd.category,
      subCategory: 'General',
      price: Number(newProd.price),
      originalPrice: newProd.originalPrice ? Number(newProd.originalPrice) : Number(newProd.price) * 1.15,
      discountPercentage: 10,
      rating: 5.0,
      reviewsCount: 1,
      sellerId: seller.id,
      sellerName: seller.name,
      sellerRating: seller.rating,
      location: seller.location,
      isExpressDelivery: true,
      isFreeDelivery: true,
      stock: Number(newProd.stock),
      condition: "Brand New Sealed",
      warranty: "Official Warranty",
      images: [newProd.imageUrl],
      featured: false,
      flashDeal: false,
      description: newProd.description,
      specifications: { "Seller Verified": "Yes", "Origin": "Rwanda Supermarket Hub" },
      tags: ["new", "seller", "supermarket"]
    };

    setProducts(prev => [created, ...prev]);
    setIsAddProductOpen(false);
    addToast(`Product "${newProd.name}" added to marketplace live catalog!`, 'success');
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      
      {/* Seller Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        padding: '1.75rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.25rem',
        boxShadow: 'var(--shadow-xs)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src={seller.avatar}
            alt={seller.name}
            style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', border: '2px solid #EFF6FF' }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>
                {seller.name}
              </h1>
              <span className="badge badge-green">Verified Merchant</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
              TIN: {seller.tin} • {seller.location} • {sellerProducts.length} Active Catalog Listings
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="btn btn-primary"
            onClick={() => setIsAddProductOpen(true)}
          >
            <PlusCircle size={18} /> + Add New Product
          </button>

          <button
            className="btn btn-outline"
            onClick={() => navigateToSeller(seller)}
          >
            <Eye size={18} /> View Public Storefront
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        
        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '6px' }}>
            <span>Total Sales Revenue</span>
            <DollarSign size={18} color="#2563EB" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F294A', fontFamily: 'var(--font-heading)' }}>
            4,850,000 RWF
          </div>
          <span style={{ fontSize: '0.75rem', color: '#16A34A', fontWeight: 700 }}>+18.4% this month</span>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '6px' }}>
            <span>Available MoMo Payout</span>
            <Smartphone size={18} color="#16A34A" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#15803D', fontFamily: 'var(--font-heading)' }}>
            1,240,000 RWF
          </div>
          <button
            onClick={() => setIsPayoutModalOpen(true)}
            style={{ color: '#2563EB', fontSize: '0.785rem', fontWeight: 700, textDecoration: 'underline', marginTop: '2px' }}
          >
            Request Instant MoMo Payout →
          </button>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '6px' }}>
            <span>Fulfilled Orders</span>
            <ShoppingBag size={18} color="#D97706" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F294A', fontFamily: 'var(--font-heading)' }}>
            128 Orders
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>99.2% on-time dispatch</span>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '6px' }}>
            <span>Merchant Rating</span>
            <TrendingUp size={18} color="#9333EA" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F294A', fontFamily: 'var(--font-heading)' }}>
            ★ {seller.rating} / 5.0
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{seller.reviewsCount} customer reviews</span>
        </div>

      </div>

      {/* Main Tabs Navigation */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '1rem 1.5rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'overview' ? '#2563EB' : '#64748B',
              borderBottom: activeTab === 'overview' ? '3px solid #2563EB' : 'none',
              backgroundColor: activeTab === 'overview' ? '#FFFFFF' : 'transparent'
            }}
          >
            My Product Inventory ({sellerProducts.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            style={{
              padding: '1rem 1.5rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'orders' ? '#2563EB' : '#64748B',
              borderBottom: activeTab === 'orders' ? '3px solid #2563EB' : 'none',
              backgroundColor: activeTab === 'orders' ? '#FFFFFF' : 'transparent'
            }}
          >
            Recent Customer Orders
          </button>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {activeTab === 'overview' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#0F172A' }}>Active Marketplace Listings</h3>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Products immediately visible to buyers across Rwanda</span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0', color: '#475569' }}>
                      <th style={{ padding: '12px' }}>Product</th>
                      <th style={{ padding: '12px' }}>Category</th>
                      <th style={{ padding: '12px' }}>Price (RWF)</th>
                      <th style={{ padding: '12px' }}>Stock</th>
                      <th style={{ padding: '12px' }}>Rating</th>
                      <th style={{ padding: '12px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellerProducts.map((p) => (
                      <tr key={p.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img src={p.images[0]} alt="" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                          <strong style={{ color: '#0F172A', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</strong>
                        </td>
                        <td style={{ padding: '12px', color: '#64748B' }}>{p.category}</td>
                        <td style={{ padding: '12px', fontWeight: 700, color: '#0F294A' }}>{formatRWF(p.price)}</td>
                        <td style={{ padding: '12px' }}>
                          <span style={{ color: p.stock > 5 ? '#16A34A' : '#EF4444', fontWeight: 700 }}>
                            {p.stock} units
                          </span>
                        </td>
                        <td style={{ padding: '12px', color: '#F59E0B' }}>★ {p.rating}</td>
                        <td style={{ padding: '12px' }}>
                          <span className="badge badge-green">Active</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '1rem' }}>Pending & Dispatched Orders</h3>
              <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <strong>Order #ORD-89421 — David Habimana</strong>
                  <span className="badge badge-blue">Ready for Dispatch</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                  Destination: Gasabo, Kigali • Payment: MTN MoMo Confirmed (Escrow Held)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Product Modal */}
      {isAddProductOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            maxWidth: '650px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>Add Product to Marketplace</h3>
              <button onClick={() => setIsAddProductOpen(false)} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Product Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sony Wireless Noise-Cancelling Headphones"
                  value={newProd.name}
                  onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Main Category (47+ available) *
                  </label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', backgroundColor: '#F8FAFC' }}
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Stock Units Available *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newProd.stock}
                    onChange={(e) => setNewProd({ ...newProd, stock: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Selling Price in RWF *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 85000"
                    value={newProd.price}
                    onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Original Strikethrough Price (Optional)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 95000"
                    value={newProd.originalPrice}
                    onChange={(e) => setNewProd({ ...newProd, originalPrice: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Image URL
                </label>
                <input
                  type="text"
                  value={newProd.imageUrl}
                  onChange={(e) => setNewProd({ ...newProd, imageUrl: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Product Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Provide key features and specifications..."
                  value={newProd.description}
                  onChange={(e) => setNewProd({ ...newProd, description: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsAddProductOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Publish Product to Rwanda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MoMo Payout Modal */}
      {isPayoutModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', maxWidth: '440px', width: '100%', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Smartphone size={28} color="#D97706" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
              Instant MTN MoMo Payout
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem' }}>
              Transfer <strong>1,240,000 RWF</strong> directly to your registered MTN MoMo business wallet ({seller.phone}).
            </p>

            <button
              className="btn btn-accent btn-lg w-full"
              onClick={() => {
                setIsPayoutModalOpen(false);
                addToast('MoMo Payout of 1,240,000 RWF initiated successfully!', 'success');
              }}
              style={{ marginBottom: '8px' }}
            >
              Confirm MoMo Payout Transfer
            </button>
            <button className="btn btn-ghost btn-sm w-full" onClick={() => setIsPayoutModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
