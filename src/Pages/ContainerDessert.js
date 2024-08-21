import React from "react";
import data from "../Assets/mockdataDessert";
import MealComponent from "../Components/MealComponent";
import ButtonToHomePage from "../Components/ButtonToHomePage";
import PlaceHolder from "../Components/PlaceHolder";

function ContainerDessert() {
  let Meals;
  Meals = data.meals;

  let numberOfrecipes = Meals.length;

  return (
    <>
      <p className="titlePage">Dessert Recipes</p>

      <p class="numberOfRecipes">Number of recipes:{numberOfrecipes}</p>

      <div className="containerMare">
        <div className="container-fluid">
          {Meals.map((meal) => {
            return <MealComponent meal={meal} />;
          })}
        </div>
      </div>

      <ButtonToHomePage />
    </>
  );
}

export default ContainerDessert;
