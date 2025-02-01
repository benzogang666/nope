import "./Col-Card.css";

import { useState } from "react";
import { useCart } from "../../../contexts/cartContext/CartContext";
import { IoIosRemoveCircle, IoIosAddCircle } from "react-icons/io";
import Specific_Dish from "../../specifics/dish/Specific-Dish";

const Col_Card = ({ round }) => {
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();

  const [specific, setSpecific] = useState(false);

  const startSpecific = (id) => setSpecific(id);

  const stopSpecific = () => setSpecific(false);
  return (
    <>
      <div className="col-cards">
        {round.map((line) => (
          <div className="col-card" key={line.id}>
            {specific && (
              <Specific_Dish
                line={line}
                isSpecific={specific === line.id}
                stopSpecific={stopSpecific}
              />
            )}
            <img
              className="cl-c-image"
              src={`/src/assets/Pizza/${line.image}`}
              onClick={() => startSpecific(line.id)}
              alt={line.name}
            />
            <div className="cl-c-data">
              <div className="cl-c-named">{line.name}</div>
              <div className="cl-c-details">{line.details}</div>
              <div className="cl-c-expenses">
                <div className="cl-c-price">
                  {`${Intl.NumberFormat("ru-RU").format(line.price)} ₸`}
                </div>
                <div className="cl-c-counter">
                  {getProductQuantity(line.id) > 0 && (
                    <>
                      <IoIosRemoveCircle
                        size="100%"
                        onClick={() => decreaseQuantity(line.id)}
                      />
                      {getProductQuantity(line.id)}
                    </>
                  )}
                  <IoIosAddCircle size="100%" onClick={() => addToCart(line)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Col_Card;