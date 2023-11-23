import React, { useState } from "react";
import logo from "./logo.png";
import "./index.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const onNavigate = (i) => () => {
    // console.log(page);
  };
  const onDropDown = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const onSearch = () => {
    setIsSearching(!isSearching);
    console.log(isSearching);
  };
  return (
    <div className="shop-header">
      <div className="shop-nav-bar">
        <div className="shop-logo-wrapper">
          <img src={logo} className="shop-logo" />
        </div>
        <div className="shop-menu-wrapper">
          <div className="shop-menu-item" onClick={onNavigate(-1)}>
            Home
          </div>
          <div className={`shop-menu-item`} onClick={onDropDown}>
            Categories
          </div>
          <div className="shop-menu-item" onClick={onNavigate(-2)}>
            Ablout Us
          </div>
          <div className="shop-menu-item" onClick={onNavigate(-3)}>
            Contact
          </div>
          <div className="shop-menu-cart">
            <span className="cart-svg"></span>
          </div>
          <div className="shop-menu-search">
            <input
              type="text"
              placeholder="Search..."
              className={`shop-header-search ${isSearching ? "active" : ""}`}
            />
            <span className="search-svg" onClick={onSearch}></span>
          </div>
          <div className={`shop-menu-drop-down ${isActive ? "active" : null}`}>
            <div className="shop-menu-drop-list">
              <span className="shop-menu-drop-item">Category 1</span>
              <span className="shop-menu-drop-item">Category 2</span>
              <span className="shop-menu-drop-item">Category 3</span>
              <span className="shop-menu-drop-item">Category 4</span>
              <span className="shop-menu-drop-item">Category 5</span>
              <span className="shop-menu-drop-item">Category 6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
