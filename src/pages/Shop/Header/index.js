import React, { useState, useEffect } from "react";

import axios from "axios";

import logo from "./logo.png";
import "./index.css";

const Header = ({ onMenuClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [categories, setCategories] = useState([]);
  const onDropDown = () => {
    setIsActive(!isActive);
  };
  const onSearch = () => {
    setIsSearching(!isSearching);
  };
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setCategories(response.data.splice(0, 6));
    });
    // .catch(err => console.error(err));
  }, []);
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
            {categories.map((category, index) => (
              <span
                className={`shop-menu-drop-item shop-cat-${index}`}
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
