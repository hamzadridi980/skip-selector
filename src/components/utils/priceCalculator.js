export const calculateTotalPrice = (priceBeforeVat, vat) => {
  return (priceBeforeVat * (1 + vat / 100)).toFixed(0);
};

export const calculateVatAmount = (priceBeforeVat, vat) => {
  return (priceBeforeVat * vat / 100).toFixed(0);
};