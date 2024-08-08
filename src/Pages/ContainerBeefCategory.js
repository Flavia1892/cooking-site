import React from "react";
import data from "../Assets/mockdataBeef";
import MealComponent from "../Components/MealComponent";
import ButtonToHomePage from "../Components/ButtonToHomePage";
import PlaceHolder from "../Components/PlaceHolder";

function ContainerBeefCategory() {
  let Meals = data.meals;
  let numberOfrecipes = Meals.length;

  return (
    <>
      <p className="titlePage">Beef Recipes</p>

      <p class="numberOfRecipes">Number of recipes:{numberOfrecipes}</p>

      <div className="containerMare">
        <div className="container-fluid">
          {Meals.map((meal) => {
            return <MealComponent meal={meal} />;
          })}
        </div>
      </div>
      <PlaceHolder />
      <ButtonToHomePage />
    </>
  );
}

export default ContainerBeefCategory;
