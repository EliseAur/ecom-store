export function calculateDiscount(product) {
  const { price, discountedPrice } = product;
  if (discountedPrice >= price) {
    return null;
  }
  const discount = price - discountedPrice;
  const discountPercentage = (discount / price) * 100;
  return { discount, discountPercentage, product };
}
