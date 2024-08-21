import React from "react";
import ButtonToHomePage from "../Components/ButtonToHomePage";
import MealComponent from "../Components/MealComponent";
import ErrorCat from "../Assets/errorcat.png";

function FavoriteRecipesPage() {
  let favoriteMeals = JSON.parse(localStorage.getItem("savedRecipes"));
  let numberOfrecipes=0;
  if (favoriteMeals != null) {
     numberOfrecipes= favoriteMeals.length;
  }
  if (favoriteMeals == null)
    return (
      <>
        <div className="errorPage">
          <h1 className="titlePage"> Favorite recipes</h1>
          <div id="buttonHomeInMore">
            <ButtonToHomePage />
          </div>
          <p className="errorTitle">ERROR</p>
          <h2>No favorite recipes saved</h2>
          <div className="imgError">
            <img src={ErrorCat} width={600} height={500}></img>
          </div>
        </div>

        <ButtonToHomePage />
      </>
    );

  return (
    <>
      <p class="numberOfRecipes">Number of recipes:{numberOfrecipes}</p>
      <h1 className="titlePage"> Favorite recipes</h1>
      <div id="buttonHomeInMore">
        <ButtonToHomePage />
      </div>

      <div className="container-fluid">
        {favoriteMeals.map((meal) => {
          return <MealComponent meal={meal.mealObj} />;
        })}
      </div>

      <ButtonToHomePage />
    </>
  );
}

export default FavoriteRecipesPage;
