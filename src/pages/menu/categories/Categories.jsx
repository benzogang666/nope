import "./Categories.css";

import { useMenu } from "../../../contexts/menuContext/MenuContext";

import { useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router"; // исправлено

const Categories = () => {
  const menu = useMenu();
  const { category } = useParams();
  const navigate = useNavigate();

  const categories = menu.categories;

  useEffect(() => {
    const current = categories.find((line) => line.slug === category);

    if (current?.subcategories.length) {
      navigate(`/nope/menu/${current.slug}/${current.subcategories[0].slug}`); // добавили "nope"
    }
  }, [categories, category, navigate]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <NavLink
          className="category"
          to={`/nope/menu/${category.slug}`} // добавили "nope"
          key={category.slug}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
