import "./Menu-Reservoir.css";

import { useState } from "react";
import { useParams } from "react-router";
import { useMenu } from "../../../contexts/menuContext/MenuContext";

import MCC from "../../../components/cards/col-card/Col-Card";
import MRC from "../../../components/cards/row-card/Row-Card";

import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

const Menu_Reservoir = () => {
  const [view, setView] = useState("col");

  const { category, subcategory } = useParams();
  const menu = useMenu();

  const activeCategory = menu.categories.find((line) => line.slug === category);
  const activeSubCategory = activeCategory?.subcategories.find(
    (line) => line.slug === subcategory
  );

  const items = activeSubCategory?.items || [];

  return (
    <>
      <div className="reservoir">
        <div className="reservoir-view-cards">
          <LuLayoutList size={"20px"} onClick={() => setView("col")} />
          <LuLayoutGrid size={"20px"} onClick={() => setView("row")} />
        </div>

        {view === "col" ? <MCC round={items} /> : <MRC round={items} />}
      </div>
    </>
  );
};

export default Menu_Reservoir;