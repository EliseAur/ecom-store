import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { CheckoutSuccessContent } from "../components";

function CheckoutSuccess() {
  const { clearCart, cart } = useOutletContext();
  const hasClearedCart = useRef(false);

  useEffect(() => {
    if (!hasClearedCart.current) {
      console.log("Cart before CheckoutSuccess:", cart);
      clearCart();
      hasClearedCart.current = true;
    }
  }, [clearCart, cart]);

  console.log("Cart after CheckoutSuccess:", cart);

  return <CheckoutSuccessContent />;
}

export default CheckoutSuccess;
