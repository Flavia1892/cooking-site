import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";


function ButtonMoreRecipes() {
  return (
    <div className="buttonContainer">
      <Link to="/morerecipespages" className="btn btn-secondary btn-lg">
        View more recipes
      </Link>
    </div>
  );
}

export default ButtonMoreRecipes;
