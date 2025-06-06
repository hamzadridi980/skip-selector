import React from 'react';
import { Calendar } from 'lucide-react';

const PageHeader = () => {
  const styles = {
    header: {
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid #e5e7eb',
    },
    headerContent: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '1.5rem 1rem',
    },
    headerTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    headerTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#111827',
      margin: 0,
    },
    headerInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    headerInfoItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      color: '#6b7280',
    },
    headerIcon: {
      marginRight: '0.25rem',
    },
    headerSubtitle: {
      color: '#6b7280',
      maxWidth: '32rem',
      margin: 0,
    },
  };

  return (
    <div style={styles.header}>
      <div style={styles.headerContent}>
        <div style={styles.headerTop}>
          <h1 style={styles.headerTitle}>Choose Your Skip Size</h1>
          <div style={styles.headerInfo}>
            <span style={styles.headerInfoItem}>
              <Calendar size={16} style={styles.headerIcon} />
              14 days included
            </span>
          </div>
        </div>
        <p style={styles.headerSubtitle}>
          Select the perfect skip size for your project. All prices include VAT and 14-day hire period.
        </p>
      </div>
    </div>
  );
};

export default PageHeader;