import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF, formatDate } from '../../utils/formatters';
import { ProductCard } from '../products/ProductCard';
import {
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  HelpCircle,
  Truck,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export const CustomerDashboard = () => {
  const { orders, wishlist, products, setCurrentView, currentDistrict } = useMarketplace();
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'wishlist' | 'addresses' | 'support'
  const [selectedOrderTracking, setSelectedOrderTracking] = useState(orders[0] || null);

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      
      {/* Dashboard Top Banner */}
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
        gap: '1rem',
        boxShadow: 'var(--shadow-xs)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#0F294A',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            fontWeight: 800
          }}>
            DH
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
              David Habimana
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
              +250 788 456 789 • Kigali, Rwanda • Member since 2023
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ padding: '10px 16px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2563EB' }}>{orders.length}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Total Orders</div>
          </div>
          <div style={{ padding: '10px 16px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#EF4444' }}>{wishlist.length}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Wishlist</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Tabs Sidebar & Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }}>
        
        {/* Navigation Sidebar */}
        <aside style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1rem', height: 'fit-content' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <button
              onClick={() => setActiveTab('orders')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: activeTab === 'orders' ? '#EFF6FF' : 'transparent',
                color: activeTab === 'orders' ? '#2563EB' : '#475569',
                fontWeight: activeTab === 'orders' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <Package size={18} />
              <span>Orders & Live Tracking</span>
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: activeTab === 'wishlist' ? '#EFF6FF' : 'transparent',
                color: activeTab === 'wishlist' ? '#2563EB' : '#475569',
                fontWeight: activeTab === 'wishlist' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <Heart size={18} />
              <span>My Wishlist ({wishlist.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: activeTab === 'addresses' ? '#EFF6FF' : 'transparent',
                color: activeTab === 'addresses' ? '#2563EB' : '#475569',
                fontWeight: activeTab === 'addresses' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <MapPin size={18} />
              <span>Saved Rwanda Addresses</span>
            </button>

            <button
              onClick={() => setActiveTab('support')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: activeTab === 'support' ? '#EFF6FF' : 'transparent',
                color: activeTab === 'support' ? '#2563EB' : '#475569',
                fontWeight: activeTab === 'support' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <HelpCircle size={18} />
              <span>Customer Help & Returns</span>
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '2rem' }}>
          
          {/* TAB 1: ORDERS & 6-STAGE TRACKER */}
          {activeTab === 'orders' && (
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
                Your Orders & Live Rwanda Tracking
              </h2>

              {orders.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      style={{
                        borderRadius: '14px',
                        border: '1.5px solid #E2E8F0',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Order Header Bar */}
                      <div style={{
                        padding: '1rem 1.25rem',
                        backgroundColor: '#F8FAFC',
                        borderBottom: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        <div>
                          <span style={{ fontSize: '0.785rem', color: '#64748B' }}>Order ID: </span>
                          <strong style={{ fontSize: '0.9rem', color: '#0F172A' }}>{order.id}</strong>
                          <span style={{ margin: '0 8px', color: '#CBD5E1' }}>•</span>
                          <span style={{ fontSize: '0.785rem', color: '#64748B' }}>{formatDate(order.date)}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="badge badge-green">
                            {order.status}
                          </span>
                          <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F294A' }}>
                            {formatRWF(order.total)}
                          </span>
                        </div>
                      </div>

                      {/* 6-Stage Tracking Timeline */}
                      <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid #F1F5F9' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                          Live 6-Stage Fulfillment Pipeline:
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px', position: 'relative' }}>
                          {order.trackingSteps?.map((step, idx) => (
                            <div key={idx} style={{ textAlign: 'center' }}>
                              <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: step.completed ? '#22C55E' : step.current ? '#2563EB' : '#E2E8F0',
                                color: step.completed || step.current ? '#FFFFFF' : '#94A3B8',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 6px auto',
                                fontSize: '0.75rem',
                                fontWeight: 800
                              }}>
                                {step.completed ? <CheckCircle2 size={16} /> : idx + 1}
                              </div>
                              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: step.completed || step.current ? '#0F172A' : '#94A3B8' }}>
                                {step.label}
                              </div>
                              <div style={{ fontSize: '0.675rem', color: '#64748B' }}>{step.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Items List */}
                      <div style={{ padding: '1.25rem' }}>
                        {order.items.map(({ product, quantity }) => (
                          <div key={product.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 0' }}>
                            <img src={product.images[0]} alt="" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '6px' }} />
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0F172A' }}>{product.name}</div>
                              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Qty: {quantity} • {product.sellerName}</div>
                            </div>
                            <strong style={{ fontSize: '0.9rem', color: '#0F294A' }}>{formatRWF(product.price * quantity)}</strong>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Info Footer */}
                      <div style={{ padding: '0.85rem 1.25rem', backgroundColor: '#F8FAFC', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#475569' }}>
                        <span>Destination: <strong>{order.district} ({order.address})</strong></span>
                        <span>Payment: <strong>{order.paymentMethod}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <Package size={40} color="#94A3B8" style={{ margin: '0 auto 1rem auto' }} />
                  <p style={{ color: '#64748B' }}>You haven't placed any orders yet.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: WISHLIST */}
          {activeTab === 'wishlist' && (
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
                Saved In Wishlist ({wishlistProducts.length})
              </h2>

              {wishlistProducts.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.25rem' }}>
                  {wishlistProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                  <Heart size={40} color="#94A3B8" style={{ margin: '0 auto 1rem auto' }} />
                  <p style={{ color: '#64748B' }}>Your wishlist is currently empty.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SAVED ADDRESSES */}
          {activeTab === 'addresses' && (
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
                Saved Addresses in Rwanda
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div style={{ padding: '1.25rem', borderRadius: '12px', border: '2px solid #2563EB', backgroundColor: '#EFF6FF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <strong style={{ color: '#0F172A' }}>Home (Default)</strong>
                    <span className="badge badge-blue">Primary</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
                    David Habimana <br />
                    KG 9 Ave, House #24 <br />
                    Gasabo, Kigali City <br />
                    Phone: +250 788 456 789
                  </p>
                </div>

                <div style={{ padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <strong style={{ color: '#0F172A' }}>Kigali Office</strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
                    David Habimana <br />
                    Kigali Heights, 4th Floor <br />
                    Nyarugenge / Gasabo border <br />
                    Phone: +250 788 456 789
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SUPPORT */}
          {activeTab === 'support' && (
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                Customer Help & Returns Center
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.5rem' }}>
                Need help with a delivery, returns, or warranty? Our local team in Kigali is ready to assist.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div style={{ padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                  <strong style={{ display: 'block', fontSize: '1rem', color: '#0F172A', marginBottom: '4px' }}>
                    Direct WhatsApp & Call
                  </strong>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '10px' }}>
                    Instant support in Kinyarwanda, English or French.
                  </p>
                  <a href="tel:+250788000123" className="btn btn-accent btn-sm">
                    Call +250 788 000 123
                  </a>
                </div>

                <div style={{ padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
                  <strong style={{ display: 'block', fontSize: '1rem', color: '#0F172A', marginBottom: '4px' }}>
                    7-Day Return Request
                  </strong>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '10px' }}>
                    Submit a return request for any damaged or non-matching item.
                  </p>
                  <button className="btn btn-outline btn-sm">
                    Open Return Dispute
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
