import React from 'react';

const ErrorMessage = ({ error }) => {
  const styles = {
    errorContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #e0e7ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    errorCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    errorIcon: {
      fontSize: '1.25rem',
      marginBottom: '1rem',
    },
    errorText: {
      color: '#6b7280',
      margin: 0,
    },
  };

  return (
    <div style={styles.errorContainer}>
      <div style={styles.errorCard}>
        <div style={styles.errorIcon}>⚠️</div>
        <p style={styles.errorText}>Error loading skip data: {error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;