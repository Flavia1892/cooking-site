import React from "react";
import Container from "../Components/container";
import Navbar from "../Components/Navbar";

function HomePage() {
  return (
    <>
   
      <div>
      <Navbar/>
        <h1>Cooking app</h1>
      </div>
      <Container />
    </>
  );
}

export default HomePage;
