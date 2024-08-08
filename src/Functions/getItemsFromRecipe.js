import React from "react";

let getItemsFromRecipe = function (mealObj) {
   for(let i=1;i<=5;i++){
    if(`${mealObj.strIngredient}${i}`)
    console.log("Ingredient:"+`${mealObj.strIngredient}${i}`);
if(`${mealObj.strMeasure}${i}`)
    console.log("Quantity:"+`${mealObj.strMeasure}${i}`);
   }
};

export default getItemsFromRecipe;
