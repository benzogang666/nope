import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-info">NOMERCY</div>
        <div className="sidebar-sections">
          <div className="sidebar-section">Меню</div>
          <div className="sidebar-section">Корзина</div>
          <div className="sidebar-section">Контакты</div>
          <div className="sidebar-section">Отзывы</div>
          <div className="sidebar-section">Вакансии</div>
          <div className="sidebar-section">Чек</div>
        </div>
        <div className="sidebar-section sidebar-close">close</div>
      </div>
    </>
  );
};

export default Sidebar;