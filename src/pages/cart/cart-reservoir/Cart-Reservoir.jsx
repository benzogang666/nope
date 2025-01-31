import CLC from "../../../components/cards/line-card/Line-Card";
import { useCart } from "../../../contexts/cartContext/CartContext";

const Cart_Reservoir = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="cart-reservoir">
        <CLC round={cart} />
      </div>
    </>
  );
};

export default Cart_Reservoir;