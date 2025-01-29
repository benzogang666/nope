import "./Header.css";

import { useState } from "react";
import { NavLink } from "react-router";

import { LuMenu, LuSearch } from "react-icons/lu";

import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const startSidebar = () => setSidebar(true);

  const stopSidebar = () => setSidebar(false);
  return (
    <>
      <div className="header">
        <LuMenu className="header-guide" onClick={startSidebar} />

        {sidebar && <Sidebar close={stopSidebar} />}

        <div>NOMERCY</div>

        <NavLink to="/nope">
          <LuSearch className="header-guide" />
        </NavLink>
      </div>
    </>
  );
};

export default Header;