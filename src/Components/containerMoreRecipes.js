import React from "react";
import data from "../Assets/mockdata";
import MealComponent from "./MealComponent";

function containerMoreRecipes() {
  let Meals = data.meals;

  return (
    <div className="container-fluid">
      {Meals.map((meal) => {
        return (
          <MealComponent
            meal={meal}
          />
        );
      })}
    </div>
  );
}

export default containerMoreRecipes;
