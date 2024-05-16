import $ from "./index.module.css";
import img from "./lsfb.png";
const PlayGround = () => {
  return (
    <>
      <div className={$.Wrapper}>
        <div className={$.GradNum}>
          <span>1</span>
          <img src={img} alt=" a " />
        </div>
        <div className={$.GradNum}>
          <span>2</span>
          <img src={img} alt=" a " />
        </div>
        <div className={$.GradNum}>
          <span>3</span>
          <img src={img} alt=" a " />
        </div>
        <div className={$.GradNum}>
          <span>4</span>
          <img src={img} alt=" a " />
        </div>
        <div className={$.GradNum}>
          <span>5</span>
          <img src={img} alt=" a " />
        </div>
        <div className={$.GradNum}>
          <span>6</span>
          <img src={img} alt=" a " />
        </div>
      </div>
    </>
  );
};
export default PlayGround;
