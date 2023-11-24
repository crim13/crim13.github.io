import React, { useEffect, useState } from "react";

import "./index.css";
import ProductSlider from "../../ProductSlider";

const CategoryPage = (prop) => {
  const [selectedCategory, setSelectedCategory] = useState("laptops");

  const onNextProducts = () => {
    console.log(selectedCategory);
  };

  useEffect(() => {
    if (prop.category !== "") {
      setSelectedCategory(prop.category);
    } else {
      console.log("no name to prop");
    }
  }, [prop.category]);

  return (
    <>
      <div className="shop-content-wrapper">
        <div className="shop-image-container"></div>
        <div className="shop-first-section">
          <div className="shop-home-meta">
            <h1 className="shop-title">{prop.category}</h1>
            <p className="shop-sub-title">
              Choose from a wide range of well-crafted premium quality wooden
              furniture online.
            </p>
            <button className="shop-btn-primary">EXPLORE</button>
          </div>
        </div>
        <ProductSlider products={prop.products} category={prop.category} />
      </div>
    </>
  );
};
export default CategoryPage;
