import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { Smartphone, Download, Send, CheckCircle2, QrCode } from 'lucide-react';

export const AppDownload = () => {
  const { addToast } = useMarketplace();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    addToast('Thank you! You are subscribed to Home Market deals & coupons.', 'success');
  };

  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        
        {/* App Promo Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0F294A 0%, #1E40AF 100%)',
          borderRadius: '24px',
          padding: '3rem',
          color: '#FFFFFF',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          boxShadow: 'var(--shadow-xl)',
          marginBottom: '3.5rem'
        }}>
          <div>
            <span className="badge badge-green" style={{ marginBottom: '8px' }}>
              <Smartphone size={12} /> Rwanda-Optimized Mobile App
            </span>

            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
              Shop 47+ Categories Faster On Mobile.
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '2rem' }}>
              Get instant flash deal alerts, live GPS delivery tracking across Rwanda, one-tap MTN MoMo payments, and exclusive app discounts.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                className="btn btn-outline"
                style={{ backgroundColor: '#000000', color: '#FFFFFF', borderColor: '#334155', padding: '10px 18px', gap: '10px' }}
                onClick={() => addToast('Android APK download link sent!', 'info')}
              >
                <Download size={18} /> Google Play Store
              </button>

              <button
                className="btn btn-outline"
                style={{ backgroundColor: '#000000', color: '#FFFFFF', borderColor: '#334155', padding: '10px 18px', gap: '10px' }}
                onClick={() => addToast('iOS TestFlight App link sent!', 'info')}
              >
                <Download size={18} /> Apple App Store
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center',
              maxWidth: '280px'
            }}>
              <div style={{ width: '140px', height: '140px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '10px', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <QrCode size={110} color="#0F172A" />
              </div>
              <strong style={{ fontSize: '0.95rem', display: 'block', color: '#FFFFFF', marginBottom: '4px' }}>
                Scan to Download
              </strong>
              <p style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>
                Instant install for Android & iOS in Rwanda
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          padding: '2.5rem',
          textAlign: 'center',
          maxWidth: '750px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
            Stay Updated with Rwanda's Supermarket Deals
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.5rem' }}>
            Subscribe to receive weekly flash sales, new category announcements, and exclusive coupon codes in your inbox.
          </p>

          {subscribed ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#16A34A', fontWeight: 700, fontSize: '0.95rem' }}>
              <CheckCircle2 size={20} /> Thank you for subscribing to Home Market!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', maxWidth: '500px', margin: '0 auto', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-primary">
                <Send size={16} /> Subscribe
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
