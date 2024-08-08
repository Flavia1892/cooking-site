import React from "react";
import data from "../Assets/mockdata";
import MealComponent from "./MealComponent";

function containerMoreRecipes() {
  let Meals = data.meals;
  let numberOfRecipes = Meals.length;

  return (
    <>
      <p className="numberOfRecipes" id='morePage'>Number of recipes:{numberOfRecipes}</p>
      <div className="container-fluid">
        {Meals.map((meal) => {
          return <MealComponent meal={meal} />;
        })}
      </div>
    </>
  );
}

export default containerMoreRecipes;
