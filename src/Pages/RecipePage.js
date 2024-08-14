import React from "react";
import ButtonToHomePage from "../Components/ButtonToHomePage";
import { useParams } from "react-router-dom";
import data from "../Assets/mockdata";
import GetItemsFromRecipe from "../Functions/getItemsFromRecipe";

function RecipePage() {
  let { id } = useParams();

  //Function to get the meal object from mockdata using the ID
  function getRecipeData(id) {
    let mealArray = data.meals;
    let mealObj = mealArray.find((obj) => obj.idMeal === id);
    return mealObj;
  }
  //
  let mealObj = getRecipeData(id);
  let ingredientsArray = GetItemsFromRecipe(mealObj);

  return (
    <>
      <h1 class="title-recipe"> {mealObj.strMeal}</h1>
      <p id="recipe-type">
        (Recipe type: {mealObj.strArea} {mealObj.strCategory})
      </p>
      <img
        src={mealObj.strMealThumb}
        width={300}
        height={300}
        class="recipe-image"
      ></img>
      
      <p class="ingredients">
        <ul>
          List of ingredients:
          <li>{ingredientsArray}</li>
        </ul>
      </p>

      <h3 id="instructions-title">
        Instructions:<br></br>
      </h3>
      <p class="instructions">{mealObj.strInstructions}</p>

      <ButtonToHomePage />
    </>
  );
}

export default RecipePage;
