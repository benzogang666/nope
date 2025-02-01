import "./Categories.css";

import { useMenu } from "../../../contexts/menuContext/MenuContext";

import { NavLink } from "react-router";

const Categories = () => {
  const menu = useMenu();

  const categories = menu.categories;

  return (
    <div className="categories">
      {categories.map((category) => (
        <NavLink
          className="category"
          to={`menu/${category.slug}`}
          key={category.slug}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
