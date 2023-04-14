import React, { useContext } from "react";
import "./shop.scss";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../Context/products";
export default function Shop({ product }) {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
