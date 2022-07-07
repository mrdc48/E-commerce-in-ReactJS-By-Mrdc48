import Component from "./Component";

import React from "react";

export default function Logic({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <Component key={category.id} category={category} />
      ))}
    </div>
  );
}
