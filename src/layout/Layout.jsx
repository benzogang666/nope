import "./Layout.css";

import Header from "../components/header/Header";
import Menu from "../pages/menu/Menu";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="main">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Layout;