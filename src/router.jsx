import { createHashRouter } from "react-router";

import Layout from "./layout/Layout";

import Menu from "./pages/menu/Menu";

const router = createHashRouter([
  {
    path: "/nope",
    element: <Layout />,
    children: [
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);

export default router;