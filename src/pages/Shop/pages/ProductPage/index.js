import React, { useEffect, useState } from "react";

import "./index.css";

const ProductPage = ({ currCategory, currProduct, products }) => {
  const [productIndex, setProductIndex] = useState(currProduct.id);
  const [productImageIndex, setProductImageIndex] = useState(0);

  let currentImage = 0;
  const onNextImage = (e) => {
    if (currProduct.images > 1) {
      currentImage++;

      if (currentImage >= currProduct.length) {
        currentImage = 0; // Reset to 0 if it exceeds the array length
      }
    }
  };

  return (
    <div className="shop-product-page">
      <div
        className="shop-product-slider"
        style={{ backgroundImage: `url(${currProduct.thumbnail})` }}
      >
        <div className="shop-product-page-slider-navigation">
          <button
            className="shop-product-page-slider-back"
            // onClick={onImageSlider}
          >
            Back
          </button>
          <button
            onClick={onNextImage}
            className="shop-product-slider-page-next"
          >
            Next
          </button>
        </div>
      </div>
      <div className="shop-product-info">
        <div className="shop-product-page-meta-wrapper">
          <div className="shop-product-page-meta">
            <p className="shop-product-page-category">{currCategory}</p>
            <h1 className="shop-product-page-title">{currProduct.title}</h1>
            <p className="shop-product-page-rating">
              4.5/5*<span> - 15 Reviews</span>
            </p>
            <div className="shop-product-options"></div>
            <p className="shop-product-page-description">
              {currProduct.description}
            </p>
            <span className="shop-product-page-price">
              {currProduct.price}$
            </span>
          </div>
          <div className="shop-product-page-quantity">
            <button className="shop-product-page-qty-minus">-</button>
            <p className="shop-product-page-qty-input">0</p>
            <button className="shop-product-page-qty-plus">+</button>
          </div>
          <div className="shop-product-buttons">
            <button className="shop-product-add-to-cart">ADD TO CART</button>
            <button className="shop-product-buy-now">BUY NOW</button>
          </div>
          {/* <div className="shop-product-page-navigation">
            <button
              className="shop-product-page-back"
            >
              Back
            </button>
            <button
              className="shop-product-page-next"
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
