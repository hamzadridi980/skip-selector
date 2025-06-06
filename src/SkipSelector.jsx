import React, { useState, useEffect } from 'react';
import { useSkipData } from './hooks/useSkipData';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ErrorMessage from './components/UI/ErrorMessage';
import './SkipSelector.css';

import { 
  Calendar, 
  Truck, 
  Weight, 
  Check, 
  ChevronRight, 
  MapPin,
  Clock,
  Shield,
  Star,
  Sparkles,
  Zap
} from 'lucide-react';

const calculateTotalPrice = (priceBeforeVat, vat) => {
  return Math.round(priceBeforeVat * (1 + vat / 100));
};

const SkipSelector = () => {
  const { skips, loading, error } = useSkipData();
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [hoveredSkip, setHoveredSkip] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [particleAnimation, setParticleAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setParticleAnimation(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const handleClearSelection = () => {
    setSelectedSkip(null);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      const totalPrice = calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat);
      alert(`Selected ${selectedSkip.size} Yard Skip - £${totalPrice}`);
    }
  };

  if (loading) {
    return (
      <div className="skip-selector-container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="skip-selector-container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ErrorMessage message={error} />
        </div>
      </div>
    );
  }

  return (
    <div className="skip-selector-container">
      {/* Animated Background */}
      <div className="background-pattern"></div>
      
      {/* Floating Particles */}
      {particleAnimation && (
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className={`header ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="header-content">
          <div className="step-indicator">
            <div className="step-item active">
              <div className="step-number">3</div>
              <span>Select Skip</span>
            </div>
            <ChevronRight size={16} />
            <div className="step-item">
              <MapPin size={16} />
              <span>Permit Check</span>
            </div>
            <ChevronRight size={16} />
            <div className="step-item">
              <Calendar size={16} />
              <span>Choose Date</span>
            </div>
            <ChevronRight size={16} />
            <div className="step-item">
              <Shield size={16} />
              <span>Payment</span>
            </div>
          </div>
          
          <h1 className={`header-title ${isVisible ? 'visible' : 'hidden'}`}>
            Choose Your Skip Size
          </h1>
          <p className={`header-subtitle ${isVisible ? 'visible' : 'hidden'}`}>
            Select the skip size that best suits your needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="skip-grid">
          {skips.map((skip, index) => {
            const isSelected = selectedSkip?.id === skip.id;
            const isHovered = hoveredSkip === skip.id;
            const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
            const vatAmount = (skip.price_before_vat * skip.vat / 100).toFixed(0);

            return (
              <div
                key={skip.id}
                className={`skip-card ${isVisible ? 'visible' : 'hidden'} ${isSelected ? 'selected' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => handleSkipSelect(skip)}
                onMouseEnter={() => setHoveredSkip(skip.id)}
                onMouseLeave={() => setHoveredSkip(null)}
              >
                {/* Skip Image */}
                <div className="skip-image-container">
                  <div className="skip-image-pattern"></div>
                  <div className="skip-image">
                    <div className="skip-image-side"></div>
                    <div className="skip-image-bottom"></div>
                  </div>
                  
                  <div className="size-badge">
                    <Sparkles size={14} style={{ marginRight: '0.5rem' }} />
                    {skip.size} Yards
                  </div>
                  
                  {isSelected && (
                    <div className="selected-badge">
                      <Check size={18} />
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="skip-card-content">
                  <h3 className="skip-title">{skip.size} Yard Skip</h3>
                  <p className="skip-subtitle">{skip.hire_period_days} day hire period</p>

                  {/* Features */}
                  <div className="skip-features">
                    <div className="feature-item">
                      <Clock className="feature-icon" size={16} />
                      <span className="feature-text">
                        {skip.hire_period_days} days included
                      </span>
                    </div>
                    
                    <div className="feature-item">
                      <Truck 
                        className={`feature-icon ${skip.allowed_on_road ? '' : 'warning'}`}
                        size={16} 
                      />
                      <span className="feature-text">
                        {skip.allowed_on_road ? 'Road placement allowed' : 'Private land only'}
                      </span>
                    </div>
                    
                    <div className="feature-item">
                      <Weight 
                        className={`feature-icon ${skip.allows_heavy_waste ? '' : 'warning'}`}
                        size={16} 
                      />
                      <span className="feature-text">
                        {skip.allows_heavy_waste ? 'Heavy waste accepted' : 'Light waste only'}
                      </span>
                    </div>
                       <div className="price-tooltip">
      <div className="price-tooltip-title">Pricing Breakdown</div>
      <div className="price-tooltip-breakdown">
        <div className="price-tooltip-row">
          <span>Base Price:</span>
          <span>£{skip.price_before_vat}</span>
        </div>
        <div className="price-tooltip-row">
          <span>VAT ({skip.vat}%):</span>
          <span>£{vatAmount}</span>
        </div>
      </div>
      <div className="price-tooltip-total">
        Total: £{totalPrice}
      </div>
    </div>
  
                  </div>

    {/* Pricing */}
<div className="price-section">
  <div className="price-glow"></div>
  <div className="price-row">
    <span>Base price</span>
    <span>£{skip.price_before_vat}</span>
  </div>
  <div className="price-row">
    <span>VAT ({skip.vat}%)</span>
    <span>£{vatAmount}</span>
  </div>
  <div className="total-price">
    <span>Total</span>
    <span>£{totalPrice}</span>
  </div>
</div>
                  {/* Select Button */}
                  <button className={`select-button ${isSelected ? 'selected' : 'default'}`}>
                    <div className="button-shine"></div>
                    {isSelected ? (
                      <>
                        <Check size={18} />
                        Selected
                      </>
                    ) : (
                      <>
                        <Zap size={18} />
                        Select This Skip
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Selection Bar */}
      <div className={`bottom-bar ${selectedSkip ? 'visible' : 'hidden'}`}>
        <div className="bottom-bar-content">
          <div className="bottom-bar-info">
            <h3 className="bottom-bar-title">
              <Sparkles size={20} />
              Selected: {selectedSkip?.size} Yard Skip
            </h3>
            <p className="bottom-bar-subtitle">
              £{selectedSkip ? calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat) : 0} including VAT
            </p>
          </div>
          
          <div className="bottom-bar-actions">
            <button
              onClick={handleClearSelection}
              className="change-button"
            >
              Change Selection
            </button>
            
            <button
              onClick={handleContinue}
              className="continue-button"
            >
              <div className="button-shine"></div>
              Continue
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;