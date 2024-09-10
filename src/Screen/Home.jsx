import React from "react";
import Hero from "../Screen Sections/Hero";
import { Grid } from "../Components/Grid";

function Home() {
  return (
    <div className="w-full h-full">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Grid />
      </div>
    </div>
  );
}

export default Home;
