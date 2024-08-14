import React from "react";

let getItemsFromRecipe = function (mealObj) {
  let meal = mealObj;
  let valuesArray = Object.values(meal);

  let ingredientsArray = valuesArray.slice(9, 28);
  let measurementsArray = valuesArray.slice(29, 48);

  let finalArray = [];

  for (let i = 0; i <= 20; i++) {
    if (ingredientsArray[i] && measurementsArray[i]) {
      finalArray.push(ingredientsArray[i] + " " + measurementsArray[i] + ",");
    }
  }

  return finalArray;
};
export default getItemsFromRecipe;
