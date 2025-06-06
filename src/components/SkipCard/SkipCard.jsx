import React, { useState } from 'react';
import { Calendar, Truck, Weight, Check } from 'lucide-react';
import PriceBreakdown from './PriceBreakdown';
import { calculateTotalPrice } from '../utils/priceCalculator';

const SkipStatusIndicator = ({ icon: Icon, isPositive, label }) => {
  const styles = {
    statusIndicator: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      marginBottom: '0.75rem',
    },
    statusIconPositive: {
      marginRight: '0.5rem',
      color: '#10b981',
    },
    statusIconNegative: {
      marginRight: '0.5rem',
      color: '#ef4444',
    },
    statusLabelPositive: {
      fontWeight: '500',
      color: '#059669',
    },
    statusLabelNegative: {
      fontWeight: '500',
      color: '#dc2626',
    },
  };

  return (
    <div style={styles.statusIndicator}>
      <Icon 
        size={16} 
        style={isPositive ? styles.statusIconPositive : styles.statusIconNegative}
      />
      <span style={isPositive ? styles.statusLabelPositive : styles.statusLabelNegative}>
        {label}
      </span>
    </div>
  );
};

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);

  const styles = {
    skipCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      border: '2px solid transparent',
      overflow: 'hidden',
    },
    skipCardSelected: {
      border: '2px solid #3b82f6',
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
      transform: 'translateY(-2px)',
    },
    skipCardHover: {
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
    },
    selectedBadge: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
    },
    skipCardHeader: {
      padding: '1.5rem',
      paddingBottom: '1rem',
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
    },
    skipCardHeaderSelected: {
      backgroundColor: '#dbeafe',
    },
    skipCardHeaderDefault: {
      backgroundColor: '#f9fafb',
    },
    skipCardHeaderTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
    },
    skipSize: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111827',
      margin: 0,
    },
    skipUnit: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#6b7280',
    },
    skipPrice: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#2563eb',
    },
    skipPriceLabel: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: '#6b7280',
      marginLeft: '0.25rem',
    },
    skipCardBody: {
      padding: '1.5rem',
      paddingTop: '1rem',
    },
    skipDetails: {
      marginBottom: '1rem',
    },
    skipDetailItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.75rem',
    },
    detailIcon: {
      marginRight: '0.5rem',
      color: '#9ca3af',
    },
    selectButton: {
      width: '100%',
      marginTop: '1rem',
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      fontWeight: '600',
      transition: 'all 0.2s ease',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.875rem',
    },
    selectButtonDefault: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
    },
    selectButtonSelected: {
      backgroundColor: '#3b82f6',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  };

  const cardStyle = {
    ...styles.skipCard,
    ...(isSelected ? styles.skipCardSelected : {}),
    ...(isHovered && !isSelected ? styles.skipCardHover : {}),
  };

  const headerStyle = {
    ...styles.skipCardHeader,
    ...(isSelected ? styles.skipCardHeaderSelected : styles.skipCardHeaderDefault),
  };

  const buttonStyle = {
    ...styles.selectButton,
    ...(isSelected ? styles.selectButtonSelected : styles.selectButtonDefault),
  };

  return (
    <div
      style={cardStyle}
      onClick={() => onSelect(skip)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isSelected && (
        <div style={styles.selectedBadge}>
          <Check size={16} color="white" />
        </div>
      )}

      <div style={headerStyle}>
        <div style={styles.skipCardHeaderTop}>
          <h3 style={styles.skipSize}>{skip.size}</h3>
          <span style={styles.skipUnit}>YARD</span>
        </div>
        <div style={styles.skipPrice}>
          £{totalPrice}
          <span style={styles.skipPriceLabel}>inc VAT</span>
        </div>
      </div>

      <div style={styles.skipCardBody}>
        <div style={styles.skipDetails}>
          <div style={styles.skipDetailItem}>
            <Calendar size={16} style={styles.detailIcon} />
            {skip.hire_period_days} day hire period
          </div>
          
          <SkipStatusIndicator
            icon={Truck}
            isPositive={skip.allowed_on_road}
            label={skip.allowed_on_road ? 'Road placement allowed' : 'Private land only'}
          />
          
          <SkipStatusIndicator
            icon={Weight}
            isPositive={skip.allows_heavy_waste}
            label={skip.allows_heavy_waste ? 'Heavy waste accepted' : 'Light waste only'}
          />
        </div>

        <PriceBreakdown skip={skip} />

        <button style={buttonStyle}>
          {isSelected ? 'Selected' : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;