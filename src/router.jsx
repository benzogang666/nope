import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

import Menu from "./pages/menu/Menu";

const router = createBrowserRouter([
  {
    path: "/nope",
    element: <Layout />,
    children: [
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
    ],
  },
]);


export default router;
