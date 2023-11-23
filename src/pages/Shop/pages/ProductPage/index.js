import React from "react";

import "./index.css";

const ProductPage = () => {
  return (
    <div className="shop-product-page">
      <div className="shop-product-slider">{/* images */}</div>
      <div className="shop-product-info">
        <div className="shop-product-page-meta-wrapper">
          <div className="shop-product-page-meta">
            <p className="shop-product-page-category">Category</p>
            <h1 className="shop-product-page-title">Title</h1>
            <p className="shop-product-page-rating">
              4.5/5*<span> - 15 Reviews</span>
            </p>
            <div className="shop-product-options"></div>
            <p className="shop-product-page-description">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="shop-product-page-price">265.50$</span>
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
        </div>
      </div>
    </div>
  );
};
export default ProductPage;