import React, { useEffect, useState } from "react";

import "./index.css";
import ProductSlider from "../../ProductSlider";

const CategoryPage = ({ currCategory, currProducts, onProductPage }) => {
  const [selectedCategory, setSelectedCategory] = useState("laptops");
  const [currentProduct, setCurrentProduct] = useState([]);
  const onNextProducts = () => {
    console.log(currCategory);
  };
  useEffect(() => {
    onProductPage(currentProduct);
    // console.log("curr" + currentProduct);
  }, [currentProduct]);
  useEffect(() => {
    if (currCategory !== "") {
      setSelectedCategory(currCategory);
    } else {
      console.log("no name to prop");
    }
  }, [currCategory]);

  return (
    <>
      <div className="shop-content-wrapper">
        <div className="shop-image-container"></div>
        <div className="shop-first-section">
          <div className="shop-home-meta">
            <h1 className="shop-title">{currCategory}</h1>
            <p className="shop-sub-title">
              Choose from a wide range of well-crafted premium quality wooden
              furniture online.
            </p>
            <button className="shop-btn-primary">EXPLORE</button>
          </div>
        </div>
        <ProductSlider
          currProducts={currProducts}
          currCategory={currCategory}
          onProductClick={(product) => setCurrentProduct(product)}
          // onClick={}
        />
      </div>
    </>
  );
};
export default CategoryPage;
