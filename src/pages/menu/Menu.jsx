import "./Menu.css";

import Categories from "./categories/Categories";
import Sub_Categories from "./sub-categories/Sub-Categories";
import Menu_Reservoir from "./menu-reservoir/Menu-Reservoir";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <Categories />
        <Sub_Categories />
        <Menu_Reservoir />
      </div>
    </>
  );
};

export default Menu;