import React, { useState, useEffect } from "react";

import logo from "./logo.png";
import "./index.css";

const Header = ({ categories, currentCategory, onMenuClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const onDropDown = () => {
    setIsActive(!isActive);
  };
  const onSearch = () => {
    setIsSearching(!isSearching);
    console.log(categories);
  };

  return (
    <div className="shop-header">
      <div className={`shop-nav-bar ${isActive ? "open" : "closed"}`}>
        <div className="shop-logo-wrapper">
          <img src={logo} className="shop-logo" />
        </div>
        <div className="shop-menu-wrapper">
          <div className="shop-menu-search">
            <input
              type="text"
              placeholder="Search..."
              className={`shop-header-search ${isSearching ? "active" : ""}`}
            />
            <span className="search-svg" onClick={onSearch}></span>
          </div>
          <div className="shop-menu-cart">
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
      </div>
    </div>
  );
};
export default Header;
