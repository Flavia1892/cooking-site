import React from "react";

function PlaceHolder() {
  return (
    <div className="placeHolder">
      <p className="placeholder-glow">
        <span className="placeholder col-12"></span>
      </p>
      <p aria-hidden="true">
        <span className="placeholder col-6"></span>
      </p>

      <a
        href="#"
        tabindex="-1"
        className="btn btn-primary disabled placeholder col-4"
        aria-hidden="true"
      ></a>
      <p className="placeholder-glow">
        <span className="placeholder col-12"></span>
      </p>

      <p className="placeholder-wave">
        <span className="placeholder col-12"></span>
      </p>
    </div>
  );
}

export default PlaceHolder;
