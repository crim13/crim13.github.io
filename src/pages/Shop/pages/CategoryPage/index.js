import React, { useEffect, useState } from "react";

import "./index.css";

const CategoryPage = ({ currCategory, currProducts, onProductPage }) => {
  const [sliderNavigate, setSliderNavigate] = useState(true);
  const onNextProducts = () => {
    setSliderNavigate(!sliderNavigate);
    console.log(currProducts);
  };
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
        <div className="shop-second-section">
          <p className="shop-vertical-text">{currCategory}</p>
          <div className="shop-category-products-wrapper">
            <div
              className={`shop-category-products ${
                sliderNavigate ? "slide1" : "slide2"
              }`}
            >
              {currProducts.map((product) => (
                <div
                  key={product.id}
                  className="shop-featured-items"
                  style={{ backgroundImage: `url(${product.thumbnail})` }}
                  onClick={() => onProductPage(product)}
                >
                  <div className="shop-category-product-meta">
                    <p className="shop-featured-name">{product.title}</p>
                    <p className="shop-featured-price">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="shop-featured-arrow" onClick={onNextProducts}></div>
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
