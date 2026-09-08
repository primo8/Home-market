export const formatRWF = (amount) => {
  if (typeof amount !== 'number') return '0 RWF';
  return new Intl.NumberFormat('en-RW', {
    maximumFractionDigits: 0
  }).format(amount) + ' RWF';
};

export const calculateDiscount = (original, current) => {
  if (!original || !current || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
};

export const formatDate = (dateStr) => {
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
};
