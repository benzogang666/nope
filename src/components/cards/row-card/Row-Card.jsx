import "./Row-Card.css";

import { useState } from "react";

import { useCart } from "../../../contexts/cartContext/CartContext";

import Specific_Dish from "../../specifics/dish/Specific-Dish";

import { IoIosRemoveCircle, IoIosAddCircle } from "react-icons/io";

const Row_Card = ({ round }) => {
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  const [specific, setSpecific] = useState(false);

  const startSpecific = (id) => setSpecific(id);

  const stopSpecific = () => setSpecific(false);

  return (
    <>
      <div className="row-cards">
        {round.map((line) => (
          <div className="row-card" key={line.id}>
            {specific && (
              <Specific_Dish
                line={line}
                isSpecific={specific === line.id}
                stopSpecific={stopSpecific}
              />
            )}
            <img
              className="rw-c-image"
              src={`/src/assets/Pizza/${line.image}`}
              onClick={() => startSpecific(line.id)}
              alt={line.name}
            />
            <div className="rw-c-data">
              <div className="rw-c-named">{line.name}</div>
              <div className="rw-c-details">{line.details}</div>
              <div className="rw-c-expenses">
                <div className="rw-c-price">
                  {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
                </div>
                <div className="rw-c-counter">
                  {getProductQuantity(line.id) > 0 && (
                    <>
                      <IoIosRemoveCircle
                        size="100%"
                        onClick={() => decreaseQuantity(line.id)}
                      />
                      {getProductQuantity(line.id)}
                    </>
                  )}
                  <IoIosAddCircle
                    size={"100%"}
                    onClick={() => addToCart(line)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Row_Card;