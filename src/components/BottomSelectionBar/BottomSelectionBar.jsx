import React from 'react';
import { ChevronRight } from 'lucide-react';
import { calculateTotalPrice } from '../utils/priceCalculator';

const BottomSelectionBar = ({ selectedSkip, onClearSelection, onContinue }) => {
  if (!selectedSkip) return null;

  const totalPrice = calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat);

  return (
    <div className="bg-white border-t border-gray-200 shadow-lg p-4 mt-8 rounded-2xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-left">
          <h3 className="font-semibold text-gray-900 mb-1">
            Selected: {selectedSkip.size} Yard Skip
          </h3>
          <p className="text-sm text-gray-600">
            £{totalPrice} including VAT
          </p>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={onClearSelection}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Change Selection
          </button>
          <button
            onClick={onContinue}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg"
          >
            <span>Continue</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};


export default BottomSelectionBar;