import React, { useState } from "react";

import $ from "./index.module.css";
import $G from "../../../GlobalStyles/global.module.css";
import $S from "../../../GlobalStyles/section.module.css";

import Testimonials from "../DB/Testimonials";

const SectionFive = () => {
  const [TstIndex, setTstIndex] = useState(0);
  const TstLenght = Testimonials.length;

  const Prev = () => {
    if (TstIndex === 0) {
      setTstIndex(TstLenght - 1);
    } else {
      setTstIndex((prev) => prev - 1);
    }
  };

  const Next = () => {
    if (TstIndex === TstLenght - 1) {
      setTstIndex(0);
    } else {
      setTstIndex(TstIndex + 1);
    }
  };
  return (
    <>
      <div className={$S.TSectionWrapperFull}>
        <div className={$.Cont}>
          <div
            className={$.Sheet}
            style={{ translate: `${-100 * TstIndex}%` }}
            id="sheet"
          >
            {Testimonials.map((tst, index) => (
              <div
                style={{
                  filter: `${index === TstIndex ? "blur(0)" : "blur(15px)"}`,
                }}
                className={$.TstWrapper}
                key={tst.key}
              >
                <div
                  className={$.Col1}
                  style={{ backgroundImage: `url(${tst.image})` }}
                ></div>
                <div className={$.Col2}>
                  <h1 className={$G.TParagraph}>{tst.text}</h1>
                  <div>
                    <div className={$.UserMeta}>
                      <span>{tst.title}</span>
                      <h2>{tst.name}</h2>
                    </div>
                  </div>
                  <span className={$G.TCaption}>{tst.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              className={`${$G.ArrLeft} ${$.Left}`}
              onClick={() => Prev()}
            ></button>
            <button
              className={`${$G.ArrRight} ${$.Right}`}
              onClick={() => Next()}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
