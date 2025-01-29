import "./Sub-Categories.css";

import { useMenu } from "../../../contexts/menuContext/MenuContext";

import { useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router"; // исправлено

const Sub_Categories = () => {
  const menu = useMenu();
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!category && menu.categories.length > 0) {
      const firstCategory = menu.categories[0];
      if (firstCategory?.subcategories?.length > 0) {
        navigate(
          `/nope/menu/${firstCategory.slug}/${firstCategory.subcategories[0].slug}`
        ); // добавили "nope"
      }
    }
  }, [category, menu.categories, navigate]);

  const subcategories =
    menu.categories.find((line) => line.slug === category)?.subcategories || [];

  return (
    <div className="sub-categories">
      {subcategories.map((subcategory) => (
        <NavLink
          className="sub-category"
          to={`/nope/menu/${category}/${subcategory.slug}`} // добавили "nope"
          key={subcategory.slug}
        >
          {subcategory.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sub_Categories;
