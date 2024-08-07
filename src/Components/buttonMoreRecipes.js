import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function ButtonMoreRecipes() {
  function showMore() {
    alert("Show me more recipes");
  }

  return (
    <div className="buttonContainer">
      <button
        type="button"
        className="btn btn-secondary btn-lg"
        onClick={showMore}
      >
        View more recipes
      </button>
    </div>
  );
}

export default ButtonMoreRecipes;
