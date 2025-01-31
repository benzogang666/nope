import "./Menu.css";
import menu from "../../assets/menu";
import { useState } from "react";

import col from "../../components/cards/col-card/Col-Card"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(
    activeCategory.subcategories[0]
  );

  return (
    <div className="menu-container">
      <div className="menu-categories">
        {menu.categories.map((category) => (
          <div
            key={category.slug}
            onClick={() => {
              setActiveCategory(category);
              setActiveSubcategory(category.subcategories[0]);
            }}
            className={`menu-category ${
              activeCategory.slug === category.slug
                ? "active-menu-category"
                : ""
            }`}
          >
            {category.name}
          </div>
        ))}
      </div>

      <div className="menu-sub-categories">
        {activeCategory.subcategories.map((sub) => (
          <div
            key={sub.slug}
            onClick={() => setActiveSubcategory(sub)}
            className={`menu-sub-category ${
              activeSubcategory.slug === sub.slug
                ? "active-menu-sub-category"
                : ""
            }`}
          >
            {sub.name}
          </div>
        ))}
      </div>

      <div className="menu-items">
        {activeSubcategory.items.map((line) => (
          <div className="card" key={line.id}>
            <div className="card-image"></div>
            <div className="card-data">
              <div className="card-named">{line.name}</div>
              <div className="card-details">{line.details}</div>
              <div className="card-price">{line.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;