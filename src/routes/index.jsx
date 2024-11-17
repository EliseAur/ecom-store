import { createBrowserRouter } from "react-router-dom";
import { Home, About, Login } from "../pages";
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
      // Other pages that share the same structure and lyout as Home and About
    ],
  },
  // {
  //   Other layouts and pages that doesn't share the same structure and layout as Home and About
  // }
]);

export { router };
