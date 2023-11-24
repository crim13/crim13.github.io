import React, { useState, useEffect } from "react";

import logo from "./logo.png";
import "./index.css";

const Header = ({
  categories,
  currentCategory,
  cartItems,
  onMenuClick,
  onCartItemDelete,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const totalPrices = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const onCartClick = () => {
    setCartActive(!cartActive);
    setIsActive(false);
  };
  const onDropDown = () => {
    setIsActive(!isActive);
    setCartActive(false);
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
          <div className="shop-menu-cart-icon" onClick={onCartClick}>
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
                onClick={() => {
                  onMenuClick(category);
                  setIsActive(false);
                  setCartActive(false);
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className={`shop-menu-cart-drop-down`}>
          <div className="shop-menu-cart-wrapper">
            <div className="shop-menu-cart">
              <h1 className="shop-menu-cart-title">Cart</h1>
              <div className="shop-menu-cart-products">
                {cartItems.length > 0 ? (
                  cartItems.map((cartItem) => (
                    <div className="shop-cart-menu-item">
                      <span
                        className="shop-cart-thumbnail"
                        style={{
                          backgroundImage: `url(${cartItem.thumbnail})`,
                        }}
                      ></span>
                      <span className="shop-cart-item-title">
                        {cartItem.title}
                      </span>
                      <span className="shop-cart-item-price">
                        ${cartItem.price}
                      </span>
                      <button
                        className="shop-cart-delete-item"
                        onClick={onCartItemDelete(cartItem)}
                      >
                        x
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="shop-cart-empty">Cart Empty</p>
                )}
              </div>
              <div className="shop-cart-totals">
                <p>Total</p>
                <p>${totalPrices}</p>
              </div>
              <div className="shop-cart-buttons">
                <button
                  className="shop-cart-continue"
                  onClick={() => setCartActive(false)}
                >
                  Continue shoping
                </button>
                <button className="shop-cart-checkout">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
