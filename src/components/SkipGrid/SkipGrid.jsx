import React from 'react';
import SkipCard from '../SkipCard/SkipCard';

const SkipGrid = ({ skips, selectedSkip, onSkipSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {skips.map((skip) => (
      <SkipCard
        key={skip.id}
        skip={skip}
        isSelected={selectedSkip?.id === skip.id}
        onSelect={onSkipSelect}
      />
    ))}
  </div>
);

export default SkipGrid;