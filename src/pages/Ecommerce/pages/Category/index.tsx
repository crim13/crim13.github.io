import ProductGallery from "../../components/ProducGallery";
import $ from "./index.module.css";
const Category = () => {
  return (
    <>
      <div className={$.TitleBar}>
        <h1>Category</h1>
        <p>Home / Category</p>
      </div>
      <ProductGallery limit={12} filters={true} />
    </>
  );
};
export default Category;
