import React from "react";
import { Store, useGlobalState } from "state-pool";

Store.setState("arrOfId");

let SaveRecipes = function (mealID) {
  console.log(mealID);

  return mealID.mealID;
};

export default SaveRecipes;
