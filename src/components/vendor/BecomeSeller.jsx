import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { rwandaDistricts } from '../../data/locations';
import { Store, ShieldCheck, CheckCircle2, ArrowRight, Smartphone, Building2, Layers, Award } from 'lucide-react';

export const BecomeSeller = () => {
  const { categories, setCurrentView, setActiveRole, addToast } = useMarketplace();
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    category: categories[0]?.name || '',
    district: rwandaDistricts[0]?.name || '',
    tin: '',
    momoPayoutPhone: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Seller Application Submitted! Redirecting to Merchant Portal...', 'success');
    setTimeout(() => {
      setActiveRole('seller');
      setCurrentView('seller-dashboard');
    }, 1500);
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '900px' }}>
      
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0A192F 0%, #1E40AF 100%)',
        borderRadius: '20px',
        padding: '2.5rem',
        color: '#FFFFFF',
        marginBottom: '2.5rem',
        textAlign: 'center'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 14px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.12)', color: '#38BDF8', fontSize: '0.8rem', fontWeight: 800, marginBottom: '10px' }}>
          <Store size={14} /> RWANDA MULTI-VENDOR ECOSYSTEM
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>
          Sell on Home Market Supermarket
        </h1>
        <p style={{ fontSize: '1rem', color: '#CBD5E1', maxWidth: '650px', margin: '0 auto' }}>
          Reach hundreds of thousands of customers across all 30 districts in Rwanda. Access unified warehousing, instant MTN MoMo payouts, and verified merchant credentials.
        </p>
      </div>

      {/* 4 Value Cards for Sellers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ padding: '1.25rem', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
          <Smartphone size={24} color="#22C55E" style={{ margin: '0 auto 8px auto' }} />
          <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Daily MoMo Payouts</strong>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Direct to your MTN/Airtel business wallet</span>
        </div>

        <div style={{ padding: '1.25rem', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
          <ShieldCheck size={24} color="#2563EB" style={{ margin: '0 auto 8px auto' }} />
          <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Verified Merchant Badge</strong>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Instant credibility with Rwandan buyers</span>
        </div>

        <div style={{ padding: '1.25rem', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
          <Building2 size={24} color="#D97706" style={{ margin: '0 auto 8px auto' }} />
          <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Supermarket Logistics</strong>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Fulfillment from Kigali flagship hub</span>
        </div>

        <div style={{ padding: '1.25rem', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
          <Award size={24} color="#9333EA" style={{ margin: '0 auto 8px auto' }} />
          <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Low Commission</strong>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Competitive rates supporting local businesses</span>
        </div>
      </div>

      {/* Registration Form */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
          Vendor Onboarding Application (Rwanda)
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Business / Store Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Kigali Fresh Organic Ltd"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Owner / Manager Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Emmanuel Ndayisaba"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Business Phone (Rwanda) *
              </label>
              <input
                type="tel"
                required
                placeholder="+250 788 000 000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Business Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="sales@yourstore.rw"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Primary Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', backgroundColor: '#F8FAFC' }}
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                District Location in Rwanda *
              </label>
              <select
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', backgroundColor: '#F8FAFC' }}
              >
                {rwandaDistricts.map((d) => (
                  <option key={d.id} value={d.name}>{d.name} ({d.province})</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                RDB / RRA TIN Number (Optional for Individuals)
              </label>
              <input
                type="text"
                placeholder="RW-102938475"
                value={formData.tin}
                onChange={(e) => setFormData({ ...formData, tin: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                MTN MoMo Payout Phone Number *
              </label>
              <input
                type="text"
                required
                placeholder="+250 788 000 000"
                value={formData.momoPayoutPhone}
                onChange={(e) => setFormData({ ...formData, momoPayoutPhone: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
              Brief Business Description
            </label>
            <textarea
              rows={3}
              placeholder="Tell us what products you sell and your warehousing capacity in Rwanda..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
            />
          </div>

          <button type="submit" className="btn btn-accent btn-lg" style={{ marginTop: '1rem' }}>
            Submit Application & Enter Portal <ArrowRight size={18} />
          </button>
        </form>
      </div>

    </div>
  );
};
