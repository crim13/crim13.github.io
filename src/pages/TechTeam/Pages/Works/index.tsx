import THeader from "../Header";
import SectionFour from "../Content/SectionFour";
import FeaturedImg from "./featuredimg.jpg";

const Works = () => (
  <>
    <THeader
      caption="Our Work"
      heading="See what we've created so far"
      image={FeaturedImg}
    />
    <SectionFour />
  </>
);
export default Works;
