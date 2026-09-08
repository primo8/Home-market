import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF } from '../../utils/formatters';
import { rwandaDistricts } from '../../data/locations';
import { Wrench, ShieldCheck, Star, MapPin, Clock, CheckCircle2, Calendar, Phone, X } from 'lucide-react';

export const ServicesDirectory = () => {
  const { currentDistrict, addToast } = useMarketplace();
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState('Tomorrow (Morning: 9:00 AM - 12:00 PM)');
  const [bookingPhone, setBookingPhone] = useState('+250 788 456 789');
  const [bookingNotes, setBookingNotes] = useState('');

  const servicesList = [
    {
      id: "srv-1",
      title: "Plumbing & Pipe Installation",
      provider: "Kigali Master Plumbers Ltd",
      category: "Plumbing",
      rating: 4.9,
      reviews: 84,
      startingPrice: 15000,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      district: "Kigali (Gasabo, Kicukiro, Nyarugenge)",
      description: "Certified leak repair, bathroom fixtures, PPR pipe laying, water tank pump installations, and emergency drain unblocking."
    },
    {
      id: "srv-2",
      title: "Certified Electricians & Solar Installation",
      provider: "Rwanda ElectroPro Solutions",
      category: "Electrical & Solar",
      rating: 4.8,
      reviews: 120,
      startingPrice: 20000,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
      district: "All Kigali & Northern Province",
      description: "Circuit breaker diagnostics, solar panel roof mounting, pure sine inverter wiring, and commercial electrical inspection."
    },
    {
      id: "srv-3",
      title: "Home & Office Deep Cleaning",
      provider: "Kigali Clean & Shine Services",
      category: "Cleaning",
      rating: 5.0,
      reviews: 210,
      startingPrice: 25000,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      district: "Kigali City",
      description: "Hospital-grade deep sanitation, sofa shampooing, window steaming, floor buffing, and post-construction cleaning."
    },
    {
      id: "srv-4",
      title: "Mobile Doorstep Car Wash & Detailing",
      provider: "Eco Kigali Auto Spa",
      category: "Automotive",
      rating: 4.9,
      reviews: 145,
      startingPrice: 10000,
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80",
      district: "Doorstep Anywhere in Kigali",
      description: "Waterless and high-pressure steam cleaning, interior leather conditioning, headlight restoration, and ceramic waxing."
    },
    {
      id: "srv-5",
      title: "Custom Kitenge Tailoring & Fitting",
      provider: "Inziza Atelier Kigali",
      category: "Fashion & Tailoring",
      rating: 4.9,
      reviews: 95,
      startingPrice: 18000,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80",
      district: "Kicukiro & Gasabo",
      description: "Bespoke traditional Rwandan wedding outfits (Gusaba/Gukwa), modern kitenge dresses, suits, and emergency alterations."
    },
    {
      id: "srv-6",
      title: "Air Conditioner Maintenance & Gas Refill",
      provider: "CoolBreeze Rwanda Services",
      category: "Appliances",
      rating: 4.7,
      reviews: 62,
      startingPrice: 30000,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
      district: "All Rwanda Districts",
      description: "Split AC servicing, chemical coil cleaning, R410A gas recharging, and inverter compressor troubleshooting."
    }
  ];

  const handleBook = (srv) => {
    setSelectedService(srv);
    setIsBookingOpen(true);
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    setIsBookingOpen(false);
    addToast(`Service booking confirmed with ${selectedService.provider}! They will contact you shortly.`, 'success');
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0A192F 0%, #1E40AF 100%)',
        borderRadius: '20px',
        padding: '2.5rem',
        color: '#FFFFFF',
        marginBottom: '2.5rem'
      }}>
        <span className="badge badge-green" style={{ marginBottom: '8px' }}>
          <Wrench size={12} /> Rwanda Services Marketplace
        </span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>
          Verified Home & Professional Services
        </h1>
        <p style={{ fontSize: '1rem', color: '#CBD5E1', maxWidth: '650px' }}>
          Book vetted, certified Rwandan technicians, plumbers, cleaners, and artisans with transparent pricing and escrow safety.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {servicesList.map((srv) => (
          <div
            key={srv.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
              <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="badge badge-green" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <ShieldCheck size={12} /> Verified Pro
              </span>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                {srv.title}
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '8px' }}>
                by <strong>{srv.provider}</strong>
              </div>

              <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                {srv.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748B', marginBottom: '1rem' }}>
                <MapPin size={14} color="#2563EB" /> {srv.district}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.725rem', color: '#94A3B8' }}>Starting rate</div>
                  <strong style={{ fontSize: '1.1rem', color: '#0F294A' }}>{formatRWF(srv.startingPrice)}</strong>
                </div>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleBook(srv)}
                >
                  Book Service Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isBookingOpen && selectedService && (
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
            maxWidth: '520px',
            width: '100%',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                Book {selectedService.title}
              </h3>
              <button onClick={() => setIsBookingOpen(false)} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.25rem' }}>
              Provider: <strong>{selectedService.provider}</strong> • Starting from <strong>{formatRWF(selectedService.startingPrice)}</strong>
            </p>

            <form onSubmit={confirmBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Preferred Time Slot *
                </label>
                <select
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                >
                  <option value="Today (Afternoon: 2:00 PM - 5:00 PM)">Today (Afternoon: 2:00 PM - 5:00 PM)</option>
                  <option value="Tomorrow (Morning: 9:00 AM - 12:00 PM)">Tomorrow (Morning: 9:00 AM - 12:00 PM)</option>
                  <option value="Tomorrow (Afternoon: 2:00 PM - 5:00 PM)">Tomorrow (Afternoon: 2:00 PM - 5:00 PM)</option>
                  <option value="This Weekend (Saturday Morning)">This Weekend (Saturday Morning)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Your Contact Phone *
                </label>
                <input
                  type="text"
                  required
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Address & Task Details
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. KG 9 Ave, Nyarutarama - Pipe leaking under sink..."
                  value={bookingNotes}
                  onChange={(e) => setBookingNotes(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsBookingOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Confirm Service Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
