import React from "react";
import data from "../Assets/mockdataBeef";
import MealComponent from "../Components/MealComponent";
import ButtonToHomePage from "../Components/ButtonToHomePage";
import PlaceHolder from "../Components/PlaceHolder";

function ContainerBeefCategory() {
  let Meals = data.meals;

  return (
    <>
    <p className="titlePage">Beef Recipes</p>
      <div className="containerMare">
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
      </div>
      <PlaceHolder />
      <ButtonToHomePage />
    </>
  );
}

export default ContainerBeefCategory;
