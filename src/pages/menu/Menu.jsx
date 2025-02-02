import "./Menu.css";
import menu from "../../assets/menu";
import { useState } from "react";
import RC from "../../components/cards/row-card/Row-Card";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(
    activeCategory.subcategories[0]
  );

  return (
    <>
      <div className="menu">
        <div className="categories">
          {menu.categories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubcategory(cat.subcategories[0]);
              }}
              className="category"
            >
              {cat.name}
            </div>
          ))}
        </div>

        <div className="sub-categories">
          {activeCategory.subcategories.map((sub) => (
            <div
              className={`sub-category ${
                activeSubcategory.slug === sub.slug ? "active-sub-category" : ""
              }`}
              onClick={() => setActiveSubcategory(sub)}
              key={sub.slug}
            >
              {sub.name}
            </div>
          ))}
        </div>

        <div className="items">
          {activeSubcategory.items.map((line) => (
            <RC round={line} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
