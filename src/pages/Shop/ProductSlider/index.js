import React, { useEffect, useState } from "react";

import "./index.css";

const ProductSlider = ({ currCategory, currProducts, onProductClick }) => {
  const [sliderNavigate, setSliderNavigate] = useState(true);
  const onNextProducts = () => {
    console.log(currProducts);
    setSliderNavigate(!sliderNavigate);
  };

  return (
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
              className="shop-featured-items"
              style={{ backgroundImage: `url(${product.thumbnail})` }}
              onClick={() => onProductClick(product)}
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
  );
};
export default ProductSlider;
