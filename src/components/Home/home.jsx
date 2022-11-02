import "./home.css";
import React from "react";
import Social from "./social";
import Data from "./data";
import ScrollDown from "./scrolldown";

const Home = () => {
  return (
    <section className="home_section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};
export default Home;
