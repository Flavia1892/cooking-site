import React from 'react'

let GetRandomRecipes = function (mealArray) {
let newMeals=[];
for(let i=0;i<=3;i++){
    let num=Math.floor(Math.random()*mealArray.length);
    newMeals.push(mealArray[num]);
}
console.log(newMeals);
return newMeals;
}

export default GetRandomRecipes