import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock, Headphones, AlertTriangle } from 'lucide-react';

export const TrustFeatures = () => {
  return (
    <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Compliance Banner for OTC */}
        <div style={{
          backgroundColor: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '12px',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <ShieldCheck size={24} color="#2563EB" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '0.85rem', color: '#1E40AF', lineHeight: '1.5' }}>
            <strong>Rwanda Regulatory Compliance Notice:</strong> All wellness and over-the-counter (OTC) healthcare items listed on Home Market Supermarket strictly adhere to Rwanda Food and Drugs Authority (Rwanda FDA) and Ministry of Health regulations. We do not support unrestricted prescription medications.
          </div>
        </div>

        {/* 4 Trust Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Truck size={26} color="#2563EB" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Real-Time Tracking
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#64748B' }}>
              Watch your package progress through 6 verified fulfillment stages from warehouse packaging to your doorstep.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Lock size={26} color="#16A34A" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Safe Mobile Money
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#64748B' }}>
              End-to-end encrypted transactions via MTN MoMo and Airtel Money with zero hidden platform charges.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <RotateCcw size={26} color="#D97706" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              7-Day Returns
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#64748B' }}>
              If a product does not match description or specifications, enjoy quick returns and immediate MoMo refunds.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Headphones size={26} color="#9333EA" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              24/7 Local Support
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#64748B' }}>
              Direct phone, WhatsApp and email customer care available in Kinyarwanda, French, and English.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
