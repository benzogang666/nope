import "./Menu.css";

import { useCart } from "../../contexts/cartContext/CartContext";

import Categories from "./Categories/Categories";
import Sub_Categories from "./sub-categories/Sub-Categories";
import Menu_Reservoir from "./menu-reservoir/Menu-Reservoir";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { getTotalPrice } = useCart();

  return (
    <div>
      <div className="menu">
        <Categories />
        <Sub_Categories />
        <Menu_Reservoir />
        {getTotalPrice() > 0 && (
          <NavLink className="navigate-cart" to="/cart">
            {`${Intl.NumberFormat("ru-RU").format(getTotalPrice())} ₸`}
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Menu;
