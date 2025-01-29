import "./Layout.css";

import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Nomercy from "../components/nomercy/Nomercy";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Nomercy />
      </div>
    </>
  );
};

export default Layout;