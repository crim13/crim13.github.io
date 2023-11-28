import React, { useState, useMemo } from "react";

import logo from "./logo.png";
import "./index.css";

const Header = ({
  categories,
  currentCategory,
  cartItems,
  onMenuClick,
  onCartItemDelete,
  onCartItemQty,
  onCheckOutPage,
}) => {
  const totalPrices = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
    [cartItems]
  );

  const [isActive, setIsActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

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
        <div className="shop-menu-drop-down">
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
                  onCheckOutPage(false);
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="shop-menu-cart-drop-down">
          <div className="shop-menu-cart-wrapper">
            <div className="shop-menu-cart">
              <h1 className="shop-menu-cart-title">Cart</h1>
              <div className="shop-menu-cart-products">
                {cartItems.length > 0 ? (
                  cartItems.map((cartItem, key) => (
                    <div key={key} className="shop-cart-menu-item">
                      <span
                        className="shop-cart-thumbnail"
                        style={{
                          backgroundImage: `url(${cartItem.thumbnail})`,
                        }}
                      ></span>
                      <span className="shop-cart-item-title">
                        {cartItem.title}
                      </span>
                      <span className="shop-cart-item-quantity">
                        <p
                          className="shop-cart-operators substract"
                          onClick={onCartItemQty("sub", cartItem)}
                        >
                          -
                        </p>
                        <p className="shop-cart-operators quantity">
                          {cartItem.quantity}
                        </p>
                        <p
                          className="shop-cart-operators add"
                          onClick={onCartItemQty("add", cartItem)}
                        >
                          +
                        </p>
                      </span>
                      <span className="shop-cart-item-price">
                        ${cartItem.price * cartItem.quantity}
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
                  onClick={() => {
                    setCartActive(false);
                    onCheckOutPage(false);
                  }}
                >
                  Continue shoping
                </button>
                <button
                  className="shop-cart-checkout"
                  onClick={() => {
                    onCheckOutPage(true);
                    setCartActive(false);
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
