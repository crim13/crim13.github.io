import { useState } from "react";
import Slides from "./slides";
import $G from "../../index.module.css";

import $ from "./index.module.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const prevSlide = () => {
    slideIndex === 0
      ? setSlideIndex(Slides.length - 1)
      : setSlideIndex(slideIndex - 1);
  };
  const nextSlide = () => {
    slideIndex === Slides.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  return (
    <>
      <div className={$.Wrapper}>
        <div
          className={$.SlideSheet}
          style={{ translate: `calc(-100% * ${slideIndex})` }}
        >
          {Slides.map((slide) => (
            <div
              className={$.Slide}
              key={slide.key}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h3>{slide.caption}</h3>
              <h1>{slide.heading}</h1>
              <p>{slide.text}</p>
              <button className={$.Button}>{slide.button}</button>
            </div>
          ))}
        </div>
        <div className={$.Dots}>
          {Slides.map((slide, index) => (
            <span
              className={index === slideIndex ? $.ActiveDot : ""}
              key={index}
              onClick={() => setSlideIndex(index)}
            >
              -
            </span>
          ))}
        </div>
        <button className={$.Prev} onClick={() => prevSlide()}>
          <span></span>
        </button>

        <button className={$.Next} onClick={() => nextSlide()}>
          <span></span>
        </button>
      </div>
    </>
  );
};
export default Slider;
