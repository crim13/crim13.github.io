import React from "react";

import image from "../../images/image.png";
import pdfSvg from "../../svg/attachment.svg";
import hireSvg from "../../svg/hire.svg";

const Header = () => (
  <div className="header">
    <div className="about-meta">
      <div className="meta-wrapper">
        <h1 id="name">Hi! I'm Crim_</h1>
        <br />
        <h2 id="title">Front End Developer</h2>
        <br />
        <p id="description">
          Experienced front-end web developer with expertise in React.js,
          dedicated to creating engaging and responsive web applications for
          optimal user experiences.
        </p>
        <div className="buttons">
          <button
            className="download-cv header-button"
            href="./document/mycv.pdf"
          >
            <img className="button-icon" src={pdfSvg}></img>
            <span className="button-text">MyCV.pdf</span>
          </button>
          <button
            className="hire-me header-button"
            href="mailto:morosanu.cristian98@gmail.com"
          >
            <img className="button-icon" src={hireSvg}></img>
            <span className="button-text">HireMe.exe</span>
          </button>
        </div>
      </div>
      <img src={image} alt="Crim's portrait" className="image" />
    </div>
  </div>
);

export default Header;
