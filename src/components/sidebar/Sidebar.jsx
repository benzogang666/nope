import "./Sidebar.css";

import { useState } from "react";
import { NavLink } from "react-router";

import { LuMenu } from "react-icons/lu";

const Side = () => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  const openSide = () => setIsOpenSide(true);
  const closeSide = () => setIsOpenSide(false);
  return (
    <>
      <LuMenu size={"22px"} onClick={openSide} />

      {isOpenSide && (
        <div className="side-bar">
          <div className="se-br-list">
            <NavLink className="se-br-navigate" onClick={closeSide} to="menu">
              Меню
            </NavLink>
            <NavLink className="se-br-navigate" onClick={closeSide} to="cart">
              Корзина
            </NavLink>
            <NavLink
              className="se-br-navigate"
              onClick={closeSide}
              to="reviews"
            >
              Отзывы
            </NavLink>
            <NavLink
              className="se-br-navigate"
              onClick={closeSide}
              to="contacts"
            >
              Контакты
            </NavLink>
            <NavLink
              className="se-br-navigate"
              onClick={closeSide}
              to="vacancies"
            >
              Вакансии
            </NavLink>
            <NavLink
              className="se-br-navigate"
              onClick={closeSide}
              to="check"
            >
              Чек
            </NavLink>
          </div>
          <div className="se-br-navigate" onClick={closeSide}>
            close
          </div>
        </div>
      )}
    </>
  );
};

export default Side;
