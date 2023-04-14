import React from "react";

export default function Component({ category }) {
  const { title } = category;
  return (
    <div className="categories-container">
      <div className="category-container">
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
}
