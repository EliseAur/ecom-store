export function calculateTotal(products) {
  return products.reduce(function (sum, product) {
    return sum + product.discountedPrice * product.quantity;
  }, 0);
}
