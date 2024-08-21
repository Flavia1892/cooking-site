import React from "react";
import data from "../Assets/mockdata";
import MealComponent from "./MealComponent";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

function container() {
  let Meals = data.meals;
  let MealsFirstShow = Meals.slice(0, 4);
  let numberOfRecipes = Meals.length;

  return (
    <>
      <div className="containerMare">
        <SideBar />

        <div className="container-fluid">
          {MealsFirstShow.map((meal) => {
            return <MealComponent meal={meal} />;
          })}

          <p className="numberOfRecipes">Number of recipes:{numberOfRecipes}</p>
        </div>
      </div>

      <Link to="/favoriterecipes">
        <button type="button" className="SavedRecipesButton">
          List of saved Recipes
        </button>
      </Link>
      <button
        type="button"
        className="deleteSavedRecipes SavedRecipesButton"
        onClick={() => {
          localStorage.clear();
          alert("Data cleared");
        }}
      >
        Delete saved Recipes
      </button>
    </>
  );
}

export default container;
