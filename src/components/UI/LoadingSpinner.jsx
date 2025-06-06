import React, { useEffect } from 'react';

const LoadingSpinner = () => {
  // Add CSS animation keyframes
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  const styles = {
    loadingContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #e0e7ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    loadingCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    spinner: {
      width: '2rem',
      height: '2rem',
      border: '4px solid #e5e7eb',
      borderTop: '4px solid #3b82f6',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 1rem',
    },
    loadingText: {
      color: '#6b7280',
      margin: 0,
    },
  };

  return (
    <div style={styles.loadingContainer}>
      <div style={styles.loadingCard}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Loading skip options...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;