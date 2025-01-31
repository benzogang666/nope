import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import Vacancies from "./pages/vacancies/Vacancies";

const router = createBrowserRouter([
  {
    path: "nope",
    element: <Layout />,
    children: [
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "vacancies",
        element: <Vacancies />,
      },
    ],
  },
]);

export default router;