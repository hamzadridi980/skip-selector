import React from 'react';

const SkipStatusIndicator = ({ icon: Icon, isPositive, label }) => (
  <div className="flex items-center text-sm mb-3">
    <Icon 
      size={16} 
      className={`mr-2 ${isPositive ? 'text-green-600' : 'text-red-500'}`}
    />
    <span className={`font-medium ${isPositive ? 'text-green-700' : 'text-red-600'}`}>
      {label}
    </span>
  </div>
);


export default SkipStatusIndicator;