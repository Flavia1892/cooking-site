import React from "react";

function ButtonToSaveRecipe(mealObj) {
  return (
    <button
      type="button"
      onClick={() => {
        console.log(mealObj);
        let mealID = mealObj.mealObj.idMeal;

        let isDuplicate = false;

        let lastList = JSON.parse(localStorage.getItem("savedRecipes"));
        if (lastList == null) lastList = [];

        for (let key in lastList) {
          if (lastList[key].mealObj.idMeal === mealID) {
            isDuplicate = true;
            alert("Meal already saved");
          }
        }

        if (isDuplicate == false) {
          lastList.push(mealObj);
          localStorage.setItem("savedRecipes", JSON.stringify(lastList));
          lastList = [];
          let arra = JSON.parse(localStorage.getItem("savedRecipes"));

          console.log(arra);
          alert("Meal Saved!");
        }
        isDuplicate = false;
      }}
    >
      Save Recipe
    </button>
  );
}

export default ButtonToSaveRecipe;
