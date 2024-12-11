import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { CheckoutSuccessContent } from "../components";

function CheckoutSuccess() {
  const { clearCart } = useOutletContext();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return <CheckoutSuccessContent />;
}

export default CheckoutSuccess;
