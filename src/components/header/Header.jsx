import "./Header.css";

import Sidebar from "../sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="header">
        <Sidebar />
        <div className="named">NOMERCY</div>
        <NavLink to="/search">
          <LuSearch size="22px" />
        </NavLink>
      </div>
    </>
  );
};

export default Header;