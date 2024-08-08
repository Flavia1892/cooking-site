import React from "react";
import ButtonToHomePage from "../Components/ButtonToHomePage";

function RecipePage({ titleName }) {
  
  console.log({ titleName });
  return (
    <>
      <h1>Recipe here</h1>

      <h2>Title: {titleName}</h2>
      <ButtonToHomePage />
    </>
  );
}

export default RecipePage;
