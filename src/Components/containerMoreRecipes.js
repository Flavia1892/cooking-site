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
            title={meal.strMeal}
            description={meal.strArea}
            category={meal.strCategory}
            youtube={meal.strYoutube}
            thumb={meal.strMealThumb}
            key={meal.idMeal}
          />
        );
      })}
    </div>
  );
}

export default containerMoreRecipes;
