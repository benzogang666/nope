import "./Cart.css";

import Cart_Reservoir from "./cart-reservoir/Cart-Reservoir";

import { useCart } from "../../contexts/cartContext/CartContext";
import { LuClipboardList, LuTrash2 } from "react-icons/lu";
import { NavLink } from "react-router";

const Cart = () => {
  const { cart, clearCart } = useCart();

  if (!cart.length) return <NavLink className="cart-empty" to="/menu">Перейти в Меню</NavLink>;

  return (
    <div>
      <div className="cart">
        <div className="cart-panel">
          <NavLink to="check">
            <LuClipboardList size="25px" />
          </NavLink>
          Dashboard
          <LuTrash2
            size="25px"
            onClick={() => confirm("Очистить корзину?") && clearCart()}
          />
        </div>

        <Cart_Reservoir />
      </div>
    </div>
  );
};

export default Cart;
