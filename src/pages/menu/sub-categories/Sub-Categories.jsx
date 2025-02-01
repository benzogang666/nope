import "./Sub-Categories.css";
import { NavLink, useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { useMenu } from "../../../contexts/menuContext/MenuContext";

const Sub_Categories = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const menu = useMenu();

  useEffect(() => {
    if (!category) {
      const firstCategory = menu.categories[0];
      navigate(
        `/menu/${firstCategory.slug}/${firstCategory.subcategories[0].slug}`
      );
    }
  }, [category, menu.categories, navigate]);

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