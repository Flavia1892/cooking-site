import React from "react";
import Container from "../Components/container";
import ButtonMoreRecipes from "../Components/buttonMoreRecipes";
import PlaceHolder from "../Components/PlaceHolder";

function HomePage() {
  return (
    <>
      <title>Cooking App</title>
      <div>
        <p className="titlePage">Cooking App</p>
      </div>
      <Container />
      <PlaceHolder/>
      <ButtonMoreRecipes />
    </>
  );
}

export default HomePage;
