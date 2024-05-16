import React from "react";
import $ from "./index.module.css";
import $G from "../../GlobalStyles/global.module.css";

type props = {
  caption: String;
  heading: String;
  image: any;
};

const THeader = ({ caption, heading, image }: props) => {
  const ScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className={$.THeaderWrapper}>
      <div
        className={$.THeaderImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className={$G.TCaption}>{caption}</p>
        <h1 className={$G.THeading}>{heading}</h1>
        <span
          className={`${$G.ArrDown} ${$.ArrowDown}`}
          onClick={() => ScrollDown()}
        ></span>
        <div className={$.THeaderOverlay}></div>
      </div>
      <div className={$.THeaderScrollText}>
        ./TechTeam<span className={$G.TTextNegative}>./TechTeam</span>
        ./TechTeam<span className={$G.TTextNegative}>./TechTeam</span>
        ./TechTeam./
      </div>
    </div>
  );
};
export default THeader;
