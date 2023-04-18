import React, { Fragment, useContext } from "react";
import "./shop.scss";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../Context/products";
export default function Shop({ product }) {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="shop-container">
            {products[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}
