import THeader from "../Header";
import SectionOne from "../Content/SectionOne";
import SectionTwo from "../Content/SectionTwo";
import SectionThree from "../Content/SectionThree";
import SectionFour from "../Content/SectionFour";
import SectionFive from "../Content/SectionFive";
import SectionSix from "../Content/SectionSix";

import FeaturedImg from "./featuredimg.jpg";

const THome = () => {
  return (
    <>
      <THeader caption="Welcome to" heading="TechTeam" image={FeaturedImg} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionThree />
    </>
  );
};
export default THome;
