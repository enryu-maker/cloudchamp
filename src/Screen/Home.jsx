import React from "react";
import Hero from "../Screen Sections/Hero";
import { Grid } from "../Components/Grid";
import { MarqueeDemo } from "Components/Maarque";

function Home() {
  return (
    <div className="w-full h-full -mt-14">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Grid />
      </div>
      <div id="reviews">
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default Home;
