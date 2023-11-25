import React from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Imag";
import "../src/simplecard.css"; // Import the CSS file

const SimpleCard = () => {
  return (
    <div className="container-main">
      <div className="container">
        <Image url="image.jpg" />
        <span className="image">
          <img
            src="https://img.freepik.com/free-photo/psychedelic-portrait-collage_23-2149303459.jpg?w=740&t=st=1700905124~exp=1700905724~hmac=8dc85dc4b77f324f0fd1850ea5abb7d89a48f113f474e929390224f981a09c62"
            alt="man"
            width={200}
          ></img>

        </span>
        <Title title="Card title" />
        <Description description="Card description" />
        <div className="text">
        <p> Hello, <span className="color">My nam is Culaid</span></p>
        <h1 className="text1">Zum 
        <span className="color">Nillerzi</span></h1>
        <p className="text3">I am a Web Developer</p>
        <p className="text2">
          lorem sonfe founvwoe novonv on dson owno vdwod nownv oneo fosn 
        </p>
        <button className="btnn">uiwnf dine</button>
        </div>
        <img src="" alt=""></img>
      </div>
    </div>
  );
};

export default SimpleCard;
