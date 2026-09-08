import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF, formatDate } from '../../utils/formatters';
import { CategoryManager } from './CategoryManager';
import {
  LayoutDashboard,
  FolderTree,
  ShoppingBag,
  Users,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Truck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export const AdminDashboard = () => {
  const { orders, products, sellersList, categories, addToast } = useMarketplace();
  const [adminTab, setAdminTab] = useState('categories'); // 'categories' | 'overview' | 'orders' | 'sellers'

  const totalGMV = orders.reduce((sum, o) => sum + o.total, 128450000);

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      
      {/* Header Banner */}
      <div style={{
        backgroundColor: '#0F294A',
        color: '#FFFFFF',
        borderRadius: '16px',
        padding: '1.75rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.12)', color: '#38BDF8', fontSize: '0.75rem', fontWeight: 800, marginBottom: '6px' }}>
            <ShieldCheck size={13} color="#22C55E" /> SUPERMARKET ADMINISTRATOR ENGINE
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF' }}>
            Home Market Platform Operations
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
            National Commerce Management • Rwanda 30-District Logistics & Runtime Architecture
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <span className="badge badge-green" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
            🟢 All 47+ Categories Live
          </span>
        </div>
      </div>

      {/* 4 Executive Platform KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        
        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '4px' }}>
            <span>Total Marketplace GMV</span>
            <DollarSign size={18} color="#2563EB" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F294A', fontFamily: 'var(--font-heading)' }}>
            {formatRWF(totalGMV)}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#16A34A', fontWeight: 700 }}>+24.8% MoM Growth</span>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '4px' }}>
            <span>Active Categories</span>
            <FolderTree size={18} color="#16A34A" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F294A', fontFamily: 'var(--font-heading)' }}>
            {categories.length} Categories
          </div>
          <span style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 700 }}>Runtime Editable</span>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '4px' }}>
            <span>Registered Rwandan Sellers</span>
            <Users size={18} color="#D97706" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F294A', fontFamily: 'var(--font-heading)' }}>
            340+ Merchants
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Kigali, Musanze, Rubavu</span>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', marginBottom: '4px' }}>
            <span>Total Catalog Products</span>
            <ShoppingBag size={18} color="#9333EA" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F294A', fontFamily: 'var(--font-heading)' }}>
            54,200 SKUs
          </div>
          <span style={{ fontSize: '0.75rem', color: '#16A34A', fontWeight: 700 }}>100% Verified Stock</span>
        </div>

      </div>

      {/* Tab Navigation */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', backgroundColor: '#F8FAFC' }}>
          <button
            onClick={() => setAdminTab('categories')}
            style={{
              padding: '1rem 1.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              color: adminTab === 'categories' ? '#2563EB' : '#64748B',
              borderBottom: adminTab === 'categories' ? '3px solid #2563EB' : 'none',
              backgroundColor: adminTab === 'categories' ? '#FFFFFF' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FolderTree size={18} />
            <span>Category & Subcategory Engine (47+)</span>
          </button>

          <button
            onClick={() => setAdminTab('orders')}
            style={{
              padding: '1rem 1.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              color: adminTab === 'orders' ? '#2563EB' : '#64748B',
              borderBottom: adminTab === 'orders' ? '3px solid #2563EB' : 'none',
              backgroundColor: adminTab === 'orders' ? '#FFFFFF' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Truck size={18} />
            <span>Rwanda Order & Logistics Dispatch</span>
          </button>

          <button
            onClick={() => setAdminTab('sellers')}
            style={{
              padding: '1rem 1.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              color: adminTab === 'sellers' ? '#2563EB' : '#64748B',
              borderBottom: adminTab === 'sellers' ? '3px solid #2563EB' : 'none',
              backgroundColor: adminTab === 'sellers' ? '#FFFFFF' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ShieldCheck size={18} />
            <span>Seller KYC Approvals ({sellersList.length})</span>
          </button>
        </div>

        <div style={{ padding: '2rem' }}>
          {adminTab === 'categories' && (
            <CategoryManager />
          )}

          {adminTab === 'orders' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                National Logistics Pipeline Across 30 Districts
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0', color: '#475569' }}>
                      <th style={{ padding: '12px' }}>Order ID</th>
                      <th style={{ padding: '12px' }}>Date</th>
                      <th style={{ padding: '12px' }}>District</th>
                      <th style={{ padding: '12px' }}>Total Paid</th>
                      <th style={{ padding: '12px' }}>Payment</th>
                      <th style={{ padding: '12px' }}>Fulfillment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o) => (
                      <tr key={o.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '12px', fontWeight: 700, color: '#0F172A' }}>{o.id}</td>
                        <td style={{ padding: '12px', color: '#64748B' }}>{formatDate(o.date)}</td>
                        <td style={{ padding: '12px', color: '#334155' }}>{o.district}</td>
                        <td style={{ padding: '12px', fontWeight: 800, color: '#0F294A' }}>{formatRWF(o.total)}</td>
                        <td style={{ padding: '12px' }}>
                          <span className="badge badge-green">{o.paymentStatus || 'PAID'}</span>
                        </td>
                        <td style={{ padding: '12px' }}>
                          <span className="badge badge-blue">{o.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {adminTab === 'sellers' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                Verified Rwandan Merchant Roster
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {sellersList.map((s) => (
                  <div key={s.id} style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <img src={s.avatar} alt="" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
                      <div>
                        <strong style={{ color: '#0F172A' }}>{s.name}</strong>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>TIN: {s.tin} • {s.location}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', paddingTop: '8px', borderTop: '1px solid #E2E8F0' }}>
                      <span>Rating: ★ {s.rating}</span>
                      <span style={{ color: '#16A34A', fontWeight: 700 }}>KYC Approved</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
