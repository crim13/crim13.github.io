import React, { useState, useMemo, useRef } from "react";

import "./index.css";

const Checkout = ({ cartItems, onSuccessful }) => {
  const [shipping, setShipping] = useState("Free");

  // USER INPUT
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);

  const onSubmit = () => {
    if (
      /^[a-zA-Z]+$/.test(firstName) &&
      /^[a-zA-Z]+$/.test(lastName) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      /^[a-zA-Z0-9\s,'-]*$/.test(address)
    ) {
      onSuccessful();
    }
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      firstNameRef.current.className = "invalid";
    } else {
      firstNameRef.current.className = "";
    }

    if (!/^[a-zA-Z]+$/.test(lastName)) {
      lastNameRef.current.className = "invalid";
    } else {
      lastNameRef.current.className = "";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailRef.current.className = "invalid";
    } else {
      emailRef.current.className = "";
    }

    if (!/^[a-zA-Z0-9\s,'-]*$/.test(address) || address.trim() === "") {
      addressRef.current.className = "invalid";
    } else {
      addressRef.current.className = "";
    }
  };

  const totalPrices = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
    [cartItems]
  );

  const onShippingClick = (price) => () => {
    setShipping(price);
  };
  return (
    <div className="shop-checkout-page">
      <div className="shop-checkout-left">
        <div className="shop-checkout-cart">
          <h1 className="shop-checkout-heading">Order summary</h1>
          <p className="shop-checkout-total">Total: ${totalPrices}</p>
          <div className="shop-checkout-cart-items">
            {cartItems.map((item, key) => (
              <div key={key} className="shop-checkout-item">
                <div
                  className="shop-checkout-item-thumbnail"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                ></div>

                <div className="shop-checkout-item-title">{item.title}</div>
                <div className="shop-checkout-item-quantity">
                  {item.quantity}
                </div>
                <div className="shop-checkout-item-price">${item.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="shop-checkout-shipping-section">
          <h1 className="shop-checkout-heading">Shipping</h1>
          <p className="shop-checkout-total">Select shipping method.</p>
          <div
            className="shop-checkout-shipping"
            onClick={onShippingClick("Free")}
            style={{ border: shipping === "Free" ? "2px solid #000" : "0" }}
          >
            <div className="shop-checkout-shipping-wrapper">
              <p className="shop-checkout-shipping-title">
                Standard Mail Post shipping
              </p>
              <p className="shop-checkout-shipping-time">5-7 working days</p>
            </div>
            <div className="shop-checkout-shipping-price">Free</div>
          </div>
          <div
            className="shop-checkout-shipping"
            style={{
              border: shipping === "$9.99" ? "2px solid #000" : "0",
            }}
            onClick={onShippingClick("$9.99")}
          >
            <div className="shop-checkout-shipping-wrapper">
              <p className="shop-checkout-shipping-title">Express shipping</p>
              <p className="shop-checkout-shipping-time">1-3 working days</p>
            </div>
            <div className="shop-checkout-shipping-price">$9.99</div>
          </div>
        </div>
      </div>
      <div className="shop-checkout-right">
        <h1 className="shop-checkout-heading">Shipping details</h1>
        <p className="shop-checkout-total">Fill in requested fields.</p>
        <div className="shop-checkout-payment">
          <div className="shop-checkout-form-name">
            <h3 className="shop-checkout-form-tag">Your Name</h3>
            <div className="shop-checkout-field shop-name">
              <input
                ref={firstNameRef}
                type="text"
                placeholder="Firstname"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Lastname"
                ref={lastNameRef}
              />
            </div>
          </div>
          <div className="shop-checkout-form-email">
            <h3>Email address</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@mail.com"
              ref={emailRef}
            />
          </div>

          <div className="shop-checkout-form-address">
            <h3 className="shop-checkout-form-tag">Billing Address</h3>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="address"
              placeholder="Address"
              ref={addressRef}
            />
          </div>

          <div className="shop-checkout-form-text">
            <p>Subtotal</p>
            <p>${totalPrices}</p>
          </div>
          <div className="shop-checkout-form-text">
            <p>Vat (20%)</p>
            <p>${(totalPrices * 0.2).toFixed(2)}</p>
          </div>
          <div className="shop-checkout-form-text">
            <p>Shipping:</p>
            <p>{shipping}</p>
          </div>
          <div className="shop-checkout-form-total">
            <p>Total</p>
            <p>
              $
              {shipping === "$9.99"
                ? (totalPrices + 9.99).toFixed(2)
                : totalPrices.toFixed(2)}
            </p>
          </div>
          <button className="shop-checkout-pay-now" onClick={onSubmit}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
