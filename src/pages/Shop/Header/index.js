import React, { useState, useEffect } from "react";

import logo from "./logo.png";
import "./index.css";

const Header = ({ categories, currentCategory, cartItems, onMenuClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const onCartClick = () => {
    setCartActive(!cartActive);
    console.log(categories);
    console.log(cartItems);
  };
  const onDropDown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="shop-header">
      <div
        className={`shop-nav-bar ${cartActive ? "cart-open" : ""} ${
          isActive ? "open" : "closed"
        }`}
      >
        <div className="shop-logo-wrapper">
          <img src={logo} className="shop-logo" />
        </div>
        <div className="shop-menu-wrapper">
          <div className="shop-menu-cart" onClick={onCartClick}>
            <span className="cart-length">{cartItems.length}</span>
            <span className="cart-svg"></span>
          </div>
          <div className="shop-menu-burger" onClick={onDropDown}>
            <span className="shop-menu-icon"></span>
          </div>
        </div>
        <div className={`shop-menu-drop-down`}>
          <div className="shop-menu-drop-list">
            {categories.map((category, key) => (
              <span
                key={key}
                className={`shop-menu-drop-item ${
                  category === currentCategory ? "active" : ""
                }`}
                onClick={() => onMenuClick(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className={`shop-menu-cart-drop-down`}>
          <div className="shop-menu-cart-wrapper">
            <div className="shop-menu-cart">
              {/* {cartItems} */}
              {/* {cartItems.length > 0
                ? {
                    // cartItems.map((item, key) => (
                    //     <span key={key} className={`shop-menu-cart`}>
                    //       {item}
                    //     </span>
                    // )
                  }
                : {}} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
