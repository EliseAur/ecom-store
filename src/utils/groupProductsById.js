export function groupProductsById(cart) {
  const groupedProducts = cart.reduce((groupedProducts, product) => {
    const existingProduct = groupedProducts.find(
      (item) => item.id === product.id,
    );
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      groupedProducts.push({ ...product });
    }
    return groupedProducts;
  }, []);
  return groupedProducts;
}
