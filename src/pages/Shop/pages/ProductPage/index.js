import React, { useEffect, useState } from "react";

import "./index.css";

const ProductPage = ({
  currCategory,
  currProduct,
  onPageNavigationBack,
  onPageNavigationNext,
  onAddToCard,
}) => (
  <div className="shop-product-page">
    <div
      className="shop-product-slider"
      style={{ backgroundImage: `url(${currProduct.thumbnail})` }}
    ></div>
    <div className="shop-product-info">
      <div className="shop-product-page-meta-wrapper">
        <div className="shop-product-page-meta">
          <p className="shop-product-page-category">{currCategory}</p>
          <h1 className="shop-product-page-title">{currProduct.title}</h1>
          <p className="shop-product-page-rating">
            {currProduct.rating}/5*<span> - 15 Reviews</span>
          </p>
          <div className="shop-product-options"></div>
          <p className="shop-product-page-description">
            {currProduct.description}
          </p>
          <span className="shop-product-page-price">{currProduct.price}$</span>
        </div>
        <div className="shop-product-page-quantity">
          <button className="shop-product-page-qty-minus">-</button>
          <p className="shop-product-page-qty-input">0</p>
          <button className="shop-product-page-qty-plus">+</button>
        </div>
        <div className="shop-product-buttons">
          <button className="shop-product-add-to-cart" onClick={onAddToCard}>
            ADD TO CART
          </button>
          <button className="shop-product-buy-now">BUY NOW</button>
        </div>
        <div className="shop-product-page-navigation">
          <button
            className="shop-product-page-back"
            onClick={onPageNavigationBack}
          ></button>
          <button
            className="shop-product-page-next"
            onClick={onPageNavigationNext}
          ></button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductPage;
