import React, { useContext, Fragment } from "react";
import CategoryPreview from "../Category-preview/category-preview";
import { CategoriesContext } from "../Context/category-context";
export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
}
