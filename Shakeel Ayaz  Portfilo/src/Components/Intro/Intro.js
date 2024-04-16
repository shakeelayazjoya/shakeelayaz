import React from "react";
import "./intro.css";
import Github from "../../Components/images/github.png";
import Linkdin from "../../Components/images/linkedin.png";
import Instagram from "../../Components/images/instagram.png";
import Vector1 from "../../Components/images/Vector1.png";
import Vector2 from "../../Components/images/Vector2.png";
import boy from "../../Components/images/boy.png";
import thumbup from "../../Components/images/thumbup.png";
import Crown from "../../Components/images/crown.png";
import glassesimoji from "../../Components/images/glassesimoji.png";
import Floating from "../FloatingDiv/Floating";
const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hy! I Am</span>
            <span>Shakeel Ayaz </span>
            <span>
              Front End Developer With High Lvel of Experience In WebDesigning
              And DevelopMEnt , Producting the Quality work.
            </span>
          </div>
          <button className="button i-button">Hire Me</button>
          <div className="i-icon">
            <img src={Github} alt="" />
            <img src={Linkdin} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="boy" />
          <img src={glassesimoji} alt="boy" />

          <div style={{ top: "-4%", left: "68%" }}>
            <Floating image={Crown} text1="Web" text2="Developer " />
          </div>
          <div style={{ top: "18rem", left: "0rem" }}>
            <Floating image={thumbup} text1="Best Design " text2="Award " />
          </div>
        </div>
        {/* blur */}

        <div className="blur" style={{background:'rgba(238 210 255)'}}></div>
        <div className="blur" style={{background:'C1F5FF', top:'17rem',width:'21rem',
    height:'11rem', left:'-9rem'}}></div>

        </div>
    </>
  );
};

export default Intro;
