import "./Sub-Categories.css";
import { NavLink, useParams } from "react-router";
import { useMenu } from "../../../contexts/menuContext/MenuContext";

const Sub_Categories = () => {
  const { category } = useParams();
  const menu = useMenu();

  const subcategories =
    menu.categories.find((line) => line.slug === category)?.subcategories || [];

  return (
    <div className="sub-categories">
      {subcategories.map((subcategory) => (
        <NavLink
          className="sub-category"
          to={`/menu/${category}/${subcategory.slug}`}
          key={subcategory.slug}
        >
          {subcategory.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sub_Categories;
