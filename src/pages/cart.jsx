import { useOutletContext } from "react-router-dom";
import { groupProductsById, handleQuantityChange } from "../utils";
import { CartContent } from "../components";

function Cart() {
  const { cart, setCart } = useOutletContext();
  const groupedProducts = groupProductsById(cart);
  const total = groupedProducts.reduce(
    (sum, product) => sum + product.discountedPrice * product.quantity,
    0,
  );

  const handleQuantityChangeHandler = (productId, newQuantity) => {
    handleQuantityChange(cart, setCart, productId, newQuantity);
  };

  return (
    <CartContent
      groupedProducts={groupedProducts}
      handleQuantityChange={handleQuantityChangeHandler}
      total={total}
    />
  );
}

export default Cart;
