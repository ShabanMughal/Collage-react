import React from "react";
import "./Hero.css";
import Dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure education for better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          quod quas cumque dolorem, placeat consequatur quos voluptatum autem
          tenetur odit facere saepe aut omnis sit.
        </p>
        <button className="btn">Explore more <img src={Dark_arrow} /></button>
      </div>
    </div>
  );
};

export default Hero;
