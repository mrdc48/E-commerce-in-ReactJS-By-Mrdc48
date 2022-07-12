import React from "react";
import "./from.scss";

export default function form({ label, ...element }) {
  return (
    <div className="group">
      <input className="form-input" {...element} />

      {label && (
        <label
          className={`${
            element.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
