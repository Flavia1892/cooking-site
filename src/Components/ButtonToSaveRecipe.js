import React from "react";
import FunctionToSaveRecipe from "../Functions/FunctionToSaveRecipe";

function ButtonToSaveRecipe(mealID) {
  return (
    <button
      type="button"
      onClick={() => {
        FunctionToSaveRecipe(mealID);
        console.log("Click");
        alert("Meal Saved!");
      }}
    >
      Save Recipe
    </button>
  );
}

export default ButtonToSaveRecipe;
