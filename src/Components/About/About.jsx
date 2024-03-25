import React from "react";
import "./About.css";
import About_img from "../../assets/about.png";
import Play_img from "../../assets/play-icon.png";

const About = ({setPlay}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={About_img} className="about-icon" />
        <img src={Play_img} className="play-icon" onClick={()=>{setPlay(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow LeaderS Today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          suscipit impedit nemo molestiae voluptas ab perferendis ipsam harum
          unde commodi asperiores itaque, nulla sint eius inventore? Quam ea
          eius perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          suscipit impedit nemo molestiae voluptas ab perferendis ipsam harum
          unde commodi asperiores itaque, nulla sint eius inventore? Quam ea
          eius perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          suscipit impedit nemo molestiae voluptas ab perferendis ipsam harum
          unde commodi asperiores itaque, nulla sint eius inventore? Quam ea
          eius perferendis.
        </p>
      </div>
    </div>
  );
};

export default About;
