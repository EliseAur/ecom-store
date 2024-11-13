import { createBrowserRouter } from "react-router-dom";
import { Home, About } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export { router };
