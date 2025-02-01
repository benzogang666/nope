import "./Categories.css";

import { useMenu } from "../../../contexts/menuContext/MenuContext";

import { useEffect } from "react";

import { NavLink, useNavigate, useParams } from "react-router";

const Categories = () => {
  const menu = useMenu();
  const navigate = useNavigate();
  const { category } = useParams();

  const categories = menu.categories;

  useEffect(() => {
    const current = categories.find((line) => line.slug === category);

    current?.subcategories.length &&
      navigate(`/menu/${current.slug}/${current.subcategories[0].slug}`);
  }, [categories, category, navigate]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <NavLink
          className="category"
          to={`/menu/${category.slug}`}
          key={category.slug}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;