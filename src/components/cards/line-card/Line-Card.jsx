import "./Line-Card.css";

import { IoClose, IoRemove, IoAdd } from "react-icons/io5";
import { useCart } from "../../../contexts/cartContext/CartContext";

const Line_Card = ({ round }) => {
  const { addToCart, removeFromCart, decreaseQuantity } = useCart();
  return (
    <>
      <div className="line-cards">
        {round.map((line) => (
          <div className="line-card" key={line.id}>
            <img
              className="ln-c-image"
              src={`/src/assets/Pizza/${line.image}`}
              alt={line.name}
            />
            <div className="ln-c-data">
              <div className="ln-c-named">{line.name} Lorem ipsum dolor sit.</div>
              <div className="ln-c-price">{`${Intl.NumberFormat("ru-Ru").format(
                line.price
              )} ₸`}</div>
              <div className="ln-c-expenses">
                <div className="ln-c-counter">
                  <IoRemove onClick={() => decreaseQuantity(line.id)} />
                  {line.quantity}
                  <IoAdd onClick={() => addToCart(line)} />
                </div>
                <div className="ln-c-all-price">
                  {`${Intl.NumberFormat("ru-Ru").format(
                    line.quantity * line.price
                  )} ₸`}
                </div>
              </div>
              <IoClose
                size={"22px"}
                className="ln-c-remove"
                onClick={() => removeFromCart(line.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Line_Card;
