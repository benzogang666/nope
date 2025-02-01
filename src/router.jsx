import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import Check from "./pages/check/Check";
import Reviews from "./pages/reviews/Reviews";
import Search from "./pages/search/Search";
import Contacts from "./pages/contacts/Contacts";
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
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/:category",
        element: <Menu />,
      },
      {
        path: "menu/:category/:subcategory",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "check",
        element: <Check />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "vacancies",
        element: <Vacancies />,
      },
    ],
  },
]);

export default router;