import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h2>Highest Ranking</h2>
      <Carousel chain={"eth"}></Carousel>
      <h2>Chain 2</h2>
      <Carousel chain={"X"}></Carousel>

      <h2>Chain 3</h2>
      <Carousel chain={"SOL"}></Carousel>
    </div>
  );
}

export default Home;
