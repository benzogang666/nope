import "./Menu.css";
import menu from "../../assets/menu";
import { useState } from "react";
import RC from "../../components/cards/row-card/Row-Card";
import CC from "../../components/cards/col-card/Col-Card";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(
    activeCategory.subcategories[0]
  );

  const [view, setView] = useState("row");

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

        <div className="reservoir">
          <div className="reservoir-views">
            <LuLayoutList size={"20px"} onClick={() => setView("col")} />
            <LuLayoutGrid size={"20px"} onClick={() => setView("row")} />
          </div>

          <div className="reservoir-cards">
            {activeSubcategory.items.map((line) =>
              view === "col" ? <CC round={line} /> : <RC round={line} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
