import React from "react";
import data from "../Assets/mockdata";
import MealComponent from "./MealComponent";
import SideBar from "./SideBar";

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
    <h1>List of saved Recipes:</h1>
    </>
  );
}

export default container;
