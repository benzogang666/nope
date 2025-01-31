import "./Sidebar.css";

import { NavLink } from "react-router";

const Sidebar = ({ close }) => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-info">NOMERCY</div>
        <div className="sidebar-sections">
          <NavLink className="sidebar-section" onClick={close} to="menu">Меню</NavLink>
          <NavLink className="sidebar-section" onClick={close} to="cart">Корзина</NavLink>
          <NavLink className="sidebar-section" onClick={close} to="">Контакты</NavLink>
          <NavLink className="sidebar-section" onClick={close} to="">Отзывы</NavLink>
          <NavLink className="sidebar-section" onClick={close} to="vacancies">Вакансии</NavLink>
          <NavLink className="sidebar-section" onClick={close} to="check">Чек</NavLink>
        </div>
        <div className="sidebar-section sidebar-close" onClick={close}>
          Закрыть
        </div>
      </div>
    </>
  );
};

export default Sidebar;