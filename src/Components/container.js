import React from "react";
import data from "../Assets/mockdata";
import MealComponent from "./MealComponent";
import SideBar from "./SideBar";

function container() {
  let Meals = data.meals;
  let MealsFirstShow = Meals.slice(0, 4);

  return (
    <div className="containerMare">
      <SideBar />

      <div className="container-fluid">
        {MealsFirstShow.map((meal) => {
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
  );
}

export default container;
