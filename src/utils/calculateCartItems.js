export function calculateCartItems(cart) {
  return cart.reduce(function (sum, product) {
    return sum + product.quantity;
  }, 0);
}
