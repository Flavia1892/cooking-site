import React from "react";
import ContainerMoreRecipes from "../Components/containerMoreRecipes";
import PlaceHolder from "../Components/PlaceHolder";
import ButtonToHomePage from "../Components/ButtonToHomePage";

export default function MoreRecipesPage() {
  return (
    <>
      <h1 className="titlePage"> More recipes</h1>
      <div id="buttonHomeInMore">
        <ButtonToHomePage />
      </div>
      <ContainerMoreRecipes />

      <ButtonToHomePage />
    </>
  );
}
