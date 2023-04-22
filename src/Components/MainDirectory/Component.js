import React from "react";
import "./Component.styles.scss";
import { useNavigate } from "react-router-dom";
export default function Component({ category }) {
  const { title, route, imageUrl } = category;
  const navigate = useNavigate();

  const navigationHandler = () => navigate(route);
  return (
    <div onClick={navigationHandler} className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
