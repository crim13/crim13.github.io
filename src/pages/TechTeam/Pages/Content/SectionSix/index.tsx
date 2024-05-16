import { useNavigate } from "react-router-dom";

import Posts from "../DB/Posts";

import $ from "./index.module.css";
import $G from "../../../GlobalStyles/global.module.css";
import $S from "../../../GlobalStyles/section.module.css";

const SectionSix = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={$S.TSectionWrapperFull}>
        <div className={$.Wrapper}>
          <p className={$G.TCaption}>Our Blog</p>
          <div className={$.Cont1}>
            <div className={$.Col1}>
              <h1 className={$G.THeading}>
                Our <span className={$G.TTextNegative}>Insights</span> and
                <span className={$G.TTextNegative}> Ideas</span>
              </h1>
            </div>
          </div>
          <div className={$.Cont2}>
            {Posts.slice(0, 3).map((post, index) => (
              <div className={$.Card} key={index}>
                <div
                  className={$.Img}
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <span className={$.LinkButton}>
                    <span className={$G.ArrDiag}></span>
                  </span>
                </div>
                <div className={$.PostMeta}>
                  <span className={$G.TCaption}>by {post.name}</span>
                  <h3>{post.text}</h3>
                  <p className={$G.TParagraph}>{post.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={$.ButtonWrapper}>
            <button className={$G.Button} onClick={() => navigate("blog/")}>
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
