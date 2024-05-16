import $ from "./index.module.css";
import $G from "../../../GlobalStyles/global.module.css";
import $S from "../../../GlobalStyles/section.module.css";

const SectionTwo = () => {
  return (
    <>
      <div className={$S.TSectionWrapperFull} style={{ background: "#0f0f0f" }}>
        <div className={$.Cont1}>
          <div className={$.Col1}>
            <p className={$G.TCaption} id="services">
              Services
            </p>
            <h1 className={$G.THeading}>
              Our <span className={$G.TTextNegative}>Expertise</span> and{" "}
              <span className={$G.TTextNegative}>Offerings</span>
            </h1>
          </div>
        </div>
        <div className={$.Cont2}>
          <div className={$.Card1}>
            <div>
              1# UI/UX Design
              <span className={`${$.Arrow}`}>
                <span className={`${$G.ArrDiag} `}></span>
              </span>
            </div>
          </div>
          <div className={$.Card2}>
            <div>
              2# Development
              <span className={`${$.Arrow}`}>
                <span className={`${$G.ArrDiag} `}></span>
              </span>
            </div>
          </div>
          <div className={$.Card3}>
            <div>
              3# Full Suport
              <span className={`${$.Arrow}`}>
                <span className={`${$G.ArrDiag} `}></span>
              </span>
            </div>
          </div>
          <div className={$.Card4}>
            <div>
              4# Branding
              <span className={`${$.Arrow}`}>
                <span className={`${$G.ArrDiag} `}></span>
              </span>
            </div>
          </div>
        </div>
        <div className={$.ButtonWrapper}>
          <button className={$G.Button}>See More</button>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
