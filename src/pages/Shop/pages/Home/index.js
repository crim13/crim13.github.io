import React, { useEffect, useState } from "react";
import axios from "axios";

import productOneImg from "./furniture1.png";
import productTwoImg from "./product2.png";
import "./index.css";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setProducts(response.data.splice(0, 6));
      console.log(products);
    });
  }, []);

  return (
    <>
      <div className="shop-content-wrapper">
        <div className="shop-image-container"></div>
        <div className="shop-first-section">
          <div className="shop-home-meta">
            <h1 className="shop-title">Exotic minimal furniture.</h1>
            <p className="shop-sub-title">
              Choose from a wide range of well-crafted premium quality wooden
              furniture online.
            </p>
            <button className="shop-btn-primary">EXPLORE</button>
          </div>
        </div>
        <div className="shop-second-section">
          <p className="shop-vertical-text">Featured</p>
          <div className="shop-featured-products">
            <div className="shop-featured-items">
              <img className="shop-featured-image" src={productOneImg} />
              <p className="shop-featured-name">Featured 1</p>
              <p className="shop-featured-price">$145.60</p>
            </div>
            <div className="shop-featured-items">
              <img className="shop-featured-image" src={productOneImg} />
              <p className="shop-featured-name">Featured 1</p>
              <p className="shop-featured-price">$145.60</p>
            </div>
            <div className="shop-featured-items">
              <img className="shop-featured-image" src={productTwoImg} />
              <p className="shop-featured-name">Featured 1</p>
              <p className="shop-featured-price">$145.60</p>
            </div>
          </div>
          <div className="shop-featured-arrow"></div>
        </div>
      </div>
    </>
  );
};
export default Home;
