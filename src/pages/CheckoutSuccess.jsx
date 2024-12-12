import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { CheckoutSuccessContent } from "../components";

function CheckoutSuccess() {
  const { clearCart, cart } = useOutletContext();
  useEffect(() => {
    clearCart();
  }, []);

  console.log("Cart after CheckoutSuccess:", cart);

  return <CheckoutSuccessContent />;
}

export default CheckoutSuccess;
