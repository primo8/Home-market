import React from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts } = useMarketplace();

  if (!toasts.length) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '380px'
    }}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '12px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            fontSize: '0.875rem',
            fontWeight: 500,
            borderLeft: `4px solid ${toast.type === 'success' ? '#22C55E' : toast.type === 'error' ? '#EF4444' : '#3B82F6'}`,
            animation: 'fadeInUp 0.3s ease'
          }}
        >
          {toast.type === 'success' && <CheckCircle2 size={18} color="#22C55E" />}
          {toast.type === 'error' && <AlertCircle size={18} color="#EF4444" />}
          {toast.type === 'info' && <Info size={18} color="#3B82F6" />}
          <span style={{ flex: 1 }}>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
