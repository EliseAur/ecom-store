import { useState } from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";
import { addToCart as addToCartUtil } from "../utils";

function MainLayout() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => addToCartUtil(prevCart, product));
  };

  return (
    <div id="main-container" className="">
      <Header cart={cart} />
      <Outlet context={{ cart, setCart, addToCart }} />
      <Footer />
    </div>
  );
}

export default MainLayout;
