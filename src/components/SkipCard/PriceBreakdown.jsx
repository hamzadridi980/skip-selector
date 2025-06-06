import React from 'react';
import { calculateVatAmount, calculateTotalPrice } from '../utils/priceCalculator';

const PriceBreakdown = ({ skip }) => {
  const vatAmount = calculateVatAmount(skip.price_before_vat, skip.vat);
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);

  const styles = {
    priceBreakdown: {
      borderTop: '1px solid #e5e7eb',
      paddingTop: '1rem',
      marginTop: '1rem',
    },
    priceRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.25rem',
    },
    priceTotalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: '600',
      color: '#111827',
      borderTop: '1px solid #e5e7eb',
      paddingTop: '0.5rem',
      marginTop: '0.5rem',
    },
  };

  return (
    <div style={styles.priceBreakdown}>
      <div style={styles.priceRow}>
        <span>Base price</span>
        <span>£{skip.price_before_vat}</span>
      </div>
      <div style={styles.priceRow}>
        <span>VAT ({skip.vat}%)</span>
        <span>£{vatAmount}</span>
      </div>
      <div style={styles.priceTotalRow}>
        <span>Total</span>
        <span>£{totalPrice}</span>
      </div>
    </div>
  );
};

export default PriceBreakdown;