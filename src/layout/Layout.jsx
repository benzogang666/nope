import "./Layout.css";

import Header from "../components/header/Header";
import Nomercy from "../components/nomercy/Nomercy";

import Scroll from "../components/scroll/Scroll";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Nomercy />
        <Scroll />
      </div>
    </>
  );
};

export default Layout;
