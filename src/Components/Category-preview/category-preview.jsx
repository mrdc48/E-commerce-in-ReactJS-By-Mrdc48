import React from "react";
import "./category-preview.scss";
import { Link } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link style={{ textDecoration: "none" }} to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
