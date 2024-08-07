import React from "react";
import Container from "../Components/container";
import Navbar from "../Components/Navbar";
import ButtonMoreRecipes from "../Components/buttonMoreRecipes";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <title>Cooking App</title>

      <Navbar />

      <Container />
      <ButtonMoreRecipes />
      <Footer/>
    </>
  );
}

export default HomePage;
