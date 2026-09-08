import React, { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatRWF } from '../../utils/formatters';
import { rwandaDistricts, pickupLocations } from '../../data/locations';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  MapPin,
  Truck,
  CreditCard,
  Smartphone,
  ShieldCheck,
  Building2,
  ChevronRight,
  ArrowRight,
  ShoppingBag,
  Store,
  Clock,
  Zap,
  Info
} from 'lucide-react';

export const CheckoutFlow = () => {
  const {
    cart,
    cartSubtotal,
    deliveryFee,
    cartTotal,
    currentDistrict,
    setCurrentDistrict,
    deliveryMethod,
    setDeliveryMethod,
    selectedPickup,
    setSelectedPickup,
    placeOrder,
    setCurrentView,
    addToast
  } = useMarketplace();

  const [currentStep, setCurrentStep] = useState(1); // 1: Cart, 2: Address, 3: Shipping, 4: Payment, 5: Confirmation
  const [addressData, setAddressData] = useState({
    fullName: 'David Habimana',
    phone: '+250 788 456 789',
    streetAddress: 'KG 9 Ave, Nyarutarama Villa #14',
    landmark: 'Near MTN Centre Nyarutarama',
    notes: 'Please call when arriving at the gate'
  });

  const [paymentProvider, setPaymentProvider] = useState('momo'); // 'momo' | 'airtel' | 'card' | 'bank'
  const [momoNumber, setMomoNumber] = useState('0788456789');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  if (cart.length === 0 && currentStep !== 5) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem', textAlign: 'center' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
          <ShoppingBag size={32} color="#2563EB" />
        </div>
        <h2 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '8px' }}>Your cart is empty</h2>
        <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.5rem' }}>
          Please add items to your cart before proceeding to checkout.
        </p>
        <button className="btn btn-primary" onClick={() => setCurrentView('categories')}>
          Browse 47+ Categories
        </button>
      </div>
    );
  }

  const handleCompleteOrder = () => {
    setIsProcessingPayment(true);

    // Simulate Rwanda MoMo USSD Push / Payment Confirmation
    setTimeout(() => {
      const order = placeOrder({
        address: `${addressData.streetAddress}, ${currentDistrict.name} (${currentDistrict.province})`,
        phone: momoNumber,
        paymentMethod: paymentProvider === 'momo' ? 'MTN Mobile Money (*182#)' : paymentProvider === 'airtel' ? 'Airtel Money (*500#)' : 'Bank Card / Visa'
      });

      setCompletedOrder(order);
      setIsProcessingPayment(false);
      setCurrentStep(5);

      // Trigger Celebration Confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }

      addToast('Order placed successfully! MoMo transaction confirmed.', 'success');
    }, 1800);
  };

  const steps = [
    { num: 1, label: "Cart Summary" },
    { num: 2, label: "Rwanda Address" },
    { num: 3, label: "Delivery Speed" },
    { num: 4, label: "Payment & Escrow" },
    { num: 5, label: "Confirmation" }
  ];

  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem', maxWidth: '1080px' }}>
      
      {/* Checkout Progress Stepper */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2.5rem',
        padding: '1.25rem',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        overflowX: 'auto'
      }}>
        {steps.map((s, idx) => {
          const isDone = currentStep > s.num;
          const isCurrent = currentStep === s.num;
          return (
            <React.Fragment key={s.num}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: isDone || isCurrent ? 1 : 0.45 }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: isDone ? '#22C55E' : isCurrent ? '#2563EB' : '#E2E8F0',
                  color: isDone || isCurrent ? '#FFFFFF' : '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}>
                  {isDone ? <CheckCircle2 size={18} /> : s.num}
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: isCurrent ? 800 : 600, color: isCurrent ? '#0F172A' : '#64748B', whiteSpace: 'nowrap' }}>
                  {s.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div style={{ flex: 1, height: '2px', backgroundColor: isDone ? '#22C55E' : '#E2E8F0', margin: '0 10px', minWidth: '20px' }} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Main Form Content */}
      <div style={{ display: 'grid', gridTemplateColumns: currentStep === 5 ? '1fr' : '1fr 340px', gap: '2rem' }}>
        
        {/* Step Panels */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '2rem' }}>
          
          {/* STEP 1: CART REVIEW */}
          {currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
                Review Items in Your Order
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} style={{ display: 'flex', gap: '14px', paddingBottom: '1rem', borderBottom: '1px solid #F1F5F9', alignItems: 'center' }}>
                    <img src={product.images[0]} alt="" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.9rem', color: '#0F172A', fontWeight: 600 }}>{product.name}</h4>
                      <div style={{ fontSize: '0.785rem', color: '#64748B' }}>Qty: {quantity} • Sold by {product.sellerName}</div>
                    </div>
                    <strong style={{ fontSize: '0.95rem', color: '#0F294A' }}>
                      {formatRWF(product.price * quantity)}
                    </strong>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary btn-lg" onClick={() => setCurrentStep(2)}>
                Continue to Delivery Address <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* STEP 2: RWANDA ADDRESS & DISTRICT */}
          {currentStep === 2 && (
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Where Should We Deliver in Rwanda?
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem' }}>
                Home Market Supermarket delivers directly to homes and offices across all 30 districts.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={addressData.fullName}
                    onChange={(e) => setAddressData({ ...addressData, fullName: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Phone Number (MoMo Enabled) *
                  </label>
                  <input
                    type="text"
                    value={addressData.phone}
                    onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Select Rwanda District *
                </label>
                <select
                  value={currentDistrict.id}
                  onChange={(e) => {
                    const dist = rwandaDistricts.find(d => d.id === e.target.value);
                    if (dist) setCurrentDistrict(dist);
                  }}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', backgroundColor: '#F8FAFC' }}
                >
                  {rwandaDistricts.map(d => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.province}) — {formatRWF(d.deliveryFee)} ({d.estHours})
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Street Name / House / Office Address *
                </label>
                <input
                  type="text"
                  value={addressData.streetAddress}
                  onChange={(e) => setAddressData({ ...addressData, streetAddress: e.target.value })}
                  placeholder="e.g. KG 9 Ave, Nyarutarama Villa #14"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Delivery Instructions / Landmark
                </label>
                <input
                  type="text"
                  value={addressData.landmark}
                  onChange={(e) => setAddressData({ ...addressData, landmark: e.target.value })}
                  placeholder="e.g. Near MTN Centre or KBC roundabout"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-outline" onClick={() => setCurrentStep(1)}>
                  Back
                </button>
                <button className="btn btn-primary btn-lg" onClick={() => setCurrentStep(3)}>
                  Continue to Delivery Method <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DELIVERY METHOD */}
          {currentStep === 3 && (
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>
                Choose Delivery Speed
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {/* Option 1: Doorstep Delivery */}
                <div
                  onClick={() => setDeliveryMethod('standard')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: `2px solid ${deliveryMethod === 'standard' ? '#2563EB' : '#E2E8F0'}`,
                    backgroundColor: deliveryMethod === 'standard' ? '#EFF6FF' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Truck size={18} color="#2563EB" />
                      <strong style={{ color: '#0F172A' }}>Doorstep Delivery to {currentDistrict.name}</strong>
                    </div>
                    <strong style={{ color: '#2563EB' }}>
                      {currentDistrict.province === 'Kigali City' && cartSubtotal >= 35000 ? 'FREE' : formatRWF(currentDistrict.deliveryFee)}
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    Estimated delivery time: <strong>{currentDistrict.estHours}</strong>. Direct to your door by Home Market courier fleet.
                  </p>
                </div>

                {/* Option 2: Store Pickup at Flagship */}
                <div
                  onClick={() => setDeliveryMethod('pickup')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: `2px solid ${deliveryMethod === 'pickup' ? '#2563EB' : '#E2E8F0'}`,
                    backgroundColor: deliveryMethod === 'pickup' ? '#EFF6FF' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Store size={18} color="#16A34A" />
                      <strong style={{ color: '#0F172A' }}>Self-Pickup at Home Market Flagship Store</strong>
                    </div>
                    <span className="badge badge-green">FREE (0 RWF)</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    {selectedPickup.name} • {selectedPickup.address} ({selectedPickup.hours})
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-outline" onClick={() => setCurrentStep(2)}>
                  Back
                </button>
                <button className="btn btn-primary btn-lg" onClick={() => setCurrentStep(4)}>
                  Continue to Payment <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RWANDA PAYMENT & ESCROW */}
          {currentStep === 4 && (
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Select Payment Method
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem' }}>
                Transactions are protected by Home Market Escrow until you inspect your items.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                
                {/* MTN MoMo */}
                <div
                  onClick={() => setPaymentProvider('momo')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: `2px solid ${paymentProvider === 'momo' ? '#F59E0B' : '#E2E8F0'}`,
                    backgroundColor: paymentProvider === 'momo' ? '#FEF3C7' : '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F59E0B', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto', fontWeight: 900 }}>
                    MoMo
                  </div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>MTN Mobile Money</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>*182# Instant USSD Push</span>
                </div>

                {/* Airtel Money */}
                <div
                  onClick={() => setPaymentProvider('airtel')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: `2px solid ${paymentProvider === 'airtel' ? '#EF4444' : '#E2E8F0'}`,
                    backgroundColor: paymentProvider === 'airtel' ? '#FEE2E2' : '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EF4444', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto', fontWeight: 900 }}>
                    Air
                  </div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Airtel Money</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>*500# Instant Push</span>
                </div>

                {/* Card / Bank */}
                <div
                  onClick={() => setPaymentProvider('card')}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: `2px solid ${paymentProvider === 'card' ? '#2563EB' : '#E2E8F0'}`,
                    backgroundColor: paymentProvider === 'card' ? '#EFF6FF' : '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563EB', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>
                    <CreditCard size={20} />
                  </div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Card / Bank</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>BK / I&M / Visa</span>
                </div>

              </div>

              {/* MoMo Number Prompt Field */}
              {(paymentProvider === 'momo' || paymentProvider === 'airtel') && (
                <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    {paymentProvider === 'momo' ? 'Enter MTN MoMo Phone Number' : 'Enter Airtel Money Phone Number'}
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ padding: '10px 14px', backgroundColor: '#E2E8F0', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem' }}>+250</span>
                    <input
                      type="text"
                      value={momoNumber}
                      onChange={(e) => setMomoNumber(e.target.value)}
                      placeholder="0788..."
                      style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem', fontWeight: 700 }}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px', fontSize: '0.785rem', color: '#64748B' }}>
                    <Info size={14} color="#2563EB" />
                    You will receive a PIN prompt on your phone to authorize <strong>{formatRWF(cartTotal)}</strong>.
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-outline" onClick={() => setCurrentStep(3)}>
                  Back
                </button>
                <button
                  className="btn btn-accent btn-lg"
                  onClick={handleCompleteOrder}
                  disabled={isProcessingPayment}
                  style={{ flex: 1 }}
                >
                  {isProcessingPayment ? (
                    'Connecting to MTN MoMo Gateway...'
                  ) : (
                    <>Confirm & Pay {formatRWF(cartTotal)} <Zap size={18} /></>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: ORDER CONFIRMATION RECEIPT */}
          {currentStep === 5 && completedOrder && (
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <CheckCircle2 size={40} color="#16A34A" />
              </div>

              <span className="badge badge-green" style={{ marginBottom: '8px' }}>
                Payment Received • Order Confirmed
              </span>

              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Murakoze Cyane! Thank You For Your Order.
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#64748B', maxWidth: '520px', margin: '0 auto 2rem auto' }}>
                Your order <strong>#{completedOrder.id}</strong> is being prepared for same-day dispatch to <strong>{completedOrder.district}</strong>.
              </p>

              {/* Receipt Summary Card */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '1.5rem', textAlign: 'left', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#64748B' }}>Order Number:</span>
                  <strong>{completedOrder.id}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#64748B' }}>Payment Method:</span>
                  <span>{completedOrder.paymentMethod}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span style={{ color: '#64748B' }}>Estimated Delivery:</span>
                  <span style={{ color: '#16A34A', fontWeight: 700 }}>{completedOrder.estimatedDelivery}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #E2E8F0', fontSize: '1.1rem' }}>
                  <strong>Total Paid (RWF):</strong>
                  <strong style={{ color: '#0F294A' }}>{formatRWF(completedOrder.total)}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setCurrentView('account')}
                >
                  Track Order in Customer Dashboard →
                </button>

                <button
                  className="btn btn-outline btn-lg"
                  onClick={() => setCurrentView('home')}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Order Summary Right Sidebar */}
        {currentStep !== 5 && (
          <aside style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
              Order Summary
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
                <span>Subtotal ({cart.length} items):</span>
                <strong style={{ color: '#0F172A' }}>{formatRWF(cartSubtotal)}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
                <span>Delivery ({currentDistrict.name}):</span>
                <span>{deliveryFee === 0 ? <strong style={{ color: '#16A34A' }}>FREE</strong> : formatRWF(deliveryFee)}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1.5px solid #E2E8F0', marginBottom: '1.25rem', fontSize: '1.2rem' }}>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>Total Amount:</span>
              <strong style={{ fontFamily: 'var(--font-heading)', color: '#0F294A' }}>
                {formatRWF(cartTotal)}
              </strong>
            </div>

            <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE', fontSize: '0.75rem', color: '#1E40AF', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} color="#2563EB" style={{ flexShrink: 0 }} />
              <span>Protected by Home Market Escrow Guarantee.</span>
            </div>
          </aside>
        )}

      </div>

    </div>
  );
};
