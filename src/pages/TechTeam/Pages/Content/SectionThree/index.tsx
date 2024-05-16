import $ from "./index.module.css";
import $G from "../../../GlobalStyles/global.module.css";
import $S from "../../../GlobalStyles/section.module.css";

const SectionThree = () => (
  <div className={$S.TSectionWrapperFull}>
    <span className={$.BackgroundParallax}></span>
    <div className={$.Cont}>
      <h1>
        "<span className={$G.TTextNegative}>Empowering </span>
        progress through <span className={$G.TTextNegative}>
          innovative
        </span>{" "}
        software <span className={$G.TTextNegative}>solutions</span>, our
        mission is to shape a digital future of{" "}
        <span className={$G.TTextNegative}>excellence and efficiency </span>
        for every user."
      </h1>
      {/* <button className={$G.Button} onClick={() => scrollToServ()}>
            Next
          </button> */}
    </div>
  </div>
);

export default SectionThree;
