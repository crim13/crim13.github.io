import THeader from "../Header";
import SectionThree from "../Content/SectionThree";
import SectionFive from "../Content/SectionFive";
import FeaturedImg from "./featuredimg.jpg";
import $G from "../../GlobalStyles/global.module.css";
import $S from "../../GlobalStyles/section.module.css";
import $ from "./index.module.css";

const About = () => (
  <>
    <THeader caption="About Us" heading="Get to know us" image={FeaturedImg} />
    <div className={`${$.Wrapper} ${$S.TSectionWrapper}`}>
      <p className={$G.TCaption}>About Us</p>
      <h1 className={$G.THeading} style={{ marginBottom: 40, marginTop: 40 }}>
        Our Story
      </h1>
      <p className={$G.TParagraph}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </p>
    </div>
    {/* <SectionThree /> */}
    <SectionFive />
  </>
);
export default About;
