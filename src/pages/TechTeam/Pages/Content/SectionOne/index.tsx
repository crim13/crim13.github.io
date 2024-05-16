import $ from "./index.module.css";
import $G from "../../../GlobalStyles/global.module.css";
import $S from "../../../GlobalStyles/section.module.css";

const SectionOne = () => {
  return (
    <>
      <div className={$S.TSectionWrapperFull}>
        <div className={$.Wrapper}>
          <p className={$G.TCaption}>Statistics</p>
          <div className={$.Cont1}>
            <div className={$.Col1}>
              <h1 className={$G.THeading}>
                Our Journey: Designing{" "}
                <span className={$G.TTextNegative}>Experiences</span>, Shaping
                the
                <span className={$G.TTextNegative}> Future</span>
              </h1>
              <p className={$G.TParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className={$.Col2}>
              <div className={$.StatBox}>
                <div>
                  <span className={$.StatNum}>
                    182<span className={$G.Accent}>+</span>
                  </span>
                </div>
                <p className={$G.Caption}>
                  Global clients trusting <span className={$G.Accent}>Us</span>
                </p>
              </div>
              <div className={$.StatBox}>
                <div>
                  <span className={$.StatNum}>
                    64<span className={$G.Accent}>+</span>
                  </span>
                </div>
                <p className={$G.Caption}>Clients reviewed our software</p>
              </div>
              <div className={$.StatBox}>
                <div>
                  <span className={$.StatNum}>
                    225<span className={$G.Accent}>+</span>
                  </span>
                </div>
                <p className={$G.Caption}>
                  We develop over <span className={$G.Accent}>225+</span>{" "}
                  software
                </p>
              </div>
            </div>
          </div>
          <div className={$.Cont2}>
            <div className={$.Card}>
              <div className={$.Img1}></div>
              <span>Expertise</span>
            </div>
            <div className={$.Card}>
              <div className={$.Img2}></div>
              <span>Research</span>
            </div>
            <div className={$.Card}>
              <div className={$.Img3}></div>
              <span>Design</span>
            </div>
            <div className={$.Card}>
              <div className={$.Img4}></div>
              <span>Develop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
