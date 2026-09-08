import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import {
  TrendingUp,
  Database,
  Smartphone,
  ShieldCheck,
  Globe,
  Layers,
  Award,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  Download,
  Mail,
  Zap
} from 'lucide-react';

export const InvestorHub = () => {
  const { setCurrentView, addToast } = useMarketplace();

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0A192F 0%, #0F294A 50%, #1E40AF 100%)',
        color: '#FFFFFF',
        padding: '5rem 0 6rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '840px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', backgroundColor: 'rgba(255,255,255,0.12)', marginBottom: '1.25rem' }}>
            <TrendingUp size={14} color="#38BDF8" />
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.04em' }}>
              INVESTOR OVERVIEW & STRATEGIC VISION
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Building the Digital Commerce Infrastructure for Rwanda.
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            Home Market Supermarket is a multi-category digital marketplace anchored by physical supermarket infrastructure, capturing the rapid consumer transition to mobile-first commerce in Rwanda and East Africa.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              className="btn btn-accent btn-lg"
              onClick={() => addToast('Investor Deck (PDF) download started!', 'success')}
            >
              <Download size={18} /> Download Strategic Pitch Deck (PDF)
            </button>

            <button
              className="btn btn-outline btn-lg"
              onClick={() => setCurrentView('about-us')}
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF' }}
            >
              Explore 4D Store Showcase
            </button>
          </div>
        </div>
      </section>

      {/* 4 Market Metrics Cards */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            
            <div style={{ padding: '2rem', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Total Addressable Market</span>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F294A', margin: '4px 0' }}>$2.8B+</div>
              <p style={{ fontSize: '0.85rem', color: '#64748B' }}>Rwanda retail & emerging e-commerce consumer spend by 2028.</p>
            </div>

            <div style={{ padding: '2rem', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Mobile Money Penetration</span>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#16A34A', margin: '4px 0' }}>82%+</div>
              <p style={{ fontSize: '0.85rem', color: '#64748B' }}>Adult population actively transacting via MTN MoMo and Airtel.</p>
            </div>

            <div style={{ padding: '2rem', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Main Catalog Categories</span>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#2563EB', margin: '4px 0' }}>47+</div>
              <p style={{ fontSize: '0.85rem', color: '#64748B' }}>Breadth across retail, agriculture, tech, services, and B2B.</p>
            </div>

            <div style={{ padding: '2rem', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>District Delivery Reach</span>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#D97706', margin: '4px 0' }}>30/30</div>
              <p style={{ fontSize: '0.85rem', color: '#64748B' }}>100% nationwide logistics coverage from Kigali hub.</p>
            </div>

          </div>

          {/* The Marketplace Flywheel */}
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
              Competitive Moat & Unit Economics
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem' }}>
              Why Home Market Supermarket Wins
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Pure e-commerce platforms struggle with consumer trust and inventory unpredictability in Africa. By combining physical supermarket hubs with a scalable digital platform, we achieve superior economics and brand loyalty.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
              
              <div style={{ padding: '1.5rem', backgroundColor: '#EFF6FF', borderRadius: '14px', border: '1px solid #DBEAFE' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#1E40AF', marginBottom: '6px' }}>
                  1. Zero Ghost Inventory
                </strong>
                <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.5' }}>
                  Physical supermarket hubs hold live stock, eliminating cancellation rates and building immediate customer trust.
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#F0FDF4', borderRadius: '14px', border: '1px solid #DCFCE7' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#15803D', marginBottom: '6px' }}>
                  2. Micro-Escrow with MTN MoMo
                </strong>
                <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.5' }}>
                  No payment friction. Rwandan shoppers pay via USSD (*182#), while vendor payouts are settled daily upon delivery.
                </p>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: '#FEF3C7', borderRadius: '14px', border: '1px solid #FDE68A' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#B45309', marginBottom: '6px' }}>
                  3. Multiple High-Margin Revenue Streams
                </strong>
                <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.5' }}>
                  Revenue from 8-15% marketplace commissions, direct 22% retail margins, fulfillment fees, and vendor advertising.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Investor Contact */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#0A192F', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1rem' }}>
            Investor & Partner Inquiries
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '2rem' }}>
            For strategic partnerships, institutional financing, or commercial vendor expansion, contact our executive team.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', color: '#38BDF8', fontWeight: 700 }}>
            <Mail size={18} /> investors@homemarket.rw
          </div>
        </div>
      </section>

    </div>
  );
};
