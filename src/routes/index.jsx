import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  About,
  Login,
  Contact,
  Cart,
  ProductDetail,
  CheckoutSuccess,
  ContactSuccess,
} from "../pages";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout-success",
        element: <CheckoutSuccess />,
      },
      {
        path: "contact-success",
        element: <ContactSuccess />,
      },
      // Other pages that share the same structure and lyout as Home and About
    ],
  },
  // {
  //   Other layouts and pages that doesn't share the same structure and layout as Home and About
  // }
]);

export { router };
