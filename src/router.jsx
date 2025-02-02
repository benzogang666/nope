import { createBrowserRouter } from "react-router";

import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "nope",
    element: <Layout />,
  },
]);

export default router;