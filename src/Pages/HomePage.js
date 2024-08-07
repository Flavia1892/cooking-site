import React from "react";
import Container from "../Components/container";
import ButtonMoreRecipes from "../Components/buttonMoreRecipes";

function HomePage() {
  return (
    <>
      <title>Cooking App</title>
      <div>
        <p className="titlePage">Cooking App</p>
      </div>
      <Container />
      <ButtonMoreRecipes />
    </>
  );
}

export default HomePage;
