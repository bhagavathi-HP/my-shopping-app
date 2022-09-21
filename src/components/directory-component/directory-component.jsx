import React from "react";
import "./directory-component-styles.scss";

import CategoryContainer from "../category-container-component/category-container-component";
const DirectoryComponent = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryContainer key={category.id} category={category} />;
      })}
    </div>
  );
};
export default DirectoryComponent;
