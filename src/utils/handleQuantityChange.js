export const handleQuantityChange = (cart, setCart, productId, newQuantity) => {
  if (newQuantity <= 0) {
    setCart(cart.filter((product) => product.id !== productId));
  } else {
    setCart(
      cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
  }
};
