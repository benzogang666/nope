import "./Mini-Card.css";

import { IoIosAddCircle } from "react-icons/io";
import { useCart } from "../../../contexts/cartContext/CartContext";

const Mini_Card = ({ round }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="mini-cards">
        {round.map((line) => (
          <div className="mini-card" key={line.id}>
            <img
              className="mi-c-image"
              src={`/src/assets/Pizza/${line.image}`}
              alt={line.name}
            />
            <div className="mi-c-data">
              <div className="mi-c-named">{line.name}</div>
              <div className="mi-c-price">
                {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
                <IoIosAddCircle size={"22px"} onClick={() => addToCart(line)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mini_Card;
