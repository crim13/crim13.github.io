import React, { useEffect, useState } from "react";

import axios from "axios";
import "./index.css";

const ProductPage = (props) => {
  const [product, setProduct] = useState("");
  const [productIndex, setProductIndex] = useState("1");
  const [productImageIndex, setProductImageIndex] = useState(0);
  const onPageNavigation = (direction) => () => {
    let index = productIndex;
    if (direction === "back" && productImageIndex > 0) {
      index--;
      console.log(index);
      setProductIndex(index);
    } else if (productImageIndex < 5) {
      index++;
      console.log(index);
      setProductIndex(index);
    }
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productIndex}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      });
  }, [productIndex]);
  return (
    <div className="shop-product-page">
      <div
        className="shop-product-slider"
        style={{ backgroundImage: `url(${product.thumbnail})` }}
      >
        <div className="shop-product-page-slider-navigation">
          <button
            className="shop-product-page-slider-back"
            // onClick={setProductImageIndex((prev) => prev - 1)}
          >
            Back
          </button>
          <button
            className="shop-product-slider-page-next"
            // onClick={setProductImageIndex((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="shop-product-info">
        <div className="shop-product-page-meta-wrapper">
          <div className="shop-product-page-meta">
            <p className="shop-product-page-category">{props.category}</p>
            <h1 className="shop-product-page-title">{product.title}</h1>
            <p className="shop-product-page-rating">
              4.5/5*<span> - 15 Reviews</span>
            </p>
            <div className="shop-product-options"></div>
            <p className="shop-product-page-description">
              {product.description}
            </p>
            <span className="shop-product-page-price">{product.price}$</span>
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
          <div className="shop-product-page-navigation">
            <button
              className="shop-product-page-back"
              onClick={onPageNavigation("back")}
            >
              Back
            </button>
            <button
              className="shop-product-page-next"
              onClick={onPageNavigation("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
