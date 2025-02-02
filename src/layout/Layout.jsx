import "./Layout.css";

import Menu from "../pages/menu/Menu";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="main">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Layout;