import { useNavigate } from "react-router-dom";

import $ from "./index.module.css";
import $G from "../../../GlobalStyles/global.module.css";
import $S from "../../../GlobalStyles/section.module.css";

const SectionFour = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={$S.TSectionWrapper}>
        <div className={$.Cont}>
          <div className={$.SectionHeader}>
            <p className={$G.TCaption}>Section #2</p>
            <h1 className={$G.THeading}>
              Our <span className={$G.TTextNegative}>creative</span> work
            </h1>
          </div>
          <div className={$.HCard}>
            <span className={$.GradOver}></span>
            <div className={$.Img1}></div>
            <div>
              <span className={$G.Accent}>#1</span>
              <h3>Project #1 - Creative</h3>
              <p className={$G.TParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className={$.VCard}>
            <div>
              <span className={$.GradOver}></span>
              <span className={$G.Accent}>#2</span>
              <h3>Project #2 - Creative</h3>
              <p className={$G.TParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className={$.Img2}></div>
            </div>

            <div>
              <span className={$.GradOver}></span>
              <span className={$G.Accent}>#3</span>
              <h3>Project #3 - Creative</h3>
              <p className={$G.TParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className={$.Img3}></div>
            </div>
          </div>
          <button
            className={$G.Button}
            onClick={() => navigate("/techteam/works")}
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
