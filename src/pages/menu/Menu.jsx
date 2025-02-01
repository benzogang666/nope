import "./Menu.css";
import { menu } from "../../contexts/menuContext/MenuContext";
import { useState } from "react";
import MCC from "../../components/cards/col-card/Col-Card";
import MRC from "../../components/cards/row-card/Row-Card";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(
    activeCategory.subcategories[0]
  );
  const [view, setView] = useState("row");

  return (
    <div className="menu-container">
      <h1 className="menu-title">Меню</h1>
      <div className="menu-categories">
        {menu.categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => {
              setActiveCategory(cat);
              setActiveSubcategory(cat.subcategories[0]);
            }}
            className={`category-button ${
              activeCategory.slug === cat.slug ? "active-category" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="menu-subcategories">
        {activeCategory.subcategories.map((sub) => (
          <button
            key={sub.slug}
            onClick={() => setActiveSubcategory(sub)}
            className={`subcategory-button ${
              activeSubcategory.slug === sub.slug ? "active-subcategory" : ""
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      <div className="reservoir">
        <div className="reservoir-view-cards">
          <LuLayoutList size={"20px"} onClick={() => setView("col")} />
          <LuLayoutGrid size={"20px"} onClick={() => setView("row")} />
        </div>

        {view === "col" ? (
          <MCC round={activeSubcategory.items} />
        ) : (
          <MRC round={items} />
        )}
      </div>
    </div>
  );
};

export default Menu;
