import React, { useContext } from "react";
import { ProductsContext } from "./product.context";
import ProductCart from "./productCart";
import "./shop.scss";
export default function Shop({ product }) {
  const { products } = useContext(ProductsContext);
  const { name, price, imageUrl } = products;

  return (
    <div className="shop-container">
      {products.map((product) => {
        return <ProductCart key={product.id} product={product} />;
      })}
    </div>
  );
}
