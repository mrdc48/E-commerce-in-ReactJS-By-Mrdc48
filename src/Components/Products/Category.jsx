import React, { useContext, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../Context/category-context";
import ProductCard from "./ProductCard";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>{category.toLocaleUpperCase()}</h2>

      <div className="shop-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
}
