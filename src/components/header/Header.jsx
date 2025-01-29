import "./Header.css";

import { useState } from "react";
import { NavLink } from "react-router";

import { IoMenu, IoSearch } from "react-icons/io5";

import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const startSidebar = () => setSidebar(true);

  const stopSidebar = () => setSidebar(false);
  return (
    <>
      <div className="header">
        <IoMenu onClick={startSidebar} />

        {sidebar && <Sidebar />}

        <div>NOMERCY</div>

        <NavLink to="/nope">
          <IoSearch />
        </NavLink>
      </div>
    </>
  );
};

export default Header;