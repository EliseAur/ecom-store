// export const calculateTotal = (products) => {
//  return products.reduce((sum, product) => sum + product.discountedPrice * product.quantity, 0);
// };

// export const calculateTotal = (products) => {
//  return products.reduce((sum, product) => sum + product.discountedPrice * product.quantity, 0);
// };

export function calculateTotal(products) {
  return products.reduce(function (sum, product) {
    return sum + product.discountedPrice * product.quantity;
  }, 0);
}
