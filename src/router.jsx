import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Cart from "./pages/cart/Cart";
import Check from "./pages/check/Check";
import Contacts from "./pages/contacts/Contacts";
import Menu from "./pages/menu/Menu";
import Search from "./pages/search/Search";
import Vacancies from "./pages/vacancies/Vacancies";

import Core from "./pages/core/Core";

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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "check",
        element: <Check />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "vacancies",
        element: <Vacancies />,
      },
      {
        path: "core",
        element: <Core />,
      },
    ],
  },
]);

export default router;