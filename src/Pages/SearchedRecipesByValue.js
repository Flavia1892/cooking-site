import React from "react";
import ButtonToHomePage from "../Components/ButtonToHomePage";
import MealComponents2 from "../Components/MealComponents2";
import { useLocation } from "react-router-dom";

function SearchedRecipesByValue() {
  let location = useLocation();
  let Meals = location.state;
  
  let numberOfRecipes = Meals.length;

  return (
    <>
      <p className="titlePage">Searched Recipes</p>

      <p class="numberOfRecipes">Number of recipes:{numberOfRecipes}</p>

      <div className="containerMare">
        <div className="container-fluid">
          {Meals.map((meal) => {
            return <MealComponents2 meal={meal} />;
          })}
        </div>
      </div>

      <ButtonToHomePage />
    </>
  );
}

export default SearchedRecipesByValue;
