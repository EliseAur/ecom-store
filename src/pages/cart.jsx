import { useOutletContext } from "react-router-dom";
import { groupProductsById, handleQuantityChange } from "../utils";
import { CartContent } from "../components";
import { calculateTotal } from "../utils";

function Cart() {
  const { cart, setCart } = useOutletContext();
  const groupedProducts = groupProductsById(cart);
  const total = calculateTotal(groupedProducts);

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
