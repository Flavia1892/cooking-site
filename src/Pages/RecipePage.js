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
  console.log("This is the meal object:" + mealObj);
  GetItemsFromRecipe(mealObj);

  return (
    <>
      <h1>Recipe here</h1>

      <h2>Title: {mealObj.strMeal}</h2>
      <h3>{mealObj.strArea}</h3>
      <h3>{mealObj.strCategory}</h3>
      <h3>
        Instructions:<br></br>
        {mealObj.strInstructions}
      </h3>

      <ButtonToHomePage />
    </>
  );
}

export default RecipePage;
