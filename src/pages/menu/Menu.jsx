import "./Menu.css";
import { useState, useEffect } from "react";
import menu from "../../assets/menu";
import RC from "../../components/cards/row-card/Row-Card";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0].slug); // Устанавливаем первую категорию по умолчанию
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null); // Сброс подкатегории при смене категории
  };

  const handleSubcategoryChange = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  const handleResetSubcategory = () => {
    setActiveSubcategory(null); // Сброс подкатегории на "Все"
  };

  const getFilteredItems = () => {
    if (!activeCategory) return [];
    
    const selectedCategory = menu.categories.find((cat) => cat.slug === activeCategory);
    if (!selectedCategory) return [];
    
    if (!activeSubcategory) {
      return selectedCategory.subcategories.flatMap((sub) => sub.items);
    }
    
    const selectedSubcategory = selectedCategory.subcategories.find((sub) => sub.slug === activeSubcategory);
    return selectedSubcategory ? selectedSubcategory.items : [];
  };

  useEffect(() => {
    // Если категория выбрана, то выбираем первую подкатегорию (если она есть)
    if (menu.categories[0] && menu.categories[0].subcategories.length > 0) {
      setActiveSubcategory(menu.categories[0].subcategories[0].slug);
    }
  }, [activeCategory]);

  return (
    <div className="menu">
      <div className="categories">
        {menu.categories.map((category) => (
          <div
            className="category"
            key={category.slug}
            onClick={() => handleCategoryChange(category.slug)}
          >
            {category.name}
          </div>
        ))}
      </div>

      {/* Подкатегории отображаются всегда, даже если выбрана категория */}
      {activeCategory && (
        <div className="sub-categories">
          <div
            className="sub-category"
            onClick={handleResetSubcategory}
          >
            Все
          </div>
          {menu.categories
            .find((cat) => cat.slug === activeCategory)
            .subcategories.map((subcategory) => (
              <div
                className="sub-category"
                key={subcategory.slug}
                onClick={() => handleSubcategoryChange(subcategory.slug)}
              >
                {subcategory.name}
              </div>
            ))}
        </div>
      )}

      {/* Карточки с товарами */}
      <div className="items">
        {getFilteredItems().map((item) => (
          <RC round={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
