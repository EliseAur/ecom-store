export function filterProducts(products, searchTerm) {
  if (!Array.isArray(products)) {
    return [];
  }
  return products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
}
