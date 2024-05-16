import ProductGallery from "../../components/ProducGallery";
import Slider from "../../components/Slider";
import $ from "./index.module.css";
const Home = () => {
  return (
    <div className={$.Wrapper}>
      <Slider />
      <div className={$.Section1}>
        <h2>Top Trending</h2>
        <p>
          Here is some of our most popular products people are in love with.
        </p>
      </div>
      <ProductGallery limit={8} filters={true} />
    </div>
  );
};
export default Home;
