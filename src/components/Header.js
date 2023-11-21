import React from "react";

import image from "../image.png";
import pdfSvg from "../svg/attachment.svg";
import hireSvg from "../svg/hire.svg";

export default function Header() {
  const name = "Hi! I'm Crim_";
  const title = "Front End Developer";
  const description =
    "Experienced front-end web developer with expertise in React.js, dedicated to creating engaging and responsive web applications for optimal user experiences.";

  return (
    <div className="header">
      <div className="about-meta">
        <div className="meta-wrapper">
          <h1 id="name">{name}</h1>
          <br />
          <h2 id="title">{title}</h2>
          <br />
          <p id="description">{description}</p>
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
}
